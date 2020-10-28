import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-posters',
  templateUrl: './posters.component.html',
  styleUrls: ['./posters.component.scss'],
})
export class PostersComponent implements OnInit {
  @Input() postersData;
  constructor() {}

  ngOnInit(): void {}
}
