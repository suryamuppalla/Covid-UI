import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from "./auth.guard";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./modules/authentication/authentication.module').then(m => m.AuthenticationModule)
  },
  {
    path: '', redirectTo: 'auth', pathMatch: 'full'
  },
  {
    path: 'home', loadChildren: () => import('./modules/homepage/homepage.module').then(m => m.HomepageModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'advanced-search',
    loadChildren: () => import('./modules/advanced-search/advanced-search.module').then(m => m.AdvancedSearchModule)
  },
  {
    path: 'booking', loadChildren: () => import('./modules/booking/booking.module').then(m => m.BookingModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
