import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-news-row',
  templateUrl: './news-row.component.html',
  styleUrls: ['./news-row.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsRowComponent implements OnInit {
  @Input()
  title!: string

  @Input()
  like!: number

  @Input()
  dislike!: number

  @Input()
  comments!: number

  @Input()
  date!: string

  @Input()
  id!: string

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickTitle(_event: any) {
    this.router.navigate(['/news', 'comments'], {
      queryParams: { id: this.id },
    });
  }
}
