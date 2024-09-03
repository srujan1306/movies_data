import { Component, Input } from '@angular/core';
import { AppComponent, newMovie } from '../app.component';
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MovielistService } from '../movielist.service';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Router } from '@angular/router';
import { couldStartTrivia } from 'typescript';

@Component({
  selector: 'app-addmovie',
  standalone: true,
  imports: [
    AppComponent,
    FormsModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './addmovie.component.html',
  styleUrl: './addmovie.component.scss',
})
export class AddmovieComponent {
  movie_list: Array<newMovie> = [];
  movieForm: FormGroup;
  selectedFile: File | null = null;

  movieId!: '';
  name = '';
  rating = '';
  summary = '';
  file = '';
  trailer = '';
  formData = new FormData();
  constructor(
    public MovielistService: MovielistService,
    private router: Router,
    private fb: FormBuilder
  ) {
    // formGroup -> formControlName
    this.movieForm = this.fb.group({
      name: '',
      rating: '',
      summary: '',
      trailer: '',
      file: '',
    });
  }

  addMovie() {
    this.formData.append('name', this.movieForm.get('name')?.value);
    this.formData.append('rating', this.movieForm.get('rating')?.value);
    this.formData.append('summary', this.movieForm.get('summary')?.value);
    this.formData.append('trailer', this.movieForm.get('trailer')?.value);

    if (this.selectedFile) {
      this.formData.append('file', this.selectedFile);
    }
    this.MovielistService.addMovie(this.formData);
  }
  onFileChange(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      this.selectedFile = input.files[0];
    }
  }
}
