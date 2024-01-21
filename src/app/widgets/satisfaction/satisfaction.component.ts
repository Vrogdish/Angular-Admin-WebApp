import { Component,OnInit} from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-satisfaction',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './satisfaction.component.html',
  styleUrl: './satisfaction.component.scss'
})
export class SatisfactionComponent implements OnInit{
  rate: number = 80
  rotateStyle! : string

ngOnInit(): void {
    const rotateValue = (this.rate /100)*180 - 135
    this.rotateStyle = `rotate(${rotateValue}deg)`
}


}
