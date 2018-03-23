import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackingDetailsPage } from './tracking-details';

@NgModule({
  declarations: [
    TrackingDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackingDetailsPage),
  ],
})
export class TrackingDetailsModule {}
