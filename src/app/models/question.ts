import { Answer } from './answer';
import { Votable } from './votable';

export interface QuestionData {
  id: string;
  text: string;
  upvotes?: number;
  downvotes?: number;
}

export class Question extends Votable {
  id: string;
  text: string;
  answers: Answer[];

  constructor({ id, text, upvotes, downvotes }: QuestionData) {
    super(upvotes || 0, downvotes || 0);

    this.id      = id;
    this.text    = text;
    this.answers = [];
  }
}
