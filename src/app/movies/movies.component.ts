import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterComponent } from '../like-dislike/like-dislike.component';

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
}
