import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
// @ts-ignore
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './Home/home.component';
import { YeetListComponent } from './YeetList/yeet-list.component';
import { CardListComponent } from './CardList/card-list.component';

const appRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: '', component: HomeComponent},
  {path: 'yeet-center', component: YeetListComponent},
  {path: 'cards', component: CardListComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    YeetListComponent,
    CardListComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- for debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
