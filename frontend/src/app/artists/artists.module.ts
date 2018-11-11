import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';

import { ArtistItemComponent } from './artist-item/artist-item.component';
import { ArtistsRoutingModule } from './artists-routing.module';
import { ArtistsComponent } from './artists/artists.component';

@NgModule({
  declarations: [ArtistsComponent, ArtistItemComponent],
  imports: [CommonModule, ArtistsRoutingModule, NgZorroAntdModule]
})
export class ArtistsModule {}
