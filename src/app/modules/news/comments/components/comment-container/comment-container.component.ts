import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentContainerComponent implements OnInit {

  @Input()
  profileImage !: String

  @Input()
  username !: String

  @Input()
  date !: String

  @Input()
  time !: String

  @Input()
  text !: String

  @Input()
  path !: String

  @Input()
  like!: number;

  @Input()
  dislike!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
