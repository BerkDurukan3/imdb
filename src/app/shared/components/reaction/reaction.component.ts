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
  path: string | undefined;

  @Input()
  text: string | undefined;

  @Input()
  id: string | undefined;

  @Input()
  clickFlag: boolean | undefined;

  constructor() {}

  ngOnInit(): void {}

  clickReaction(_event: any) {
    if (_event['id'] === 'comments') {
      return;
    }

    if (!this.clickFlag) {
      this.text = (Number(this.text) + 1).toString();
    } else {
      this.text = (Number(this.text) - 1).toString();
    }
    this.clickFlag = !this.clickFlag;
  }
}
