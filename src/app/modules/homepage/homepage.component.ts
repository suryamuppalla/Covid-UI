import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  public bookings: any[] = [];
  public futureAppointment: any;

  constructor(
    public auth: AuthService,
    private httpClient: HttpClient
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
}
