import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviedataComponent } from './movies/movies.component';
import { CounterComponent } from './like-dislike/like-dislike.component';
import { HomepageComponent } from './homepage/homepage.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AddmovieComponent } from './addmovie/addmovie.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

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
    path: 'like-dislike',
    component: CounterComponent,
  },
  {
    path: 'movielist/:id',
    component: MovieDetailsComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];
