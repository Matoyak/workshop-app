import { Component, Input, OnInit } from '@angular/core';
import { Video } from 'src/app/models';

@Component({
	selector: 'wa-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
	@Input() videoList: Video[];
	showAsCards: boolean = false;
	selectedVideo: Video = null;

	constructor() {}

	ngOnInit(): void {}
}
