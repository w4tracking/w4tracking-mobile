import { Component } from '@angular/core';
import { NavController, Platform } from 'ionic-angular';
import { TrackingDetailsPage } from '../tracking-details/tracking-details';
import { TrackingSearchPage } from '../tracking-search/tracking-search';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';
import { TrackingScannerPage } from '../tracking-scanner/tracking-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  wolsnut: string = "tracking";
  isAndroid: boolean = false;
  constructor(platform: Platform, public nav: NavController, private qrScanner: QRScanner) {
    this.isAndroid = platform.is('android');
  }

  goToTracking() {

  }
  goToScanner() {
    // Optionally request the permission early
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          console.log('Scanned something', text);
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
          this.nav.push(TrackingScannerPage, { identified: text });
        });

        // show camera preview
        this.qrScanner.show();

        // wait for user to scan something, then the observable callback will be called

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    }).catch((e: any) => console.log('Error is', e));
  }

  goToNewTracking() {
    //enviar codigo qr virtual
    this.nav.push(TrackingScannerPage, { identified: "text" });
  }

  goToFindScanner() {
    // Optionally request the permission early
    this.qrScanner.prepare().then((status: QRScannerStatus) => {
      if (status.authorized) {
        // camera permission was granted
        // start scanning
        let scanSub = this.qrScanner.scan().subscribe((text: string) => {
          alert('Scanned something : ' + text);
          this.qrScanner.hide(); // hide camera preview
          scanSub.unsubscribe(); // stop scanning
        });

        // show camera preview
        this.qrScanner.show();

        // wait for user to scan something, then the observable callback will be called

      } else if (status.denied) {
        // camera permission was permanently denied
        // you must use QRScanner.openSettings() method to guide the user to the settings page
        // then they can grant the permission from there
      } else {
        // permission was denied, but not permanently. You can ask for permission again at a later time.
      }
    }).catch((e: any) => console.log('Error is', e));

  }

  goToSubscriptions() {

  }

  goToSearchTracking() {
    this.nav.push(TrackingDetailsPage);
  }
  goToSearch() {
    this.nav.push(TrackingSearchPage);
  }
  reloadTracking(refresher) {
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
