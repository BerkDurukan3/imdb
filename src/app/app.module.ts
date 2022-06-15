import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/layout/header/header.component';
import { SearchBarComponent } from './shared/components/search-bar/search-bar.component';
import { ProductIconComponent } from './shared/components/product-icon/product-icon.component';
import { ProfileImageComponent } from './shared/components/profile-image/profile-image.component';
import { SharedModule } from './shared/shared.module';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchBarComponent,
    ProductIconComponent,
    ProfileImageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,

  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [
    HeaderComponent,
    SearchBarComponent,
    ProductIconComponent,
    ProfileImageComponent,

  ]
})
export class AppModule { }
