import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { PLATFORM_ID, APP_ID, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FiltersComponent } from './filters/filters.component';
import { MainComponent } from './main/main.component';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    BrowserModule.withServerTransition({ appId: 'spacex-launches' }),
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([])
  ],
  declarations: [
    AppComponent,
    FiltersComponent,
    MainComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor(
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(APP_ID) private appId: string) {
    const platform = isPlatformBrowser(platformId) ?
      'in the browser' : 'on the server';
    console.log(`Running ${platform} with appId=${appId}`);
  }
}
