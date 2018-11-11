import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { TrackItemComponent } from './track-item/track-item.component';
import { TracksRoutingModule } from './tracks-routing.module';
import { TracksComponent } from './tracks/tracks.component';

@NgModule({
  declarations: [TracksComponent, TrackItemComponent],
  imports: [CommonModule, TracksRoutingModule, NgZorroAntdModule]
})
export class TracksModule {}
