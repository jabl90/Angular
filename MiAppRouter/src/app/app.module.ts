import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module'; //importamos el modulo de routing para utilizar las rutas
import { AppComponent } from './app.component';
import { AComponent } from './a/a.component';
import { BComponent } from './b/b.component';
import { MiHeaderComponent } from './mi-header/mi-header.component';

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent,
    MiHeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
