import { Component, OnInit } from '@angular/core';
import { FaceSnapComponent } from './face-snap/face-snap.component';
import { FaceSnap } from './models/face-snap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    FaceSnapComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  mySnap!: FaceSnap;
  mySecondSnap!: FaceSnap;

  ngOnInit(): void {
      this.mySnap = new FaceSnap(
        'Archibald et ses copains',
        'Mon meilleur ami depuis toujours !',
        'https://cdn.pixabay.com/photo/2024/03/01/12/46/watercolor-teddy-bear-8606504_1280.png',
        new Date(),
        0
      );
      this.mySecondSnap = new FaceSnap(
        'Rémi sans famille',
        'histoire avec beaucoup émotions et tristesses',
        'https://img.cdandlp.com/2012/10/imgL/115732245.jpg',
        new Date(),
        0
      );
  }
}
