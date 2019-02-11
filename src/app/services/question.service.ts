import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Question, QuestionData } from '../models/question';
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})
export class QuestionService {

  private url = 'https://api.myjson.com/bins/dck5b';

  constructor(private http: HttpClient) {}

  fetchQuestions(): Observable<Question[]> {
    return this.http.get(this.url)
               .pipe(
                 map((results: any) => results.feed_questions.map(parseQuestion))
               );
  }
}

function parseQuestion(result: any): Question {
  const data: QuestionData = {
    id        : result.Id,
    text      : result.Text,
    upvotes   : Number(result.upvotes),
    downvotes : Number(result.downvotes),
  };

  return new Question(data);
}
