import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DetailsService } from '../details.service';

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
    this.data = this.detailsService.getSeries().subscribe((data) => {
      this.data = data['results'];
    });
    this.detailsService.getSth().then(
      (data) => {
        console.log('yes');
        console.log(data);
        this.data = data.Search;
      },
      (err) => {
        console.log('no');
        console.log(err);
      }
    );
  }
  getFilm() {
    this.data = this.detailsService.getFilm().subscribe((data) => {
      this.data = data['results'];
    });
  }
}
