import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/auth.service";
import {MatDialog} from "@angular/material/dialog";
import {BookingDialogComponent} from "./booking-dialog/booking-dialog.component";

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss']
})
export class BookingComponent implements OnInit {
  public hospitals = [
    {
      name: `Ankura Hospital`,
      address: '1-20, Huda, Ring Road, Hyderabad',
      pinCode: 123456,
      email: 'ankura@gmail.com',
      phone: 1234567890,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      bed: {
        total: 5000,
        available: 2000
      },
      ventilator: {
        total: 3000,
        available: 1400
      },
      oxygen: {
        total: 2000,
        available: 10
      },
      isolation: {
        total: 4000,
        available: 1200
      }
    },
    {
      name: `Sunshine Hospital`,
      address: '1-20, Huda, Ring Road, Hyderabad',
      pinCode: 121345,
      email: 'ankura@gmail.com',
      phone: 1234567890,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      bed: {
        total: 5000,
        available: 2000
      },
      ventilator: {
        total: 3000,
        available: 1400
      },
      oxygen: {
        total: 2000,
        available: 10
      },
      isolation: {
        total: 4000,
        available: 1200
      }
    },
    {
      name: `Deepak Hospital`,
      address: '1-20, Huda, Ring Road, Hyderabad',
      pinCode: 123412,
      email: 'ankura@gmail.com',
      phone: 1234567890,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      bed: {
        total: 5000,
        available: 2000
      },
      ventilator: {
        total: 3000,
        available: 1400
      },
      oxygen: {
        total: 2000,
        available: 10
      },
      isolation: {
        total: 4000,
        available: 1200
      }
    },
    {
      name: `Continental Hospital`,
      address: '1-20, Huda, Ring Road, Hyderabad',
      pinCode: 123456,
      email: 'ankura@gmail.com',
      phone: 1234567890,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      bed: {
        total: 5000,
        available: 2000
      },
      ventilator: {
        total: 3000,
        available: 1400
      },
      oxygen: {
        total: 2000,
        available: 10
      },
      isolation: {
        total: 4000,
        available: 1200
      }
    },
    {
      name: `Maxcure Hospital`,
      address: '1-20, Huda, Ring Road, Hyderabad',
      pinCode: 123456,
      email: 'ankura@gmail.com',
      phone: 1234567890,
      description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
      bed: {
        total: 5000,
        available: 2000
      },
      ventilator: {
        total: 3000,
        available: 1400
      },
      oxygen: {
        total: 2000,
        available: 10
      },
      isolation: {
        total: 4000,
        available: 1200
      }
    }
  ];

  constructor(
    public auth: AuthService,
    private dialog: MatDialog
  ) {
  }

  ngOnInit(): void {
  }

  bookNow(details: any) {
    this.dialog.open(BookingDialogComponent, {
      data: details,
      width: '600px'
    });
  }
}
