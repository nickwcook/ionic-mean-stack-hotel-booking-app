var express = require('express');
var app = express();
var mongoose = require('mongoose');
var logger = require('morgan');
var bodyParser = require('body-parser');
var cors = require('cors');

mongoose.connect('mongodb://localhost/hotels', {
      useMongoClient: true
})

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(cors());


// MODELS
var Room = mongoose.model('Room', {
      room_number: Number,
      type: String,
      beds: Number,
      max_occupancy: Number,
      cost_per_night: Number,
      reserved: [{
            from: String,
            to: String
      }]
})


// Generate test data if no existing records - Remove in production environment
function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
}

Room.remove({}, function(res) {
      console.log('Records removed');
})

Room.count({}, function(err, count) {
      console.log(`Rooms: ${count}`);

      if (count === 0) {

            var roomsCreated = 0;

            var roomsToCreate = 150;

            var roomTypes = [
                  'standard',
                  'villa',
                  'penthouse',
                  'stuio'
            ]

            // For testing, all rooms booked out from 
            // 18th May 2017 to 25th May 2017 
            // and 29th January 2018 to 31st January 2018
            
            for (var i = 0; i < roomsToCreate; i++) {
                  var newRoom = new Room({
                        room_number: roomsCreated + 1,
                        type: roomTypes[getRandomInt(0, 3)],
                        beds: getRandomInt(1, 6),
                        max_occupancy: getRandomInt(1, 8),
                        cost_per_night: getRandomInt(50, 500),
                        reserved: [
                              {from: '1970-01-01', to: '1970-01-02'},
                              {from: '2017-04-18', to: '2017-04-23'},
                              {from: '2018-01-29', to: '2018-01-30'}
                          ]
                  })

                  newRoom.save(function(err, doc) {
                        if (err) {
                              console.error(`Error creating new room: ${err}`);
                        } else {
                              console.log(`New test room created: ${doc.id}`);
                        }
                  })

                  roomsCreated++;
            }

            if (roomsCreated  < 100) {
                  createRoom();
            }

      }
})


// ROUTES
app.post('/api/rooms', function(req, res) {

      Room.find({
            type: req.body.roomType,
            beds: req.body.beds,
            max_occupancy: {
                  $gt: req.body.guests
            },
            cost_per_night: {
                  $gte: req.body.priceRange.lower, 
                  $lte: req.body.priceRange.upper
            },
            reserved: {
                  // Check if booked dates for room overlap with requested dates
                  $not: {
                        $elemMatch: {
                              from: {
                                    $lt: req.body.to.substring(0,10)
                              }, 
                              to: {
                                    $gt: req.body.from.substring(0,10)
                              }
                        }
                  }
            }
      }, function(err, rooms) {
            if (err) {
                  res.send(err);
            } else {
                  res.json(rooms);
            }
      })

})

app.post('/api/rooms/reserve', function(req, res) {
      console.log(req.body._id);

      Room.findByIdAndUpdate(req.body._id, {
            $push: {
                  'reserved': {
                        from: req.body.from,
                        to: req.body.to
                  }
            }
      }, {
            safe: true,
            new: true
      }, function(err, room) {
            if (err) {
                  res.send(err);
            } else {
                  res.json(room);
            }
      })
})

app.listen(8080);
console.log('App listening on port 8080');