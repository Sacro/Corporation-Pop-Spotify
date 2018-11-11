import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TracksComponent } from './tracks/tracks.component';

const routes: Routes = [
  {
    path: 'tracks',
    component: TracksComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TracksRoutingModule {}
