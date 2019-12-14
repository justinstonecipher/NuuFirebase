import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-staff',
  templateUrl: './new-staff.component.html',
  styleUrls: ['./new-staff.component.scss']
})
export class NewStaffComponent implements OnInit {

  constructor(private firebaseService: FirebaseService, private router: Router, private formBuilder: FormBuilder) { }
  newStaffForm: FormGroup;
  staff: Array<any>;
  ngOnInit() {
    this.firebaseService.getStaff().then(results => {
      this.staff = results[0].payload.doc.data();
      console.log(this.staff);
    });
    this.newStaffForm = this.formBuilder.group({
      name: this.formBuilder.control('', Validators.required),
      surname: this.formBuilder.control('', Validators.required),
      title: this.formBuilder.control('', Validators.required),
      email: this.formBuilder.control('', Validators.required),
    });
  }

  onSubmit(value){
    value.imagePath = null;
    this.firebaseService.createStaff(value)
    .then(
      res => {
        this.resetFields();
        this.router.navigate(['/home']);
      }
    );
  }
  resetFields() {
    this.newStaffForm.reset();
  }
}
