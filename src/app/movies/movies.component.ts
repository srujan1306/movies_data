import { Component, EventEmitter, Input, Output, output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../like-dislike/like-dislike.component';
import { newMovie } from '../app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

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
  ],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviedataComponent {
  @Input() movies_data: any;
  show = true;
  @Input() id = 0;
  showDescription() {
    this.show = !this.show;
  }
  @Output() delete_the_movie = new EventEmitter<newMovie>();
  deleteMovie() {
    this.delete_the_movie.emit(this.movies_data);
    console.log('child', this.movies_data);
  }
}
