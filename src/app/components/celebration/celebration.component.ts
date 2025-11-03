import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-celebration',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './celebration.component.html'
})
export class CelebrationComponent {
  programItems = [
    { time: '15:00', key: 'welcome' },
    { time: '16:00', key: 'worship' },
    { time: '17:00', key: 'testimonies' },
    { time: '18:30', key: 'dinner' },
    { time: '20:00', key: 'dance' }
  ];

  countdown = {
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  constructor(public translationService: TranslationService) {
    this.updateCountdown();
    setInterval(() => this.updateCountdown(), 1000);
  }

  updateCountdown(): void {
    const celebrationDate = new Date('2025-11-01T15:00:00');
    const now = new Date();
    const diff = celebrationDate.getTime() - now.getTime();

    if (diff > 0) {
      this.countdown.days = Math.floor(diff / (1000 * 60 * 60 * 24));
      this.countdown.hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      this.countdown.minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      this.countdown.seconds = Math.floor((diff % (1000 * 60)) / 1000);
    }
  }
}