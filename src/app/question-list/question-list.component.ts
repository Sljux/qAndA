import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question';
import { Observable } from 'rxjs';
import { DataService } from '../services/data.service';
import { Router } from '@angular/router';

@Component({
  selector    : 'app-question-list',
  templateUrl : './question-list.component.html',
  styleUrls   : ['./question-list.component.scss']
})
export class QuestionListComponent implements OnInit {

  questions$: Observable<Question[]>;

  constructor(private dataService: DataService,
              private router: Router) {}

  ngOnInit() {
    this.questions$ = this.dataService.fetchQuestions();
  }

  navigateToDetails(question: Question) {
    this.router.navigate(['question', question.id]);
  }

}
