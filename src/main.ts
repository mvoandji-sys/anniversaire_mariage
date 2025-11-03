import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './app/components/header/header.component';
import { HeroComponent } from './app/components/hero/hero.component';
import { StoryComponent } from './app/components/story/story.component';
import { CelebrationComponent } from './app/components/celebration/celebration.component';
import { GalleryComponent } from './app/components/gallery/gallery.component';
import { TestimoniesComponent } from './app/components/testimonies/testimonies.component';
import { RSVPComponent } from './app/components/rsvp/rsvp.component';
import { FaithComponent } from './app/components/faith/faith.component';
import { FooterComponent } from './app/components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    HeaderComponent,
    HeroComponent,
    StoryComponent,
    CelebrationComponent,
    GalleryComponent,
    TestimoniesComponent,
    RSVPComponent,
    FaithComponent,
    FooterComponent
  ],
  template: `
    <div class="min-h-screen">
      <app-header></app-header>
      <main>
        <app-hero></app-hero>
        <app-story></app-story>
        <app-celebration></app-celebration>
        <app-gallery></app-gallery>
        <app-testimonies></app-testimonies>
        <app-rsvp></app-rsvp>
        <app-faith></app-faith>
      </main>
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    :host {
      display: block;
    }
  `]
})
export class App {}

bootstrapApplication(App);