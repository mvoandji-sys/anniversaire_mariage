import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.component.html'
})
export class GalleryComponent {
  showLightbox = false;
  currentPhotoIndex = 0;

  galleryPhotos = [
    {
      url: 'assets/images/jourmariage.jpg',
      caption: 'Notre jour de mariage - 2020'
    },
    {
      url: 'assets/images/PremiersMoments.jpeg',
      caption: 'Premiers moments ensemble'
    },
    {
      url: 'assets/images/VoyageNoces.jpeg',
      caption: 'Voyage de noces'
    },
    {
      url: 'assets/images/CelebrationFamille.jpeg',
      caption: 'Célébration en famille'
    },
    {
      url: 'assets/images/MomentsTendresse.jpg',
      caption: 'Moments de tendresse'
    },
    {
      url: 'assets/images/AnniverSairePRece.jpeg',
      caption: 'Anniversaires précédents'
    }
  ];

  constructor(public translationService: TranslationService) {}

  openLightbox(index: number): void {
    this.currentPhotoIndex = index;
    this.showLightbox = true;
    document.body.style.overflow = 'hidden';
  }

  closeLightbox(): void {
    this.showLightbox = false;
    document.body.style.overflow = 'auto';
  }

  previousPhoto(): void {
    if (this.currentPhotoIndex > 0) {
      this.currentPhotoIndex--;
    }
  }

  nextPhoto(): void {
    if (this.currentPhotoIndex < this.galleryPhotos.length - 1) {
      this.currentPhotoIndex++;
    }
  }
}