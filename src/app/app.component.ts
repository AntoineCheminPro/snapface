import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapModule } from './face-snap/face-snap.component';
import { CommonModule } from '@angular/common';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnapListComponent } from './face-snap-list/face-snap-list.component';
import { HeaderComponent } from './header/header.component';
import { DatePipe } from '@angular/common'; 


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [FaceSnapListComponent, HeaderComponent, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {

  ngOnInit() {
  }
}
