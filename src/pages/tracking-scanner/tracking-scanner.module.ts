import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackingScannerPage } from './tracking-scanner';

@NgModule({
  declarations: [
    TrackingScannerPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackingScannerPage),
  ],
})
export class TrackingScannerModule {}
