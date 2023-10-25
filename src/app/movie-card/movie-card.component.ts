// src/app/movie-card/movie-card.component.ts
import { Component, OnInit } from '@angular/core';
import { UserRegistrationService } from '../fetch-api-data.service'
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { DetailDialogComponent } from '../detail-dialog/detail-dialog.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent {
  movies: any[] = [];
  constructor(public fetchApiData: UserRegistrationService,
              public snackBar: MatSnackBar,
              public router: Router,
              public dialog: MatDialog) { }

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.fetchApiData.getAllMovies().subscribe((resp: any) => {
        this.movies = resp;
        console.log(this.movies);
        return this.movies;
      });
    }

  genreDialog(genre: string): void {
    this.dialog.open(DetailDialogComponent, {
      data: {
        title: genre.Name,
        details: genre.Description
      }
    })
  }

  directorDialog(director: string): void {
    this.dialog.open(DetailDialogComponent, {
      data: {
        title: director.Name,
        details: director.Bio
      }
    })
  }

  descriptionDialog(description: string): void {
    this.dialog.open(DetailDialogComponent, {
      data: {
        title: description,
        details: ""
      }
    })
  }

  addFav(movieID: string): void {
    this.fetchApiData.addFavoriteMovie(movieID).subscribe(() => {
    }); 
  }

  deleteFav(movieID: string): void {
    this.fetchApiData.deleteFavoriteMovie(movieID).subscribe(() => {
    }); 
  }
}