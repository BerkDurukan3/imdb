import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-reactions-container',
  templateUrl: './reactions-container.component.html',
  styleUrls: ['./reactions-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReactionsContainerComponent implements OnInit {
  @Input()
  like!: number;

  @Input()
  dislike!: number;
  constructor() { }

  ngOnInit(): void {
  }

}
