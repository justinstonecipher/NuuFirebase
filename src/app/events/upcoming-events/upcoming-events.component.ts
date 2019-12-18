import { Component, OnInit } from '@angular/core';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-upcoming-events',
  templateUrl: './upcoming-events.component.html',
  styleUrls: ['./upcoming-events.component.scss']
})
export class UpcomingEventsComponent implements OnInit {

  constructor(private firebaseService: FirebaseService) { }
  panelOpenState = false;
  events: Array<any>;

  ngOnInit() {
    const today = new Date();
    this.firebaseService.getEvents(today).then(results => {
      this.events = results;
    })
  }

}
