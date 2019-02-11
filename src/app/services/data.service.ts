import { Injectable } from '@angular/core';
import { QuestionService } from './question.service';
import { AnswerService } from './answer.service';
import { forkJoin, of, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Question } from '../models/question';
import { Answer } from '../models/answer';

@Injectable({
  providedIn : 'root'
})
export class DataService {

  private questionCache: Map<string, Question>;

  constructor(private questionService: QuestionService,
              private answerService: AnswerService) {}

  fetchQuestions(): Observable<Question[]> {
    if (this.questionCache) {
      return of(Array.from(this.questionCache.values()));
    }

    return forkJoin([
      this.questionService.fetchQuestions(),
      this.answerService.fetchAnswers(),
    ]).pipe(
      map(([questions, answers]: [Question[], Answer[]]) => {
        this.questionCache = new Map<string, Question>();

        questions.forEach(q => {
          this.questionCache.set(q.id, q);
        });

        answers.forEach(a => {
          const question = this.questionCache.get(a.questionId);

          if (question) {
            question.answers.push(a);
          }
        });

        this.questionCache.forEach(q => {
          q.answers.sort((a, b) => (+a.createdAt) - (+b.createdAt));
        });

        return Array.from(this.questionCache.values());
      })
    );
  }

  fetchQuestion(id): Observable<Question> {
    const questions$: Observable<any> = this.questionCache == null
      ? this.fetchQuestions()
      : of(null);

    return questions$
      .pipe(
        map(() => this.questionCache.get(id))
      );
  }
}
