import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-tracking-scanner',
  templateUrl: 'tracking-scanner.html',
})
export class TrackingScannerPage {
  identified: string;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.identified = this.navParams.get('identified');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TrackingScannerPage');
  }

}
