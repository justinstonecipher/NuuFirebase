import { Injectable } from '@angular/core';
import { AngularFirestore, validateEventsArray } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor(public db: AngularFirestore) { }

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

  updateStaff(userKey, value){
    return this.db.collection('staff').doc(userKey).set(value);
  }

  deleteStaff(userKey){
    return this.db.collection('staff').doc(userKey).delete();
  }
}
