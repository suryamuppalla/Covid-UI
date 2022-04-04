import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {HomepageRoutingModule} from './homepage-routing.module';
import {HomepageComponent} from './homepage.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatSnackBarModule} from "@angular/material/snack-bar";
import {MatDialogModule} from "@angular/material/dialog";
import {BookingDialogModule} from "../booking/booking-dialog/booking-dialog.module";


@NgModule({
  declarations: [
    HomepageComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule,
    MatCardModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatSnackBarModule,
    MatDialogModule,
    BookingDialogModule
  ]
})
export class HomepageModule {
}
