import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdvancedSearchRoutingModule } from './advanced-search-routing.module';
import { AdvancedSearchComponent } from './advanced-search.component';


@NgModule({
  declarations: [
    AdvancedSearchComponent
  ],
  imports: [
    CommonModule,
    AdvancedSearchRoutingModule
  ]
})
export class AdvancedSearchModule { }
