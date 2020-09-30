import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Video } from 'src/app/models';

@Component({
	selector: 'wa-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
	@Input() videoList: Video[];
	@Output() selectVideo = new EventEmitter<Video>();

	showAsCards: boolean = false;
	selectedVideo: Video = null;

	constructor() {}

	ngOnInit(): void {}

	pickVideo(video: Video): void {
		this.selectVideo.emit(video);
	}
}
