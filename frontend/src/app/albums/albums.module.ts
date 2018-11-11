import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { AlbumsRoutingModule } from './albums-routing.module';
import { AlbumsComponent } from './albums/albums.component';
import { AlbumItemComponent } from './album-item/album-item.component';

@NgModule({
  declarations: [AlbumsComponent, AlbumItemComponent],
  imports: [CommonModule, AlbumsRoutingModule, NgZorroAntdModule]
})
export class AlbumsModule {}
