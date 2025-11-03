import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { AudioService } from '../../services/audio.service';
import { Language } from '../../interfaces/interfaces';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  currentLanguage!: Language;
  availableLanguages: Language[] = [];
  showLanguages = false;
  mobileMenuOpen = false;
  isPlaying = false;

  navigationItems = [
    { id: 'home', key: 'home' },
    { id: 'story', key: 'ourStory' },
    { id: 'celebration', key: 'celebration' },
    { id: 'gallery', key: 'gallery' },
    { id: 'testimonies', key: 'testimonies' },
    { id: 'rsvp', key: 'rsvp' },
    { id: 'faith', key: 'ourFaith' }
  ];

  constructor(
    public translationService: TranslationService,
    private audioService: AudioService
  ) {
    this.currentLanguage = this.translationService.getCurrentLanguage();
    this.availableLanguages = this.translationService.getAvailableLanguages();
    
    this.translationService.currentLanguage$.subscribe(lang => {
      this.currentLanguage = lang;
      this.showLanguages = false;
    });

    this.audioService.isPlaying$.subscribe(playing => {
      this.isPlaying = playing;
    });
  }

  switchLanguage(language: Language): void {
    this.translationService.switchLanguage(language);
  }

  toggleAudio(): void {
    this.audioService.toggleAudio();
  }

  scrollToSection(event: Event, sectionId: string): void {
    event.preventDefault();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
}