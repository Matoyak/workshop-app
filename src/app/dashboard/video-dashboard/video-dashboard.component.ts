import { Component, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { Video } from 'src/app/models';
import { VideoLoaderService } from 'src/app/services/video-loader.service';

@Component({
	selector: 'wa-video-dashboard',
	templateUrl: './video-dashboard.component.html',
	styleUrls: ['./video-dashboard.component.scss'],
})
export class VideoDashboardComponent implements OnInit {
	dashboardVideos: Observable<Video[]> = this.videoLoaderSvc.loadVideos();
	filter = new Subject<string>();
	selectedVideo: Video | undefined;
	filteredVideos = combineLatest([this.filter, this.dashboardVideos]).pipe(
		tap((videos) => console.log('BeforeMap', videos)),
		map(([filterTerm, videos]) =>
			videos.filter((video) => {
				const searchTerm = filterTerm?.toLowerCase() || '';
				const title = video?.title?.toLowerCase() || '';
				return title?.includes(searchTerm);
			})
		),
		tap((videos) => console.log('AfterMap', videos))
	);

	constructor(private videoLoaderSvc: VideoLoaderService) {
		// this.dashboardVideos = svc.loadVideos();
		// .subscribe((videos: Video[]) => (this.dashboardVideos = videos));
	}

	ngOnInit(): void {}

	setVideo(video: Video): void {
		this.selectedVideo = video;
	}

	handleFilter(name: string): void {
		this.filter.next(name);
		// this.filteredVideos = this.dashboardVideos.pipe(
		// 	tap((videos) => console.log('BeforeMap', videos)),
		// 	map((videos) =>
		// 		videos.filter((video) =>
		// 			video?.title
		// 				?.trim()
		// 				?.toLowerCase()
		// 				?.includes(name?.trim()?.toLowerCase())
		// 		)
		// 	),
		// 	tap((videos) => console.log('AfterMap', videos))
		// );
	}
}
