import { Component, Input } from '@angular/core';
import { MovielistService } from '../movielist.service';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { newMovie } from '../app.component';

@Component({
  selector: 'app-movie-details',
  standalone: true,
  imports: [],
  templateUrl: './movie-details.component.html',
  styleUrl: './movie-details.component.scss',
})
export class MovieDetailsComponent {
  movie!: newMovie;
  trustedUrl!: SafeUrl;

  constructor(
    private MovielistService: MovielistService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {
    let idx = this.route.snapshot.paramMap.get('id') as string; // From URL
    console.log(idx);
    this.movie = this.MovielistService.getMovieByIndex(+idx);
    console.log(this.movie);

    // this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.movie.trailer
    // );
  }
}
