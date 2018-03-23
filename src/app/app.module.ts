import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

import { TrackingDetailsModule } from '../pages/tracking-details/tracking-details.module';
import { TrackingSearchModule } from '../pages/tracking-search/tracking-search.module';
import { TrackingScannerModule } from '../pages/tracking-scanner/tracking-scanner.module';

@NgModule({
  declarations: [
    MyApp,
    HomePage
  ],
  imports: [
    BrowserModule,
    TrackingScannerModule,
    TrackingDetailsModule,
    TrackingSearchModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QRScanner,
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
