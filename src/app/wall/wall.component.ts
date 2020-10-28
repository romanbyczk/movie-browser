import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OmdbService } from '../omdb.service';
const MOVIE_TYPE = 'movie';
const SERIES_TYPE = 'series';
@Component({
  selector: 'app-wall',
  templateUrl: './wall.component.html',
  styleUrls: ['./wall.component.scss'],
})
export class WallComponent implements OnInit {
  constructor(
    private omdbService: OmdbService,
    private router: Router,
    private route: ActivatedRoute
  ) {}
  data;
  results;
  ngOnInit() {
    if (this.router.url?.endsWith('/films')) {
      this.getData(MOVIE_TYPE);
    } else if (this.router.url?.endsWith('/series')) {
      this.getData(SERIES_TYPE);
    } else if (this.router.url?.startsWith('/search')) {
      this.route.params.subscribe((params) => this.search(params.find));
    }
  }
  search(searchValue) {
    this.omdbService.search(undefined, searchValue).then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  getData(type) {
    this.omdbService.search(type).then(
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
