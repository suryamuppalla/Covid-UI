import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {BookingDialogComponent} from "./booking-dialog/booking-dialog.component";
import {HttpClient, HttpParams} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public hospitals: any[] = [];
  public isLoading = false;
  public filterForm = new FormGroup({
    hospital: new FormControl(null),
    address: new FormControl(null),
    pinCode: new FormControl(null)
  });

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
    this.filterForm.disable();
    let httpParams = new HttpParams();
    Object.keys(this.filterForm.value).forEach(key => {
      if (this.filterForm.value[key]) {
        httpParams = httpParams.append(key, this.filterForm.value[key]);
      }
    });
    this.httpClient.get(`${environment.apiURL}/hospitals`, {params: httpParams})
      .subscribe((response: any) => {
        console.log(response);
        this.isLoading = false;
        this.filterForm.enable();
        setTimeout(() => this.isLoading = false, 1000);
        if (response.data) {
          this.hospitals = response.data;
        }
      }, (error: any) => {
        this.isLoading = false;
        this.filterForm.enable();
        console.log(error);
      });
  }

  bookNow(details: any) {
    this.dialog.open(BookingDialogComponent, {
      data: details,
      width: '600px'
    }).afterClosed().subscribe((data: any) => {
      if (data) {
        const hospital = this.hospitals.find(hospital => hospital.id === data.hospitalId);
        if (hospital) {
          const bookingTypeJSON = hospital[data.bookingType.toLowerCase()];
          if (bookingTypeJSON) {
            hospital[data.bookingType.toLowerCase()].available = bookingTypeJSON.available - data.quantity;
          }
        }
      }
    })
  }
}
