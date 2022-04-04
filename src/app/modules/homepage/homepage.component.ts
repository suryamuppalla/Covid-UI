import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";
import {MatDialog} from "@angular/material/dialog";
import {BookingDialogComponent} from "../booking/booking-dialog/booking-dialog.component";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public bookings: any[] = [];
  public futureAppointment: any;
  public cancelBooking = false;

  constructor(
    public auth: AuthService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
    this.getBookings();
  }

  getBookings() {
    this.httpClient.get(`${environment.apiURL}/bookings`)
      .subscribe((response: any) => {
        console.log(response);
        if (response.data) {
          this.bookings = response.data;
          if (
            this.bookings?.length &&
            new Date(this.bookings[0].bookingDate).setHours(0, 0, 0, 0) > new Date().setHours(0, 0, 0, 0)
          ) {
            this.futureAppointment = this.bookings[0];
          }
        }
      }, (error: any) => {
        console.log(error);
      });
  }

  deleteBooking(item: any, index: number) {
    this.httpClient.delete(`${environment.apiURL}/bookings/${item.id}`)
      .subscribe((response: any) => {
        if (response && response.data) {
          this.bookings.splice(index);
          this.snackBar.open(`Successfully Cancelled Your Booking...`, '', {
            duration: 3000, verticalPosition: 'top'
          });
        }
      });
  }

  updateBooking(item: any) {
    this.dialog.open(BookingDialogComponent, {
      data: item,
      maxWidth: '99vw',
      maxHeight: '99vh',
      width: '600px'
    }).afterClosed().subscribe((data: any) => {
      if (data) {
        item.bookingDate = data.bookingDate;
        item.quantity = data.quantity;
      }
    });
  }
}
