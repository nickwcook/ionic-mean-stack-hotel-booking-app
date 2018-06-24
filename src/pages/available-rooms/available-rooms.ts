import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { BookingPage } from '../booking/booking';

@IonicPage()
@Component({
      selector: 'page-available-rooms',
      templateUrl: 'available-rooms.html',
})

export class AvailableRoomsPage {

      rooms: any;

      constructor(public navCtrl: NavController, public navParams: NavParams) {
            this.rooms = this.navParams.get('rooms');
      }
      
      ionViewDidLoad() {
            console.log('ionViewDidLoad AvailableRoomsPage');
      }

      bookRoom(room) {
            this.navCtrl.push(BookingPage, {
                  room: room,
                  details: this.navParams.get('details')
            })
      }

}