import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-moviedata',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movies.component.html',
  styleUrl: './movies.component.scss',
})
export class MoviedataComponent {
  @Input() movies_data: any;
}
