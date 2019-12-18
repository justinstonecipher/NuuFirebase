import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule,
  MatIconModule,
  MatCardModule,
  MatButtonModule,
  MatProgressSpinnerModule,
  MatFormFieldModule,
  MatInputModule,
  MatMenuModule,
  MatListModule,
  MatDividerModule,
  MatGridListModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSidenavModule,
  MatExpansionModule,
  MatStepperModule,
  MatDialogModule} from '@angular/material';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { AdminComponent } from './admin/admin.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AppNavbarComponent } from './app-navbar/app-navbar.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { FooterComponent } from './footer/footer.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { EventsComponent } from './events/events.component';
import { UpcomingEventsComponent } from './events/upcoming-events/upcoming-events.component';
import { CacheValleyCupComponent } from './events/cache-valley-cup/cache-valley-cup.component';
import { MiniCupComponent } from './events/mini-cup/mini-cup.component';
import { ExpoComponent } from './events/expo/expo.component';
import { AgmComponent } from './events/agm/agm.component';
import { AddEditEventComponent } from './admin/add-edit-event/add-edit-event.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AdminComponent,
    AppNavbarComponent,
    PageHeaderComponent,
    FooterComponent,
    EventsComponent,
    UpcomingEventsComponent,
    CacheValleyCupComponent,
    MiniCupComponent,
    ExpoComponent,
    AgmComponent,
    AddEditEventComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatProgressSpinnerModule,
    MatInputModule,
    MatMenuModule,
    MatListModule,
    MatDividerModule,
    ReactiveFormsModule,
    MatGridListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatSidenavModule,
    MatExpansionModule,
    MatStepperModule,
    MatDialogModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ],
  bootstrap: [AppComponent],
  entryComponents: [AddEditEventComponent]
})
export class AppModule { }
