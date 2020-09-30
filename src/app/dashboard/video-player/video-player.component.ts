import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models';

@Component({
	selector: 'wa-video-player',
	templateUrl: './video-player.component.html',
	styleUrls: ['./video-player.component.scss'],
})
export class VideoPlayerComponent implements OnInit {
	@Input() selectedVideo: Video;
	constructor() {}

	ngOnInit(): void {}
}
