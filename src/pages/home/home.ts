import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SearchPage } from '../search/search';

@Component({
      selector: 'home-page',
      templateUrl: 'home.html'
})

export class HomePage {

      constructor(public navCtrl: NavController) {
            
      }

      openSearch() {
            this.navCtrl.push(SearchPage);
      }

}
