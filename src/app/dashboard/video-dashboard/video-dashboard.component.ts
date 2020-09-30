import { Component, OnInit } from '@angular/core';

import { dashboardData } from 'src/app/dashboardData';
import { Video } from 'src/app/models';
import { VideoLoaderService } from 'src/app/services/video-loader.service';

@Component({
	selector: 'wa-video-dashboard',
	templateUrl: './video-dashboard.component.html',
	styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
	dashboardVideos: Video[] = dashboardData;
	selectedVideo: Video | undefined;

	constructor(svc: VideoLoaderService) {
		svc
			.loadVideos()
			.subscribe((videos: Video[]) => (this.dashboardVideos = videos));
	}

	ngOnInit(): void {}

	setVideo(video: Video): void {
		this.selectedVideo = video;
	}
}
