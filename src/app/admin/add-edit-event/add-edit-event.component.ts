import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { FirebaseService } from 'src/app/services/firebase.service';

@Component({
  selector: 'app-add-edit-event',
  templateUrl: './add-edit-event.component.html',
  styleUrls: ['./add-edit-event.component.scss']
})
export class AddEditEventComponent implements OnInit {


  static open(matDialog: MatDialog, event): Promise<any> {
    return matDialog
      .open(AddEditEventComponent, {
        width: '800px',
        data: event,
      })
      .afterClosed()
      .toPromise();
  }

  constructor(
    public dialogRef: MatDialogRef<AddEditEventComponent>,
    @Inject(MAT_DIALOG_DATA) public data, private firebaseService: FirebaseService) { }

  ngOnInit() {
  }

  saveEvent(event) {
    if (event.id) {
      this.firebaseService.updateEvent(event.id, event).then(res => {
        this.close();
      });
    } else {
      this.firebaseService.createEvent(event).then(res => {
        this.close();
      });
    }
  }

  deleteEvent(event) {
    this.firebaseService.deleteEvent(event.id).then(res => {
      this.close();
    });
  }

  close(): void {
    this.dialogRef.close();
  }
}
