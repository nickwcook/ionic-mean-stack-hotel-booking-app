import { Component } from '@angular/core';
import { IonicPage, NavController, LoadingController, AlertController, NavParams } from 'ionic-angular';
import { RoomsProvider } from '../../providers/rooms/rooms';

@IonicPage()
@Component({
      selector: 'page-booking',
      templateUrl: 'booking.html',
})

export class BookingPage {

      room: any;
      details: any;
      checkIn: string;
      checkOut: string;

      constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public navParams: NavParams, private roomsProv: RoomsProvider) {
            this.room = this.navParams.get('room');
            this.details = this.navParams.get('details');
            this.checkIn = new Date(this.details.from).toString().substr(0, 15);
            this.checkOut = new Date(this.details.to).toString().substr(0, 15);
      }
      
      ionViewDidLoad() {
            console.log('ionViewDidLoad BookingPage');
      }

      bookRoom() {

            let newBooking = {
                  _id: this.room._id,
                  from: this.checkIn.substr(0, 10),
                  to: this.checkOut.substr(0, 10)
            }

            let loading = this.loadingCtrl.create({
                  content: 'Processing booking...'
            })

            loading.present();

            this.roomsProv.reserveRoom(newBooking)
                  .then(
                        res => {
                              loading.dismiss();
                              let alert = this.alertCtrl.create({
                                    title: 'Room Booked',
                                    subTitle: `
                                          Your booking for ${newBooking.from} to ${newBooking.to} was successful
                                    `,
                                    buttons: [
                                          'Close'
                                    ]
                              })
                              alert.present();
                              this.navCtrl.popToRoot();
                        },
                        err => {
                              console.error(`Error booking room: ${err}`);
                        }
                  )

      }

}