import { Component, Input, OnInit } from '@angular/core';

import { Video, VideoViewDetails } from 'src/app/models';

@Component({
	selector: 'wa-video-details',
	templateUrl: './video-details.component.html',
	styleUrls: ['./video-details.component.scss'],
})
export class VideoDetailsComponent implements OnInit {
	@Input() video: Video | undefined;
	constructor() {}

	ngOnInit(): void {}
}
