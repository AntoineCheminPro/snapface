import { DatePipe } from '@angular/common';
import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [DatePipe],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit{
 title!: string;
 description!: string;
 createdDate!: Date;
 snaps!: number;

 ngOnInit(): void {
   this.title = 'Baxter';
   this.description = 'Le chien qui pense ... pas';
   this.createdDate = new Date();
   this.snaps = 6;
 }
}
