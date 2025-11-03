export interface Language {
  code: 'fr' | 'en';
  name: string;
  flag: string;
}

export interface Testimony {
  id: number;
  name: string;
  message: string;
  date: Date;
  approved: boolean;
}

export interface RSVP {
  name: string;
  phone: string;
  email?: string;
  attending: boolean;
  guests?: number;
  message?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface Translations {
  fr: any;
  en: any;
}