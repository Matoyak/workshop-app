import { Component, OnInit } from '@angular/core';
import { dashboardData } from 'src/app/dashboardData';

@Component({
	selector: 'wa-video-list',
	templateUrl: './video-list.component.html',
	styleUrls: ['./video-list.component.scss'],
})
export class VideoListComponent implements OnInit {
	videos = dashboardData;
	showAsCards = false;
	selectedVideo = null;

	constructor() {}

	ngOnInit(): void {}
}
