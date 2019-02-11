import { Component, Input } from '@angular/core';
import { User } from '../models/answer';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
  styleUrls: ['./avatar.component.scss']
})
export class AvatarComponent {

  @Input() user: User;

}
