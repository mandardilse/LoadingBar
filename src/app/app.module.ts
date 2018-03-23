import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MatProgressBarModule } from '@angular/material/progress-bar';


import { AppComponent } from './app.component';
import { LoaderComponent } from './shared/loader/loader.component';
import { AppHttpInterceptor } from './shared/app-http-interceptor';
import { LoaderService } from './shared/loader.service';


@NgModule({
  declarations: [
    AppComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatProgressBarModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true
    },
    LoaderService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
