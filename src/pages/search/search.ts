import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { RoomsProvider } from '../../providers/rooms/rooms';
import { AvailableRoomsPage } from '../available-rooms/available-rooms';

@IonicPage()
@Component({
      selector: 'search-page',
      templateUrl: 'search.html',
})

export class SearchPage {

      roomType: String;
      guests: number;
      beds: number;
      priceRange: any;
      from: string;
      to: string;

      constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public alertCtrl: AlertController, public roomsProv: RoomsProvider) {
            let today = new Date();
            let tomorrow = new Date();
            tomorrow.setDate(today.getDate() + 1);

            this.priceRange = {
                  lower: 50,
                  upper: 500
            }
            this.roomType = 'standard';
            this.guests = 1;
            this.beds = 1;
            this.from = today.toISOString();
            this.to = tomorrow.toISOString();
      }
      
      ionViewDidLoad() {
        
      }

      findRooms() {

            let loading = this.loadingCtrl.create({
                  content: 'Finding rooms...'
            })

            loading.present();

            let options = {
                  roomType: this.roomType,
                  guests: this.guests,
                  beds: this.beds,
                  from: this.from,
                  to: this.to,
                  priceRange: this.priceRange
            }

            this.roomsProv.getRooms(options)
                  .then(
                        data => {
                              loading.dismiss();
      
                              if (typeof(data[0]) === 'undefined') {
                                    let alert = this.alertCtrl.create({
                                          title: 'Alert',
                                          subTitle: 'No rooms matching your criteria could be found',
                                          buttons: [
                                                'Okay'
                                          ]
                                    })
                                    alert.present();
                              } else {
                                    this.navCtrl.push(AvailableRoomsPage, {
                                          rooms: data,
                                          details: options
                                    })
                              }
                        },
                        err => {
                          return err;
                        }
                  )


      }

}
