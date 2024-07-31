import { Component, Input } from '@angular/core';
import { MoviedataComponent } from '../movies/movies.component';
import { AppComponent, newMovie } from '../app.component';
import { FormsModule } from '@angular/forms';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MoviedataComponent, AppComponent, FormsModule],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  movie_list: Array<newMovie> = [];

  constructor(public MovielistService: MovielistService) {
    this.movie_list = this.MovielistService.getmovies();
  }

  deletefilm(movie_to_be_deleted: newMovie) {
    console.log('parent', movie_to_be_deleted);
    this.MovielistService.deleteMovie(movie_to_be_deleted);
  }
}
