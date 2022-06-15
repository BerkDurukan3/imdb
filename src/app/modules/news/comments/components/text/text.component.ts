import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TextComponent implements OnInit {
  @Input()
  text !: string

  @Input()
  nameFlag !: boolean

  constructor() { }

  ngOnInit(): void {
  }

}
