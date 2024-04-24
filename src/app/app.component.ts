import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapModule } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent implements OnInit {
  mySnaps!: FaceSnap[];

  ngOnInit() {
    this.mySnaps = [
      {
        title: 'Baxter',
        description: 'Le chien qui pense ... pas',
        createdDate: new Date(),
        snaps: 5,
        imageUrl:
          'https://media.istockphoto.com/id/450726311/fr/photo/retriever-du-labrador-12-mois-assis.jpg?s=2048x2048&w=is&k=20&c=GAYEzTnKjdN6G8Vk_1K3_9wWP3vytfwTYwPNaugYw4g=',
        location: '6 feet under',
      },

      {
        title: 'Ulysse',
        description: 'Le chien qui voyageais',
        createdDate: new Date(),
        snaps: 20,
        imageUrl:
          'https://media.istockphoto.com/id/1257649913/fr/photo/chiot-noir-de-retriever-de-labrador-restant.jpg?s=2048x2048&w=is&k=20&c=9IJq5OFm-cpcVV9AIcleklxEItvKHNxgsBq4zxw4zu8=',
        location: '6 feet under',
      },

      {
        title: 'Olympe',
        description: 'Le petit chienchien',
        createdDate: new Date(),
        snaps: 10,
        imageUrl:
          'https://media.istockphoto.com/id/500871708/fr/photo/chien-de-race-de-bouledogue-fran%C3%A7ais.jpg?s=2048x2048&w=is&k=20&c=c1PDZmDxiJ2WsCl1GU15PiP6X9kuR-BZZ1xCXDyMras=',
        location: 'Sur le canapé',
      },
    ];
  }
}
