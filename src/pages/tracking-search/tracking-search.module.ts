import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TrackingSearchPage } from './tracking-search';

@NgModule({
  declarations: [
    TrackingSearchPage,
  ],
  imports: [
    IonicPageModule.forChild(TrackingSearchPage),
  ],
})
export class TrackingSearchModule {}
