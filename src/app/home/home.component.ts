import { Component, OnInit } from '@angular/core';
import { FirebaseService } from '../services/firebase.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
events: Array<any>;
  constructor(private firebaseService: FirebaseService, private router: Router) { }

  ngOnInit() {
    const today = new Date();
    this.firebaseService.getEvents(today).then(results => {
      this.events = results;
    })
  }
  
  goToEvents() {
    this.router.navigate(['/events']);
  }

  goToResources() {
    alert('work in progress');
  }

  goToPrograms() {
    alert('work in progress');
  }

  goToRecreation() {
    alert('work in progress');
  }

  goToTournaments() {
    alert('work in progress');
  }

  goToAbout() {
    this.router.navigate(['/about']);
  }

}
