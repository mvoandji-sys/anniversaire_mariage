import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslationService } from '../../services/translation.service';
import { TimelineEvent } from '../../interfaces/interfaces';

@Component({
  selector: 'app-story',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './story.component.html'
})
export class StoryComponent {
  timelineEvents: TimelineEvent[] = [
    {
      year: '2020',
      title: 'Notre Union Sacrée',
      description: 'Georges et Bibiane s\'unissent devant Dieu, leur famille et leurs amis. Le début d\'une belle aventure à deux, marquée par l\'amour, la foi et l\'espoir.',
      image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2021',
      title: 'Premiers Pas Ensemble',
      description: 'Construction de leur foyer, apprentissage de la vie à deux, découverte des joies et défis du mariage. Une année de croissance mutuelle et de renforcement de leur amour.',
      image: 'https://images.pexels.com/photos/1024994/pexels-photo-1024994.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2022',
      title: 'Approfondissement des Liens',
      description: 'Développement de leurs traditions familiales, voyages et aventures partagées. Leur amour continue de grandir et de mûrir avec le temps.',
      image: 'https://images.pexels.com/photos/1024995/pexels-photo-1024995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2023',
      title: 'Consolidation',
      description: 'Année de stabilité et de projets communs. Georges et Bibiane renforcent leurs liens spirituels et familiaux, préparant l\'avenir ensemble.',
      image: 'https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2024',
      title: 'Préparation de la Célébration',
      description: 'Organisation et préparation de leur 5ème anniversaire. Une année de réflexion sur le chemin parcouru et d\'anticipation joyeuse de la célébration à venir.'
    },
    {
      year: '2025',
      title: '5 Ans d\'Amour',
      description: 'Célébration de cinq années de mariage béni. Un moment de gratitude, de joie et de renouvellement des vœux pour les années à venir.'
    }
  ];

  constructor(public translationService: TranslationService) {}
}