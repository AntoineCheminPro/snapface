import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FaceSnapModule } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap.component'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FaceSnapModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySnap2!: FaceSnap;
  mySnap3!: FaceSnap;

  ngOnInit() {
    this.mySnap = new FaceSnap('Baxter', 'Le chien qui pense ... pas', new Date(), 0, 'https://media.istockphoto.com/id/450726311/fr/photo/retriever-du-labrador-12-mois-assis.jpg?s=2048x2048&w=is&k=20&c=GAYEzTnKjdN6G8Vk_1K3_9wWP3vytfwTYwPNaugYw4g=');
    this.mySnap2 = new FaceSnap('Ulysse', 'Le chien qui voyageais', new Date(), 20, 'https://media.istockphoto.com/id/1257649913/fr/photo/chiot-noir-de-retriever-de-labrador-restant.jpg?s=2048x2048&w=is&k=20&c=9IJq5OFm-cpcVV9AIcleklxEItvKHNxgsBq4zxw4zu8=');
    this.mySnap3 = new FaceSnap('Olympe', 'Le petit chienchien', new Date(), 10, 'https://media.istockphoto.com/id/500871708/fr/photo/chien-de-race-de-bouledogue-fran%C3%A7ais.jpg?s=2048x2048&w=is&k=20&c=c1PDZmDxiJ2WsCl1GU15PiP6X9kuR-BZZ1xCXDyMras=');
  }
}
