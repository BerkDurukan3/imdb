import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CommentsRoutingModule } from './comments-routing.module';
import { CommentsComponent } from './comments.component';
import { ProfileImageComponent } from 'src/app/shared/components/profile-image/profile-image.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserContainerComponent } from './components/user-container/user-container.component';
import { CommentContainerComponent } from './components/comment-container/comment-container.component';
import { CommentReplyContainerComponent } from './components/comment-reply-container/comment-reply-container.component';
import { ThreadContainerComponent } from './components/thread-container/thread-container.component';
import { ReactionsContainerComponent } from './components/reactions-container/reactions-container.component';
import { TextComponent } from './components/text/text.component';
import { ReplyContainerComponent } from './components/reply-container/reply-container.component';
import { ReplyThreadContainerComponent } from './components/reply-thread-container/reply-thread-container.component';


@NgModule({
  declarations: [
    CommentsComponent,
    UserContainerComponent,
    CommentContainerComponent,
    CommentReplyContainerComponent,
    ThreadContainerComponent,
    ReactionsContainerComponent,
    TextComponent,
    ReplyContainerComponent,
    ReplyThreadContainerComponent,
  ],
  imports: [
    CommonModule,
    CommentsRoutingModule,
    SharedModule
  ]
})
export class CommentsModule { }
