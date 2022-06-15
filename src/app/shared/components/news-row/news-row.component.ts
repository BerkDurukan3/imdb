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
  title: string | undefined;

  @Input()
  like: string | undefined;

  @Input()
  dislike: string | undefined;

  @Input()
  comments: string | undefined;

  @Input()
  date: string | undefined;

  @Input()
  id: string | undefined;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  clickTitle(_event: any) {
    this.router.navigate(['/news', 'comments'], {
      queryParams: { id: this.id },
    });
  }
}
