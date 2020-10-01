import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Video } from 'src/app/models';
import { VideoLoaderService } from 'src/app/services/video-loader.service';

@Component({
	selector: 'wa-video-dashboard',
	templateUrl: './video-dashboard.component.html',
	styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
	dashboardVideos: Observable<Video[]>;
	filteredVideos = new Subject<Video[]>();
	selectedVideo: Video | undefined;

	constructor(svc: VideoLoaderService) {
		this.dashboardVideos = svc.loadVideos();
		// .subscribe((videos: Video[]) => (this.dashboardVideos = videos));
	}

	ngOnInit(): void {}

	setVideo(video: Video): void {
		this.selectedVideo = video;
	}

	handleFilter(name: string): void {
		this.filteredVideos = this.dashboardVideos.pipe(
			tap((videos) => console.log('BeforeMap', videos)),
			map((videos) =>
				videos.filter((video) =>
					video?.title
						?.trim()
						?.toLowerCase()
						?.includes(name?.trim()?.toLowerCase())
				)
			),
			tap((videos) => console.log('AfterMap', videos))
		);
	}
}
