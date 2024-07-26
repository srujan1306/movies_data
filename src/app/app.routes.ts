import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviedataComponent } from './movies/movies.component';
import { CounterComponent } from './like-dislike/like-dislike.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddmovieComponent } from './addmovie/addmovie.component';

export const routes: Routes = [
  {
    path: 'Home',
    component: HomepageComponent,
  },
  {
    path: 'movielist',
    component: MovieListComponent,
  },
  {
    path: 'addmovie',
    component: AddmovieComponent,
  },
  {
    path: 'movies',
    component: MoviedataComponent,
  },
  {
    path: 'like-dislike',
    component: CounterComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
