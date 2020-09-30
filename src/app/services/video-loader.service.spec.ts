import { TestBed } from '@angular/core/testing';

import { VideoLoaderService } from './video-loader.service';

describe('VideoLoaderService', () => {
	let service: VideoLoaderService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(VideoLoaderService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
