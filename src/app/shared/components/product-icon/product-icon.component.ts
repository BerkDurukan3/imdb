import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-icon',
  templateUrl: './product-icon.component.html',
  styleUrls: ['./product-icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductIconComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
