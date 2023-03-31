import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ArtistasComponent } from './components/artistas/artistas.component';
import { NosotrosComponent } from './components/nosotros/nosotros.component';
import { HeaderComponent } from './components/header/header.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { LonuevoComponent } from './components/lonuevo/lonuevo.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ArtistasComponent,
    NosotrosComponent,
    HeaderComponent,
    NavComponent,
    FooterComponent,
    LonuevoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
