import { Component, Input, NgModule, OnInit } from '@angular/core';
import { DatePipe } from '@angular/common';
import { CommonModule } from '@angular/common';
import { FaceSnap } from '../models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  standalone: true, 
  imports: [CommonModule, DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss'],
})
export class FaceSnapComponent implements OnInit {
  @Input() faceSnap!: FaceSnap;

  buttonText: string = 'Oh snap!';

  ngOnInit(): void { }

  constructor() { }


  onClic() {
    if (this.buttonText === 'Oh snap!') {
      this.faceSnap.snaps++;
      this.buttonText = 'Oups unsnap!';
      this.faceSnap.isSnapped = !this.faceSnap.isSnapped;
      console.log('🚀 ~ FaceSnapComponent ~ onClic ~ faceSnap:', this.faceSnap);
    } else {
      this.faceSnap.snaps--;
      this.buttonText = 'Oh snap!';
      this.faceSnap.isSnapped = !this.faceSnap.isSnapped;
      console.log('🚀 ~ FaceSnapComponent ~ onClic ~ faceSnap:', this.faceSnap);
    }
  }
}

@NgModule({
  declarations: [],
  imports: [CommonModule],
  providers: [DatePipe],
  exports: [],
})
export class FaceSnapModule { }

function ngOnInit() {
  throw new Error('Function not implemented.');
}

function onSnap() {
  throw new Error('Function not implemented.');
}
