import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { AdminComponent } from './admin/admin.component';
import { EventsComponent } from './events/events.component';
import { UpcomingEventsComponent } from './events/upcoming-events/upcoming-events.component';
import { CacheValleyCupComponent } from './events/cache-valley-cup/cache-valley-cup.component';
import { MiniCupComponent } from './events/mini-cup/mini-cup.component';
import { ExpoComponent } from './events/expo/expo.component';
import { AgmComponent } from './events/agm/agm.component';
import { AuthGuard } from './auth/auth.guard';
import { LoginComponent } from './auth/login/login.component';
import { ChallengerComponent } from './challenger/challenger.component';
import { ChallengerSchedulesComponent } from './challenger/challenger-schedules/challenger-schedules.component';
import { ChallengerRegistrationComponent } from './challenger/challenger-registration/challenger-registration.component';
import { ChallengerTryoutInfoComponent } from './challenger/challenger-tryout-info/challenger-tryout-info.component';
import { ChallengerResultsComponent } from './challenger/challenger-results/challenger-results.component';
import { ChallengerTryoutFormComponent } from './challenger/challenger-tryout-form/challenger-tryout-form.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { 
    path: 'events',
    component: EventsComponent,
    children: [
      { path: '', redirectTo: 'upcoming', pathMatch: 'full' },
      { path: 'upcoming', component: UpcomingEventsComponent },
      { path: 'cacheValleyCup', component: CacheValleyCupComponent },
      { path: 'cacheMiniCup', component: MiniCupComponent },
      { path: 'expo', component: ExpoComponent },
      { path: 'agm', component: AgmComponent }
    ]
  },
  {
    path: 'challenger',
    component: ChallengerComponent,
    children: [
      { path: '', redirectTo: 'schedules', pathMatch: 'full' },
      { path: 'schedules', component: ChallengerSchedulesComponent },
      { path: 'registration', component: ChallengerRegistrationComponent },
      { path: 'results', component: ChallengerResultsComponent },
      { path: 'tryoutInfo', component: ChallengerTryoutInfoComponent },
      { path: 'tryoutForm', component: ChallengerTryoutFormComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
