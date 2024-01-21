import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';

@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
firstName = "Cédric"
lastName = " Gache"
}
