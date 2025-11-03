import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Language, Translations } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private currentLanguage = new BehaviorSubject<Language>({
    code: 'fr',
    name: 'Français',
    flag: '🇫🇷'
  });

  public currentLanguage$ = this.currentLanguage.asObservable();

  private translations: Translations = {
    fr: {
      navigation: {
        home: 'Accueil',
        ourStory: 'Notre Histoire',
        celebration: 'La Célébration',
        gallery: 'Galerie',
        testimonies: 'Témoignages',
        rsvp: 'RSVP',
        ourFaith: 'Notre Foi'
      },
      home: {
        welcome: 'Bienvenue',
        subtitle: 'Célébrons 5 années d\'amour et de bonheur',
        marriedFor: 'Mariés depuis',
        days: 'jours',
        quote: '"L\'amour ne consiste pas à se regarder l\'un l\'autre, mais à regarder ensemble dans la même direction."',
        author: 'Antoine de Saint-Exupéry'
      },
      story: {
        title: 'Notre Belle Histoire',
        subtitle: 'Un voyage d\'amour à travers les années'
      },
      celebration: {
        title: 'La Célébration',
        date: 'Date',
        location: 'Lieu',
        dressCode: 'Code Vestimentaire',
        program: 'Programme de la journée',
        november: '01 Novembre 2025',
        residence: 'Résidence familiale à Nyom',
        dress: 'Chic et traditionnel',
        schedule: {
          welcome: 'Accueil des invités',
          worship: 'Culte d\'action de grâce',
          testimonies: 'Témoignages',
          dinner: 'Dîner',
          dance: 'Danse et célébration'
        }
      },
      gallery: {
        title: 'Nos Souvenirs',
        subtitle: 'Moments précieux capturés au fil des années'
      },
      testimonies: {
        title: 'Témoignages',
        subtitle: 'Partagez vos mots doux et anecdotes',
        form: {
          name: 'Votre nom',
          message: 'Votre message',
          submit: 'Envoyer le témoignage'
        }
      },
      rsvp: {
        title: 'Confirmer votre présence',
        subtitle: 'Nous serions ravis de vous compter parmi nous',
        form: {
          name: 'Nom complet',
          phone: 'Téléphone',
          email: 'Email (optionnel)',
          attending: 'Je confirme ma présence',
          guests: 'Nombre d\'accompagnants',
          message: 'Message (optionnel)',
          submit: 'Confirmer ma présence'
        }
      },
      faith: {
        title: 'Notre Foi',
        subtitle: 'Les valeurs qui guident notre union',
        content: 'Notre mariage est fondé sur des valeurs spirituelles profondes. La foi, l\'espoir et l\'amour sont les piliers de notre union. Ensemble, nous marchons dans la lumière divine et construisons notre foyer sur des bases solides.'
      }
    },
    en: {
      navigation: {
        home: 'Home',
        ourStory: 'Our Story',
        celebration: 'The Celebration',
        gallery: 'Gallery',
        testimonies: 'Testimonies',
        rsvp: 'RSVP',
        ourFaith: 'Our Faith'
      },
      home: {
        welcome: 'Welcome',
        subtitle: 'Celebrating 5 years of love and happiness',
        marriedFor: 'Married for',
        days: 'days',
        quote: '"Love does not consist of gazing at each other, but in looking outward together in the same direction."',
        author: 'Antoine de Saint-Exupéry'
      },
      story: {
        title: 'Our Beautiful Story',
        subtitle: 'A journey of love through the years'
      },
      celebration: {
        title: 'The Celebration',
        date: 'Date',
        location: 'Location',
        dressCode: 'Dress Code',
        program: 'Daily Program',
        november: 'November 01, 2025',
        residence: 'Family residence in Nyom',
        dress: 'Chic and traditional',
        schedule: {
          welcome: 'Guests welcome',
          worship: 'Thanksgiving service',
          testimonies: 'Testimonies',
          dinner: 'Dinner',
          dance: 'Dance and celebration'
        }
      },
      gallery: {
        title: 'Our Memories',
        subtitle: 'Precious moments captured over the years'
      },
      testimonies: {
        title: 'Testimonies',
        subtitle: 'Share your sweet words and anecdotes',
        form: {
          name: 'Your name',
          message: 'Your message',
          submit: 'Send testimony'
        }
      },
      rsvp: {
        title: 'Confirm your attendance',
        subtitle: 'We would be delighted to count you among us',
        form: {
          name: 'Full name',
          phone: 'Phone',
          email: 'Email (optional)',
          attending: 'I confirm my attendance',
          guests: 'Number of guests',
          message: 'Message (optional)',
          submit: 'Confirm attendance'
        }
      },
      faith: {
        title: 'Our Faith',
        subtitle: 'The values that guide our union',
        content: 'Our marriage is founded on deep spiritual values. Faith, hope and love are the pillars of our union. Together, we walk in divine light and build our home on solid foundations.'
      }
    }
  };

  getCurrentLanguage(): Language {
    return this.currentLanguage.value;
  }

  switchLanguage(language: Language): void {
    this.currentLanguage.next(language);
  }

  getTranslation(key: string): string {
    const lang = this.currentLanguage.value.code;
    const keys = key.split('.');
    let result = this.translations[lang];
    
    for (const k of keys) {
      result = result?.[k];
    }
    
    return result || key;
  }

  getAvailableLanguages(): Language[] {
    return [
      { code: 'fr', name: 'Français', flag: '🇫🇷' },
      { code: 'en', name: 'English', flag: '🇺🇸' }
    ];
  }
}