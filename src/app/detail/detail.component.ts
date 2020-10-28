import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  id: number;
  film;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private omdbService: OmdbService
  ) {
    this.route.params.subscribe((params) => (this.id = params.id));
  }
  ngOnInit() {
    if (this.router.url?.startsWith('/detailfilm')) this.getFilmById(this.id);
    else if (this.router.url?.startsWith('/detailserie'))
      this.getSeriesById(this.id);
  }
  getFilmById(id) {
    this.omdbService.getFilmById(id).then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  getSeriesById(id) {
    this.omdbService.getSeriesById(id).then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  onSucces(data) {
    this.film = data;
  }
  onError(err) {
    console.log(err);
  }
}
