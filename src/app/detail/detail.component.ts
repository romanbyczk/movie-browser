import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OmdbService } from '../omdb.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
})
export class DetailComponent implements OnInit {
  data;
  constructor(
    private route: ActivatedRoute,
    private omdbService: OmdbService
  ) {}
  ngOnInit() {
    this.route.params.subscribe((params) => this.getById(params.id));
  }
  getById(id) {
    this.omdbService.getById(id).then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  onSucces(data) {
    this.data = data;
  }
  onError(err) {
    console.log(err);
  }
}
