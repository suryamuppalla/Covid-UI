import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
import {MatCardModule} from "@angular/material/card";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    HomepageComponent
  ],
    imports: [
        CommonModule,
        HomepageRoutingModule,
        MatCardModule,
        MatProgressSpinnerModule
    ]
})
export class HomepageModule { }
