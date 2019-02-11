import { Votable } from './votable';

export interface User {
  id: string;
  name: string;
  surname: string;
  avatar: string;
}

export interface AnswerData {
  id: string;
  text: string;
  upvotes?: number;
  downvotes?: number;
  createdAt: Date;
  createdBy?: User;
  questionId: string;
}

export class Answer extends Votable {
  id: string;
  text: string;
  createdAt: Date;
  createdBy: User;
  questionId: string;

  constructor({ id, text, upvotes, downvotes, createdAt, createdBy, questionId }: AnswerData) {
    super(upvotes || 0, downvotes || 0);

    this.id         = id;
    this.text       = text;
    this.createdAt  = createdAt;
    this.createdBy  = createdBy;
    this.questionId = questionId;
  }
}
