import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
events: Array<any>;
  constructor(private firebaseService: FirebaseService) { }

  ngOnInit() {
    const today = new Date();
    this.firebaseService.getEvents(today).then(results => {
      this.events = results;
    })
  }

}
