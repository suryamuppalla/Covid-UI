import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../../services/auth.service";
import {Subject} from "rxjs";
import {takeUntil} from "rxjs/operators";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../environments/environment";
import {MatSnackBar} from "@angular/material/snack-bar";

@Component({
  selector: 'app-booking-dialog',
  templateUrl: './booking-dialog.component.html',
  styleUrls: ['./booking-dialog.component.scss']
})
export class BookingDialogComponent implements OnInit, OnDestroy {
  public form = new FormGroup({
    userId: new FormControl(null, Validators.required),
    hospitalId: new FormControl(null, Validators.required),
    bookingType: new FormControl('BED', Validators.required),
    quantity: new FormControl(1, Validators.required),
    bookingDate: new FormControl(new Date(), Validators.required)
  });
  public isLoading = false;
  public unsubscribe$: Subject<any> = new Subject<any>();

  constructor(
    public dialogRef: MatDialogRef<BookingDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private auth: AuthService,
    private httpClient: HttpClient,
    private snackBar: MatSnackBar
  ) {
  }

  ngOnInit(): void {
    this.auth.user$
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe(value => {
        if (value && value.id) {
          this.form.patchValue({
            userId: value?.id,
            hospitalId: this.data.id
          });
        }
      });
  }

  submit() {
    this.form.value.bookingDate = new Date(this.form.value.bookingDate).toUTCString();
    this.isLoading = true;
    this.httpClient.post(`${environment.apiURL}/bookings`, this.form.value)
      .subscribe((response: any) => {
        console.log(response);
        this.isLoading = false;
        this.dialogRef.close(response.data);
        this.snackBar.open(`${response.message}`, '', {
          duration: 3000, verticalPosition: 'top'
        });
      }, (error: any) => {
        console.log(error);
        this.isLoading = false;
      });
  }

  ngOnDestroy() {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
  }
}
