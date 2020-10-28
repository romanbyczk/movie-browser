import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';
const MOVIE_TYPE = 'movie';
const SERIES_TYPE = 'series';
@Component({
  selector: 'app-poster',
  templateUrl: './poster.component.html',
  styleUrls: ['./poster.component.scss'],
})
export class PosterComponent implements OnInit {
  constructor(private detailsService: DetailsService, private router: Router) {}
  data;
  results;
  ngOnInit() {
    if (this.router.url?.endsWith('/films')) {
      this.getFilm();
    } else if (this.router.url?.endsWith('/series')) {
      this.getSeries();
    }
  }
  getSeries() {
    this.detailsService.search(SERIES_TYPE).then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  getFilm() {
    this.detailsService.search(MOVIE_TYPE).then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  onSucces(data) {
    this.data = data.Search;
  }
  onError(err) {
    console.log(err);
  }
}
