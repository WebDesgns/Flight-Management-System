import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingListComponent } from './booking-list/booking-list.component';
import { CreateBookingComponent } from './create-booking/create-booking.component';
import { UpdateBookingComponent } from './update-booking/update-booking.component';
import { BookingDetailsComponent } from './booking-details/booking-details.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { SignupComponent } from './signup/signup.component';
import { AirportListComponent } from './airport-list/airport-list.component';
import { CreateAirportComponent } from './create-airport/create-airport.component';
import { UpdateAirportComponent } from './update-airport/update-airport.component';
import { AirportDetailsComponent } from './airport-details/airport-details.component';
import { FlightListComponent } from './flight-list/flight-list.component';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { UpdateFlightComponent } from './update-flight/update-flight.component';
import { FlightDetailsComponent } from './flight-details/flight-details.component';
import { AddScheduledFlightComponent } from './add-scheduled-flight/add-scheduled-flight.component';
import { ShowScheduledFlightsComponent } from './show-scheduled-flights/show-scheduled-flights.component';
import { SearchScheduledFlightComponent } from './search-scheduled-flight/search-scheduled-flight.component';
import { WelcomeAdminComponent } from './welcome-admin/welcome-admin.component';
import { ModifyScheduledFlightComponent } from './modify-scheduled-flight/modify-scheduled-flight.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { ListUserComponent } from './list-user/list-user.component';

import { HomepageComponent } from './homepage/homepage.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { UserpanelComponent } from './userpanel/userpanel.component';
import { AdminpanelComponent } from './adminpanel/adminpanel.component';


const routes: Routes = [
  { path: '', component: HomepageComponent }, //redirectTo: 'bookings', pathMatch: 'full'
  { path: 'bookings', component: BookingListComponent },
  { path: 'addBooking', component: CreateBookingComponent },
  { path: 'updateBooking/:id', component: UpdateBookingComponent },
  { path: 'bookingDetails/:id', component: BookingDetailsComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'airports', component: AirportListComponent },
  { path: 'addAirport', component: CreateAirportComponent },
  { path: 'update/:airportCode', component: UpdateAirportComponent },
  { path: 'details/:airportCode', component: AirportDetailsComponent },
  { path: 'flights', component: FlightListComponent },
  { path: 'addFlight', component: CreateFlightComponent },
  { path: 'updateFlight/:flightNo', component: UpdateFlightComponent },
  { path: 'flightDetails/:flightNo', component: FlightDetailsComponent },
  { path: 'scheduledFlight/add', component: AddScheduledFlightComponent },
  { path: 'scheduledFlight/show', component: ShowScheduledFlightsComponent },
  { path: 'scheduledFlight/search', component: SearchScheduledFlightComponent },
  { path: 'welcomeAdmin', component: WelcomeAdminComponent },
  { path: 'scheduledFlight/modify', component: ModifyScheduledFlightComponent },
  { path: 'addUser', component: CreateUserComponent },
  { path: 'updateUser/:id', component: UpdateUserComponent },
  { path: 'userDetails/:id', component: UserDetailsComponent },
  { path: 'users', component: ListUserComponent },
  { path: 'homepage', component: HomepageComponent },
  { path: 'aboutus', component: AboutUsComponent },
  { path: 'contactus', component: ContactUsComponent },
  { path: 'navbar', component: NavbarComponent},
  { path: 'userpanel', component: UserpanelComponent},
  { path: 'adminpanel', component: AdminpanelComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}

export const routingComponents = [
  AddScheduledFlightComponent,
  SearchScheduledFlightComponent,
  ShowScheduledFlightsComponent,
  WelcomeAdminComponent,
  ModifyScheduledFlightComponent
];
