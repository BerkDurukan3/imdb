import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reply-container',
  templateUrl: './reply-container.component.html',
  styleUrls: ['./reply-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReplyContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
