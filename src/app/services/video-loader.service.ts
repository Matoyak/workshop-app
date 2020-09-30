import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment';
import { Video } from '../models';

@Injectable({
	providedIn: 'root',
})
export class VideoLoaderService {
	constructor(private http: HttpClient) {}

	loadVideos(): Observable<Video[]> {
		return this.http.get<Video[]>(environment.apiUrl + '/videos');
	}
}
