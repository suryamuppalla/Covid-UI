import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {BookingDialogComponent} from "./booking-dialog/booking-dialog.component";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public hospitals: any[] = [];
  public isLoading = false;

  constructor(
    public auth: AuthService,
    private dialog: MatDialog,
    private httpClient: HttpClient
  ) {
  }

  ngOnInit(): void {
    this.getHospitals();
  }

  getHospitals() {
    this.isLoading = true;
    this.httpClient.get(`${environment.apiURL}/hospitals`)
      .subscribe((response: any) => {
        console.log(response);
        setTimeout(() => this.isLoading = false, 2000);
        if (response.data) {
          this.hospitals = response.data;
        }
      }, (error: any) => {
        this.isLoading = false;
        console.log(error);
      });
  }

  bookNow(details: any) {
    this.dialog.open(BookingDialogComponent, {
      data: details,
      width: '600px'
    });
  }
}
