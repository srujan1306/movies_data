import { Component, Input } from '@angular/core';
import { AppComponent, newMovie } from '../app.component';
import { FormsModule } from '@angular/forms';
import { MovielistService } from '../movielist.service';

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [AppComponent, FormsModule],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss',
})
export class AddmovieComponent {
  movie_list: Array<newMovie> = [];

  constructor(public MovielistService: MovielistService) {
    this.movie_list = this.MovielistService.getmovies();
  }
  name = '';
  poster = '';
  rating = '';
  summary = '';

  addMovie() {
    let latestMovie: newMovie = {
      name: this.name,
      poster: this.poster,
      rating: +this.rating,
      summary: this.summary,
    };
    this.MovielistService.addMovie(latestMovie);
  }
}
