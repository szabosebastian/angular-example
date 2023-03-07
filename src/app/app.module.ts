import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MenuComponent } from "./components/menu/menu.component";
import { ToastModule } from "primeng/toast";
import { ButtonModule } from "primeng/button";
import { errorHandlerInterceptorProviders } from "./interceptors/handle-error.interceptor";
import { MessageService } from "primeng/api";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ToastModule,
    AppRoutingModule,
    HttpClientModule,
    MenuComponent,
    ButtonModule,
  ],
  providers: [
    errorHandlerInterceptorProviders,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
