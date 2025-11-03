import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslationService } from '../../services/translation.service';
import { RSVP } from '../../interfaces/interfaces';

@Component({
  selector: 'app-rsvp',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './rsvp.component.html'
})
export class RSVPComponent {
  rsvpData: RSVP = {
    name: '',
    phone: '',
    email: '',
    attending: false,
    guests: 0,
    message: ''
  };

  showSuccessMessage = false;

  constructor(public translationService: TranslationService) {}

  submitRSVP(): void {
    if (this.rsvpData.name && this.rsvpData.phone) {
      // Simulate form submission
      console.log('RSVP submitted:', this.rsvpData);
      
      // Show success message
      this.showSuccessMessage = true;
      
      // Reset form
      const attending = this.rsvpData.attending;
      this.rsvpData = {
        name: '',
        phone: '',
        email: '',
        attending: false,
        guests: 0,
        message: ''
      };

      // Hide success message after 8 seconds
      setTimeout(() => {
        this.showSuccessMessage = false;
      }, 8000);

      // Scroll to success message
      setTimeout(() => {
        const successElement = document.querySelector('.bg-green-100');
        if (successElement) {
          successElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }
}