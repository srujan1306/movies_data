import { Component, Input } from '@angular/core';
import { MoviedataComponent } from '../movies/movies.component';

@Component({
  selector: 'app-movie-list',
  standalone: true,
  imports: [MoviedataComponent],
  templateUrl: './movie-list.component.html',
  styleUrl: './movie-list.component.scss',
})
export class MovieListComponent {
  @Input() movie_list: any;
}
