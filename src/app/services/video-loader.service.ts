import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import { Video } from '../models';

@Injectable({
	providedIn: 'root',
})
export class VideoLoaderService {
	constructor(private http: HttpClient) {}

	loadVideos(): Observable<Video[]> {
		return this.http.get<Video[]>(environment.apiUrl + '/videos').pipe(
			tap({ next: (videos) => console.log('before map', videos) }),
			map((videos) => videos.slice(0, 2)),
			tap((videos) => console.log('after map', videos))
		);
	}
}
