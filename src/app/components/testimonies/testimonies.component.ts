import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { Testimony } from '../../interfaces/interfaces';

@Component({
  selector: 'app-testimonies',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './testimonies.component.html'
})
export class TestimoniesComponent {
  testimonies: Testimony[] = [
    {
      id: 1,
      name: 'Marie & Pierre Dupont',
      message: 'Georges et Bibiane, vous êtes un exemple d\'amour véritable pour nous tous. Vos 5 années de mariage sont un témoignage de votre engagement mutuel et de votre foi. Que Dieu continue de bénir votre union !',
      date: new Date('2025-11-08'),
      approved: true
    },
    {
      id: 2,
      name: 'Famille NGUEMA',
      message: 'Quel bonheur de vous voir grandir ensemble ! Georges et Bibiane, votre amour rayonne et inspire tous ceux qui vous entourent. Félicitations pour ces 5 belles années !',
      date: new Date('2024-10-06'),
      approved: true
    }
  ];

  newTestimony = {
    name: '',
    message: ''
  };

  showSuccessMessage = false;

  constructor(public translationService: TranslationService) {}

  submitTestimony(): void {
    if (this.newTestimony.name && this.newTestimony.message) {
      const testimony: Testimony = {
        id: this.testimonies.length + 1,
        name: this.newTestimony.name,
        message: this.newTestimony.message,
        date: new Date(),
        approved: true // Auto-approved for demo
      };

      this.testimonies.unshift(testimony);
      this.newTestimony = { name: '', message: '' };
      this.showSuccessMessage = true;

      // Hide success message after 5 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 5000);
    }
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(date);
  }
}