import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Answer, AnswerData, User } from '../models/answer';
import * as moment from 'moment';

@Injectable({
  providedIn : 'root'
})
export class AnswerService {

  private url = 'https://api.myjson.com/bins/hildr';

  constructor(private http: HttpClient) {}

  fetchAnswers() {
    return this.http.get(this.url)
               .pipe(
                 map((results: any) => results.feed_answers.map(parseAnswer))
               );
  }
}

function parseAnswer(result: any): Answer {
  const data: AnswerData = {
    id         : result.Id,
    text       : result.Answer,
    questionId : result['Question-Id'],
    upvotes    : Number(result.upvotes),
    downvotes  : Number(result.downvotes),
    createdAt  : moment(result.created_at, 'DD/MMM/YY HH:mm').toDate(),
    createdBy  : parseUser(result.created_by),
  };

  return new Answer(data);
}

function parseUser(data: any): User {
  if (data == null || typeof data === 'string') {
    return null;
  }

  return {
    id      : data.Id,
    name    : data.Name,
    surname : data.Surname,
    avatar  : data.Avatar,
  };
}
