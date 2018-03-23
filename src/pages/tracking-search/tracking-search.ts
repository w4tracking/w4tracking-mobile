import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';

/**
 * Generated class for the TrackingSearchPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tracking-search',
  templateUrl: 'tracking-search.html',
})
export class TrackingSearchPage {
  isAndroid: boolean = false;
  constructor(platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
    this.isAndroid = platform.is('android');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingSearchPage');
  }
  search() {

  }
}
