import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  standalone: true,
  imports: [],
  templateUrl: './face-snap.component.html',
  styleUrl: './face-snap.component.scss'
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description!: string;
  createdAt!: Date;
  snaps!: number;
  imageUrl!: string;
  snapped!: boolean;
  snapButtonText!: string;

  ngOnInit(): void {
    this.title = 'Archibald et ses copains'
    this.description = 'Mon meilleur ami depuis toujours !';
    this.createdAt = new Date();
    this.snaps = 0;
    this.imageUrl = 'https://cdn.pixabay.com/photo/2024/03/01/12/46/watercolor-teddy-bear-8606504_1280.png';
    this.snapped = false;
    this.snapButtonText = "Oh Snap!";
  }

  onSnap(): void {
    if(this.snapped==false){
      this.addSnap();
    } else if(this.snapped==true && this.snaps > 0) {
      this.unSnap();
    }
  }

  unSnap() {
    this.snaps--;
  }

  addSnap() {
    this.snaps++;
    this.snapped=true;
    this.snapButtonText="Oups !, unsnapped";
  }
}
