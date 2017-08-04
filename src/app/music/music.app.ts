/*
 * Angular Imports
 */
import {
  Component
} from '@angular/core';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import {
  RouterModule,
  Routes
} from '@angular/router';
import {
  LocationStrategy,
  HashLocationStrategy,
  APP_BASE_HREF
} from '@angular/common';

/*
 * Components
 */
import {SearchComponent} from './search/search.component';
import {ArtListComponent} from './art-list/art-list.component';
import {AlbumComponent} from './album/album.component';
import {TrackComponent} from './track/track.component';

/*
 * Services
 */
import {SPOTIFY_PROVIDERS} from './services/SpotifyService';

// /*
//  * Webpack
//  */
// require('css/styles.css');

@Component({
  selector: 'router-app',
  template: `
  <router-outlet></router-outlet>
  `
})
class RoutesDemoApp {
  query: string;
}

const routes: Routes = [
  { path: '', redirectTo: 'search', pathMatch: 'full' },
  { path: 'search', component: SearchComponent },
  { path: 'artists/:id', component: ArtListComponent },
  { path: 'tracks/:id', component: TrackComponent },
  { path: 'albums/:id', component: AlbumComponent },
];

@NgModule({
  declarations: [
    RoutesDemoApp,
    SearchComponent,
    ArtListComponent,
    TrackComponent,
    AlbumComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes) // <-- routes
  ],
  bootstrap: [ RoutesDemoApp ],
  providers: [
    SPOTIFY_PROVIDERS,
    {provide: APP_BASE_HREF, useValue: '/'},
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
class RoutesDemoAppModule {}

platformBrowserDynamic().bootstrapModule(RoutesDemoAppModule)
  .catch((err: any) => console.error(err));
