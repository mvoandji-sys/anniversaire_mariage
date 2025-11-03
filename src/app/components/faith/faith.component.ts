import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';

@Component({
  selector: 'app-faith',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './faith.component.html'
})
export class FaithComponent {
  constructor(public translationService: TranslationService) {}
}