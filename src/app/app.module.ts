import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { GalleryComponent } from './gallery/gallery.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GianfrancomarmoComponent } from './riders/gianfrancomarmo/gianfrancomarmo.component';
import { SimonelicheriComponent } from './riders/simonelicheri/simonelicheri.component';
import { SpotsComponent } from './spots/spots.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    ContactComponent,
    GalleryComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    GianfrancomarmoComponent,
    SimonelicheriComponent,
    SpotsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
