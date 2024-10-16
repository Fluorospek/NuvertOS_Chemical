import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { Chemical } from '../chemical';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})

export class CardComponent {
  @Input() compound: Chemical = {
    id: 0,
    compoundName: '',
    strImageSource: '',
    compoundDesc: '',
    strImageAttribution: '',
  }
}