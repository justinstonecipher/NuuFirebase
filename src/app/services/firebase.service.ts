import { Injectable } from '@angular/core';
import { AngularFirestore, validateEventsArray } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

  getAdminUsers() {
    return new Promise<any>(resolve => {
      return this.db.collection('/users', ref => ref.where('isAdmin', '==', true)).snapshotChanges().subscribe(snapshots => {
        resolve(snapshots);
      })
    })
  }

  // add ability to upload image
  // add ability to upload documents/bylaws
  createStaff(value) {
    return this.db.collection('staff').add({
      name: value.name,
      surname: value.surname,
      title: value.title,
      email: value.email,
      imagePath: value.imagePath,
    });
  }

  createEvent(value) {
    return this.db.collection('events').add({
      name: value.name,
      description: value.description,
      routerLink: value.routerLink,
      expirationDate: value.expirationDate,
    });
  }

  updateEvent(eventKey, value) {
    return this.db.collection('events').doc(eventKey).set(value);
  }

  deleteEvent(eventKey) {
    return this.db.collection('events').doc(eventKey).delete();
  }

  getEvents(date: Date) {
    return new Promise<any>(resolve => {
      this.db.collection('/events', ref => ref.where('expirationDate', '>', date)).snapshotChanges().subscribe(snapshots => {
        resolve(snapshots);
      });
    });
  }

  getAllEvents() {
    return new Promise<any>(resolve => {
      this.db.collection('/events').snapshotChanges().subscribe(snapshots => {
        resolve(snapshots);
      })
    })
  }

  addTeam(value) {
    return this.db.collection('teams').add({
      name: value.name,
      url: value.url,
    });
  }

  addCarouselPage(value) {
    return this.db.collection('carouselItems').add({
      title: value.title,
      description: value.description,
      listItems: value.items,
      url: value.url
    });
  }

  getStaff() {
    return new Promise<any>((resolve, reject) => {
      this.db.collection('/staff').snapshotChanges()
        .subscribe(snapshots => {
          resolve(snapshots);
        });
    });
  }

  updateStaff(userKey, value) {
    return this.db.collection('staff').doc(userKey).set(value);
  }

  deleteStaff(userKey) {
    return this.db.collection('staff').doc(userKey).delete();
  }
}
