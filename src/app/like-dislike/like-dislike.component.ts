import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  standalone: true,
  imports: [],
  templateUrl: './like-dislike.component.html',
  styleUrl: './like-dislike.component.scss',
})
export class CounterComponent {
  like = 10;
  disLike = 0;
  diff = 0;
  likeIncrement() {
    this.like = this.like + 1;
    if (this.like > 10) {
      this.diff = this.like - this.disLike;
    }
  }
  likeDecrement() {
    this.disLike = this.disLike + 1;
    this.diff = this.like - this.disLike;
  }
}
