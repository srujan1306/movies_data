import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../like-dislike/like-dislike.component';
import { newMovie } from '../app.component';

@Component({
  selector: 'app-moviedata',
  standalone: true,
  imports: [CommonModule, CounterComponent],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviedataComponent {
  @Input() movies_data: any;
  show = true;
  showDescription() {
    this.show = !this.show;
  }
  @Output() delete_the_movie = new EventEmitter<newMovie>();
  deleteMovie() {
    this.delete_the_movie.emit(this.movies_data);
    console.log('child', this.movies_data);
  }
}
