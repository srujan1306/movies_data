import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MoviedataComponent } from './movies/movies.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { FormsModule } from '@angular/forms';
import { CounterComponent } from './like-dislike/like-dislike.component';

export interface newMovie {
  id: number;
  name: string;
  poster: string;
  rating: number;
  summary: string;
  trailer: string;
}
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MoviedataComponent,
    MovieListComponent,
    FormsModule,
    CounterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
