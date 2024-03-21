import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

const routes: Route[] = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'users',
    component: UserPage,
  },
];

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

//RouterModule.forRoots(routes)

//<a class="nav-link active" [routerLink="['/']" routerLinkActive="active"] [routerLinkActiveOptions="{exact: true}"]>Home</a>
