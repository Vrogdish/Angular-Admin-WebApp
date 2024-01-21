import { Component } from '@angular/core';
import { SmallCardComponent } from '../../components/small-card/small-card.component';

@Component({
  selector: 'app-todays-users',
  standalone: true,
  imports: [SmallCardComponent],
  templateUrl: './todays-users.component.html',
  styleUrl: './todays-users.component.scss'
})
export class TodaysUsersComponent {
content = {title : "Today’s Users", imageUrl : "../../../assets/icons/group.png", path : ""}
data = {amount : "23", balance : "+5%"}
}
