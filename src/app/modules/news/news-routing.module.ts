import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './news.component';

const routes: Routes = [{ path: '', component: NewsComponent },
{ path: 'comments', loadChildren: () => import('./comments/comments.module').then(m => m.CommentsModule) }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewsRoutingModule { }
