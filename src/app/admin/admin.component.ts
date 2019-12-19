import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { AddEditEventComponent } from './add-edit-event/add-edit-event.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router, private formBuilder: FormBuilder, public dialog: MatDialog, public auth: AuthService) { }
  newStaffForm: FormGroup;
  // newUpcomingEventForm: FormGroup;
  staff: Array<any>;
  events: Array<any>;

  ngOnInit() {
    let admins
    this.firebaseService.getAdminUsers().then(results => {
      admins = results;
      this.auth.user$.subscribe(r => {
        if (r !== null && !r.isAdmin && !admins.find(x => x.uid === r.uid)) {
          alert('user not authorized, talk to a site administrator to elevate privileges.');
          this.router.navigate(['/home']);
        }
      });
    })


    this.firebaseService.getStaff().then(results => {
      this.staff = results;
    });

    this.getAllEvents();

    this.newStaffForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      surname: this.formBuilder.control('', Validators.required),
      title: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
    });

    // this.newUpcomingEventForm = this.formBuilder.group({
    //   name: this.formBuilder.control('', Validators.required),
    //   description: this.formBuilder.control('', Validators.required),
    //   routerLink: this.formBuilder.control('', Validators.required),
    //   expirationDate: this.formBuilder.control('', [Validators.required])
    // });
  }

  async addOrEditEvent(event) {
    let eventForModal: any = {};

    if (event === null) {
      eventForModal = {};
    } else {
      console.log(event.payload.doc);
      console.log(event.payload.doc.id);
      eventForModal.id = event.payload.doc.id
      eventForModal.name = event.payload.doc.data().name;
      eventForModal.description = event.payload.doc.data().description;
      eventForModal.routerLink = event.payload.doc.data().routerLink;

      if (event.payload.doc.data().expirationDate) {
        eventForModal.expirationDate = new Date(event.payload.doc.data().expirationDate.seconds * 1000);
      }
    }

    await AddEditEventComponent.open(this.dialog, eventForModal);
    this.getAllEvents();
  }

  onSubmit(value) {
    value.imagePath = null;
    this.firebaseService.createStaff(value)
      .then(
        res => {
          this.newStaffForm.reset();
        }
      );
  }

  getAllEvents() {
    this.firebaseService.getAllEvents().then(results => {
      this.events = results;
    });
  }

  deleteEvent(event) {
    this.firebaseService.deleteEvent(event.payload.doc.id).then(res => {
      this.getAllEvents();
    });
  }
}
