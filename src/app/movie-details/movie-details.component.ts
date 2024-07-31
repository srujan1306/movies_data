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
  isLoading: boolean = true;
  msg = '';

  constructor(
    private MovielistService: MovielistService,
    private route: ActivatedRoute, // DI
    private sanitizer: DomSanitizer
  ) {
    // this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
    //   this.movie.trailer
    // );
  }
  ngOnInit() {
    let id = this.route.snapshot.paramMap.get('id') as string; // From URL

    this.MovielistService.getMovieByIdP(id)
      .then((data) => {
        this.movie = data; // Model
        this.isLoading = false;
        this.trustedUrl = this.sanitizer.bypassSecurityTrustResourceUrl(
          this.movie.trailer
        );
      })
      .catch(() => {
        this.isLoading = false;
        this.msg = 'Something went wrong 🥲';
      });
  }
}
