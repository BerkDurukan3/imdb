import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { NewsRowComponent } from 'src/app/shared/components/news-row/news-row.component';


@NgModule({
  declarations: [
    NewsComponent,
    NewsRowComponent

  ],
  imports: [
    CommonModule,
    NewsRoutingModule,
    SharedModule
  ]
})
export class NewsModule { }
