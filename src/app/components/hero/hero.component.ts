import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './hero.component.html'
})
export class HeroComponent implements OnInit {
  marriageDays: number = 0;

  constructor(public translationService: TranslationService) {}

  ngOnInit(): void {
    this.calculateMarriageDays();
  }

  calculateMarriageDays(): void {
    const marriageDate = new Date('2020-10-30'); // Date approximative du mariage
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - marriageDate.getTime());
    this.marriageDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  }
}