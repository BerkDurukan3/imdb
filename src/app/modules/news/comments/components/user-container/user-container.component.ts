import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserContainerComponent implements OnInit {

  @Input()
  profileImage!: string

  @Input()
  username!: string

  @Input()
  date!: string

  @Input()
  time!: string

  @Input()
  flag: boolean = false

  constructor() { }

  ngOnInit(): void {
  }

}
