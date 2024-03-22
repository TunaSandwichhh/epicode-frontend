import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FiatPageComponent } from './components/fiat-page/fiat-page.component';
import { FordPageComponent } from './components/ford-page/ford-page.component';
import { AudiPageComponent } from './components/audi-page/audi-page.component';
import { Route, RouterModule } from '@angular/router';
import { ErrorPageComponent } from './components/error-page/error-page.component';

const routes: Route[] = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'fiat',
    component: FiatPageComponent,
  },
  {
    path: 'ford',
    component: FordPageComponent,
  },
  {
    path: 'audi',
    component: AudiPageComponent,
  },
  {
    path: 'error',
    component: ErrorPageComponent,
  },
  {
    path: '**',
    redirectTo: 'error',
  },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomePageComponent,
    FiatPageComponent,
    FordPageComponent,
    AudiPageComponent,
    ErrorPageComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
