import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YoutubeApiService } from './youtube.api.service';
import { YoutubePlayerService } from './youtube.player.service';
import { YoutubeComponent } from './youtube.component';

@NgModule({
	imports: [
		CommonModule
	],
	providers: [
		YoutubeApiService,
		YoutubePlayerService
	],
	declarations: [
		YoutubeComponent
	],
	exports: [
		YoutubeComponent
	]
})
export class YoutubeModule { }
