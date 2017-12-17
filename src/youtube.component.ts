import { Component, OnInit, Input, AfterContentInit, Renderer2, Output, EventEmitter } from '@angular/core';

import { YoutubeApiService } from './youtube.api.service';
import { YoutubePlayerService } from './youtube.player.service';

@Component({
	selector: 'youtube-component',
	template: '<div id="playerElement"></div>'
})
export class YoutubeComponent implements AfterContentInit {

	@Input() videoId: string;

	@Output() ready = new EventEmitter<YT.Player>();
	@Output() change = new EventEmitter<YT.PlayerEvent>();

	ytPlayer: YT.Player;
	changeEvent: YT.PlayerEvent;

	constructor(
		public youtubeApi: YoutubeApiService,
		public youtubePlayer: YoutubePlayerService,
		private renderer: Renderer2
	) {
		this.youtubeApi.loadApi();
	}

	ngAfterContentInit() {
		const elementId = 'playerId',
		elementContainer = this.renderer.selectRootElement('#playerElement')
		this.renderer.setAttribute(elementContainer, 'id', elementId);
	
		const config = {
			elementId: elementId,
			width: 300,
			height: 200,
			videoId: '',
			outputs: {
				ready: this.onReady.bind(this),
				change: this.onChange.bind(this)
			}
		}
	
		this.youtubePlayer.initialise(config);
	}

	onReady(player: YT.Player): void {
		this.ytPlayer = player;
		
		this.ytPlayer.loadVideoById(this.videoId);

		this.ready.emit(this.ytPlayer);
	}

	onChange(event: YT.PlayerEvent): void {
		this.change.emit(event);
	}
}
