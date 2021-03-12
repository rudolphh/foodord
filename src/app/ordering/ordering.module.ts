import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderingComponent } from './ordering/ordering.component';
import { TrackingComponent } from './tracking/tracking.component';



@NgModule({
  declarations: [OrderingComponent, TrackingComponent],
  imports: [
    CommonModule
  ]
})
export class OrderingModule { }
