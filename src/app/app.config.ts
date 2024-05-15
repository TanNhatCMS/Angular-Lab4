import {ApplicationConfig, Injectable} from '@angular/core';
import {provideRouter, RouterStateSnapshot, Routes, TitleStrategy} from "@angular/router";
import {Title} from "@angular/platform-browser";
import {HomeComponent} from "./home/home.component";
import {Bai1Component} from "./bai1/bai1.component";
import {Bai2Component} from "./bai2/bai2.component";
import {Bai3Component} from "./bai3/bai3.component";
import {Bai4Component} from "./bai4/bai4.component";


const routes: Routes = [
  {path: '', redirectTo: 'index.html', pathMatch: 'full'},
  {path: 'index.html', title: 'Trang chủ', component: HomeComponent},
  {path: 'Lab4_1.html', title: 'Bài 1', component: Bai1Component},
  {path: 'Lab4_2.html', title: 'Bài 2', component: Bai2Component},
  {path: 'Lab4_3.html', title: 'Bài 3', component: Bai3Component},
  {path: 'Lab4_4.html', title: 'Bài 4', component: Bai4Component},
  {path: '**', redirectTo: ''}
];

@Injectable({providedIn: 'root'})
export class TemplatePageTitleStrategy extends TitleStrategy {
  constructor(private readonly title: Title) {
    super();
  }

  override updateTitle(routerState: RouterStateSnapshot) {
    const title = this.buildTitle(routerState);
    if (title !== undefined) {
      this.title.setTitle(`Angular | Lab4 - ${title}`);
    }
  }
}


export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    {provide: TitleStrategy, useClass: TemplatePageTitleStrategy},
  ]
};
