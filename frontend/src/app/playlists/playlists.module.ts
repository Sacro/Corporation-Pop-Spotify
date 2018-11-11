import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { PlaylistItemComponent } from './playlist-item/playlist-item.component';
import { PlaylistsRoutingModule } from './playlists-routing.module';
import { PlaylistsComponent } from './playlists/playlists.component';

@NgModule({
  declarations: [PlaylistsComponent, PlaylistItemComponent],
  imports: [CommonModule, PlaylistsRoutingModule, NgZorroAntdModule]
})
export class PlaylistsModule {}
