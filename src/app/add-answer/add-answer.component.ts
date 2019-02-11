import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector    : 'app-add-answer',
  templateUrl : './add-answer.component.html',
  styleUrls   : ['./add-answer.component.scss']
})
export class AddAnswerComponent {

  text = '';

  @Output() answered = new EventEmitter<string>();

  addAnswer() {
    this.answered.emit(this.text);
    this.text = '';
  }

}
