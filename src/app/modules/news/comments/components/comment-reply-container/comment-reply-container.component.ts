import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-comment-reply-container',
  templateUrl: './comment-reply-container.component.html',
  styleUrls: ['./comment-reply-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CommentReplyContainerComponent implements OnInit {
  @Input()
  profileImage!: string;

  @Input()
  username!: string;

  @Input()
  date!: string;

  @Input()
  time!: string;

  constructor() {}

  ngOnInit(): void {}
}
