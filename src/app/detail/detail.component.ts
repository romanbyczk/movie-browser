import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';

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
    private detailsService: DetailsService
  ) {
    this.route.params.subscribe((params) => (this.id = params.id));
  }
  ngOnInit() {
    if (this.router.url?.startsWith('/detailfilm')) this.getFilmById(this.id);
    else if (this.router.url?.startsWith('/detailserie'))
      this.getSeriesById(this.id);
  }
  getFilmById(id) {
    this.detailsService.getFilmById(id).then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  getSeriesById(id) {
    this.detailsService.getSeriesById(id).then(
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
