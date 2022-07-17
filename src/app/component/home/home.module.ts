import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BannerViewComponent } from './banner-view/banner-view.component';
import { TopViewComponent } from './top-view/top-view.component';
import { RecentViewComponent } from './recent-view/recent-view.component';
import { HomeComponent } from './home.component';


@NgModule({
  declarations: [ HomeComponent,BannerViewComponent, TopViewComponent, RecentViewComponent   ],
  imports: [
    CommonModule
  ]
})
export class HomeModule { }
