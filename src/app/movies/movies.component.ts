import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../like-dislike/like-dislike.component';
import { newMovie } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { Route, Router, RouterLink } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { routes } from '../app.routes';

@Component({
  selector: 'app-moviedata',
  standalone: true,
  imports: [
    CommonModule,
    CounterComponent,
    MatButtonModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    MatCardModule,
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviedataComponent {
  @Input() movies_data: any;
  @Input() id!: number;
  show = true;
  constructor(private route: Router) {}
  showDescription() {
    this.show = !this.show;
  }
  @Output() delete_the_movie = new EventEmitter<newMovie>();
  deleteMovie() {
    this.delete_the_movie.emit(this.movies_data);
    console.log('child', this.movies_data);
  }
  movieInfo(id: string) {
    console.log(id);
    this.route.navigate([`/movie-list/${id}`]);
  }
}
