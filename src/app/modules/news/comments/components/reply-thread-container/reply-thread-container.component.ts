import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply-thread-container',
  templateUrl: './reply-thread-container.component.html',
  styleUrls: ['./reply-thread-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplyThreadContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
