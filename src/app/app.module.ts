import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';
import { LocationStrategy, HashLocationStrategy} from '@angular/common';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';


import { AppComponent } from './app.component';
import { HomePageComponent } from './page/home-page/home-page.component';
import { AboutPageComponent } from './page/about-page/about-page.component';
import { ContactPageComponent } from './page/contact-page/contact-page.component';
import { SearchComponent } from './music/search/search.component';
import { ArtListComponent } from './music/art-list/art-list.component';
import { TrackComponent } from './music/track/track.component';
import { AlbumComponent } from './music/album/album.component';
import { MusicComponent } from './music/music.component';
import { ArtIdComponent } from './page/art-id/art-id.component';


//router
import { BooksComponent } from './products/books/books.component';
import { PhoneComponent } from './products/phone/phone.component';
import { ComputerComponent } from './products/computer/computer.component';
import { MainComponent } from './products/main/main.component';
import { InterestComponent } from './products/interest/interest.component';
import { SportifyComponent } from './products/sportify/sportify.component';
import { ByIdComponent } from './products/by-id/by-id.component';
import {   routes as childRoutes,
  ProductsComponent,
  ProductsComponentModule } from './products/products.component';



const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'about', component: AboutPageComponent },
  { path: 'contact', component: ContactPageComponent },
  { path: 'artId/:id', component: ArtIdComponent },
  { path: 'music', component: MusicComponent },
  { path: 'products', component: ProductsComponent,children: childRoutes},
  { path: 'contactus', redirectTo: 'home' },
];


@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    AboutPageComponent,
    ContactPageComponent,
    SearchComponent,
    ArtListComponent,
    TrackComponent,
    AlbumComponent,
    MusicComponent,
    ArtIdComponent,
    ProductsComponent,
    BooksComponent,
    PhoneComponent,
    ComputerComponent,
    MainComponent,
    InterestComponent,
    SportifyComponent,
    ByIdComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  bootstrap: [AppComponent],
  providers: [
    { provide: LocationStrategy, useClass: HashLocationStrategy }
  ]
})

export class AppModule { }
