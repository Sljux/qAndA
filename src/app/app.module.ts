import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionService } from './services/question.service';
import { AnswerService } from './services/answer.service';
import { DataService } from './services/data.service';
import { QuestionComponent } from './question/question.component';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatIconModule, MatInputModule } from '@angular/material';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { AddAnswerComponent } from './add-answer/add-answer.component';
import { AvatarComponent } from './avatar/avatar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations : [
    AppComponent,
    QuestionListComponent,
    QuestionComponent,
    QuestionDetailComponent,
    AnswerListComponent,
    AddAnswerComponent,
    AvatarComponent,
  ],

  imports : [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserAnimationsModule,
  ],

  providers : [
    QuestionService,
    AnswerService,
    DataService,
  ],

  bootstrap : [
    AppComponent,
  ]
})
export class AppModule {}
