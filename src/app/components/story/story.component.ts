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
      description: 'Après quelques années de fiançailles, Georges et Bibiane unissent enfin leurs vies devant Dieu, entourés de leur famille et de leurs amis. C\'est le commencement d\'une magnifique aventure à deux, guidée par l\'amour, la foi et l’\espérance.',
      image: 'assets/images/Dance.jpg'
    },
    {
      year: '2021',
      title: 'Premiers Pas Ensemble',
      description: 'Construction de leur foyer, apprentissage de la vie à deux, découverte des joies et défis du mariage. Une année de croissance mutuelle et de renforcement de leur amour.',
      image: 'assets/images/Dance.jpg'
    },
    {
      year: '2022',
      title: 'Approfondissement des Liens',
      description: 'Cette année, Georges s\'est particulièrement distingué par son engagement profond envers sa communauté. Il a porté avec passion le projet du festival Nkon Ngon 5ème édition Nanga EBoko 2022, une initiative majeure qu\'il n\'aurait jamais pu mener à bien sans le soutien indéfectible de sa merveilleuse épouse, Bibiane.Durant plus de huit mois, Georges s’est entièrement consacré à cette cause, trouvant en Bibiane une alliée fidèle, une source de force et d’inspiration dans chaque étape de cette belle aventure communautaire.',
      image: 'https://images.pexels.com/photos/1024995/pexels-photo-1024995.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2023',
      title: 'Consolidation',
      description: 'Année placée sous le signe de la stabilité et des projets communs. Georges et Bibiane resserrent leurs liens autour d\'initiatives importantes qu\'ils portent ensemble, tout en affirmant leur rôle au sein de leurs familles respectives. Ensemble, ils bâtissent patiemment l\'avenir, unis par la même vision et un profond amour.',
      image: 'https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2024',
      title: 'Préparation de la Célébration',
      description: 'Le 25 décembre 2024, ils ont traversé une épreuve difficile : un cambriolage qui les a fait reculer de plusieurs années dans les investissements patiemment construits pour leur avenir. Mais cette épreuve n\'a fait que renforcer la solidité de leur amour. Main dans la main, Georges et Bibiane se sont relevés avec courage, transformant la douleur en détermination. Aujourd\'hui, ce n\'est plus qu\'un lointain souvenir, effacé par leur résilience et leur unité.',
      image: 'https://images.pexels.com/photos/1024996/pexels-photo-1024996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    },
    {
      year: '2025',
      title: '5 Ans d\'Amour, de tolerance et de courage',
      description: 'Célébration de cinq années d\'un mariage béni — un moment de gratitude, de joie et de renouveau pour les années à venir. Nous reconnaissons avoir traversé bien des épreuves, et sans doute d\'autres viendront encore. Mais pour le chemin déjà parcouru, nous rendons grâce à Dieu, convaincus que tout concourt au bien de ceux qui aiment Dieu.',
      image: 'assets/images/Dance.jpg'
    }
  ];

  constructor(public translationService: TranslationService) {}
}