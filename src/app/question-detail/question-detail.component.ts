import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Question } from '../models/question';
import { switchMap } from 'rxjs/operators';
import { DataService } from '../services/data.service';
import { Answer } from '../models/answer';

@Component({
  selector    : 'app-question-detail',
  templateUrl : './question-detail.component.html',
  styleUrls   : ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  private question: Question;

  constructor(private activatedRoute: ActivatedRoute,
              private dataService: DataService) {}

  ngOnInit() {
    this.activatedRoute.params
        .pipe(
          switchMap(({ id }) => this.dataService.fetchQuestion(id)),
        )
        .subscribe(question => {
          this.question = question;
        });
  }

  addAnswer(text: string) {
    const answer = new Answer({
      id         : 'A-' + Date.now(),
      questionId : this.question.id,
      createdAt  : new Date(),
      text
    });

    this.question.answers.push(answer);
  }

}
