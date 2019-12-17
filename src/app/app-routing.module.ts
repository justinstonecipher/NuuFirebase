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


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'admin', component: AdminComponent },
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
