export class Votable {
  upvotes: number;
  downvotes: number;
  upvoted: boolean;
  downvoted: boolean;

  constructor(upvotes: number, downvotes: number) {
    this.upvotes   = upvotes;
    this.downvotes = downvotes;
    this.upvoted   = false;
    this.downvoted = false;
  }

  upvote() {
    if (this.upvoted) {
      return;
    }

    if (this.downvoted) {
      this.downvoted = false;
      this.downvotes--;
    }

    this.upvoted = true;
    this.upvotes++;
  }

  downvote() {
    if (this.downvoted) {
      return;
    }

    if (this.upvoted) {
      this.upvoted = false;
      this.upvotes--;
    }

    this.downvoted = true;
    this.downvotes++;
  }
}
