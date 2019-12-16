import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router, private formBuilder: FormBuilder) { }
  newStaffForm: FormGroup;
  newUpcomingEventForm: FormGroup;
  staff: Array<any>;
  ngOnInit() {
    this.firebaseService.getStaff().then(results => {
      this.staff = results;
    });
    this.newStaffForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      surname: this.formBuilder.control('', Validators.required),
      title: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
    });

    this.newUpcomingEventForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      description: this.formBuilder.control('', Validators.required),
      routerLink: this.formBuilder.control('', Validators.required),
      expirationDate: this.formBuilder.control('', [Validators.required])
    });
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

  onSubmitEvent(value) {
    this.firebaseService.createEvent(value).then(res => {
      this.newUpcomingEventForm.reset();
    });
  }
}
