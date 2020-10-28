import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DetailComponent } from './detail/detail.component';
import { WallComponent } from './wall/wall.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'films', component: WallComponent },
  { path: 'series', component: WallComponent },
  { path: 'search/:find', component: WallComponent },
  { path: 'detail/:id', component: DetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
