import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { MoviedataComponent } from './movies/movies.component';
import { CounterComponent } from './like-dislike/like-dislike.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'movielist',
    component: MovieListComponent,
  },
  {
    path: 'movies',
    component: MoviedataComponent,
  },
  {
    path: 'like-dislike',
    component: CounterComponent,
  },
];
