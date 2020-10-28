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
    if (this.router.url?.startsWith('/detailfilm')) this.getFilmByName(this.id);
    else if (this.router.url?.startsWith('/detailserie'))
      this.getSerieByName(this.id);
  }
  getFilmByName(id) {
    this.detailsService.getFilmByName(id).subscribe((data) => {
      this.film = data;
    });
  }
  getSerieByName(id) {
    this.detailsService.getSerieByName(id).subscribe((data) => {
      this.film = data;
    });
  }
}
