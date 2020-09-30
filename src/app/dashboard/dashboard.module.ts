import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VideoDashboardComponent } from './video-dashboard/video-dashboard.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoPlayerComponent } from './video-player/video-player.component';
import { StatFiltersComponent } from './stat-filters/stat-filters.component';
import { RouterModule } from '@angular/router';
import { VideoDetailsComponent } from './video-details/video-details.component';
import { VideoCardComponent } from './video-card/video-card.component';
import { HttpClientModule } from '@angular/common/http';

const dashboardRoutes = [
	{ path: '', pathMatch: 'full', redirectTo: 'videoDashboard' },
	{ path: 'videoDashboard', component: VideoDashboardComponent },
];

@NgModule({
	declarations: [
		VideoDashboardComponent,
		VideoListComponent,
		VideoPlayerComponent,
		StatFiltersComponent,
		VideoDetailsComponent,
		VideoCardComponent,
	],
	imports: [
		CommonModule,
		HttpClientModule,
		RouterModule.forChild(dashboardRoutes),
	],
})
export class DashboardModule {}
