import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-reaction',
  templateUrl: './reaction.component.html',
  styleUrls: ['./reaction.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ReactionComponent implements OnInit {
  @Input()
  path!: string

  @Input()
  text!: number

  @Input()
  id!: string

  @Input()
  clickFlag!: boolean

  constructor() {}

  ngOnInit(): void {}

  clickReaction(_event: any) {
    if (_event['id'] === 'comments') {
      return;
    }

    if (!this.clickFlag) {
      this.text = this.text + 1
    } else {
      this.text = this.text - 1
    }
    this.clickFlag = !this.clickFlag;
  }
}
