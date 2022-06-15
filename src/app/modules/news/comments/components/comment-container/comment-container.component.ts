import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-comment-container',
  templateUrl: './comment-container.component.html',
  styleUrls: ['./comment-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CommentContainerComponent implements OnInit {

  @Input()
  profileImage !: string

  @Input()
  username !: string

  @Input()
  date !: string

  @Input()
  time !: string

  @Input()
  text !: string

  @Input()
  path !: string

  @Input()
  like!: number;

  @Input()
  dislike!: number;

  constructor() { }

  ngOnInit(): void {

  }

}
