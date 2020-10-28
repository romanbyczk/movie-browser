import { Component, OnInit } from '@angular/core';
import { DetailsService } from '../details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private detailsService: DetailsService) {}
  trend;
  nowplaying;
  activeTrend;
  ngOnInit() {
    this.getData();
  }
  getData() {
    this.detailsService.search().then(
      (data) => this.onSucces(data),
      (err) => this.onError(err)
    );
  }
  onSucces(data) {
    this.nowplaying = data.Search;
    this.activeTrend = this.nowplaying[0];
    this.trend = this.nowplaying.slice(1, 3);
  }
  onError(err) {
    console.log(err);
  }
}
