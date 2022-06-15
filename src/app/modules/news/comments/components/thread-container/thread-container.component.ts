import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-thread-container',
  templateUrl: './thread-container.component.html',
  styleUrls: ['./thread-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadContainerComponent implements OnInit {
  @Input()
  profileImage !: String
  constructor() { }

  ngOnInit(): void {

  }

}
