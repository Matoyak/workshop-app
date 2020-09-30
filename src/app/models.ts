export interface Video {
	title: string;
	author: string;
	id: string;
	viewDetails: VideoViewDetails[];
}

export interface VideoViewDetails {
	age: number;
	region: string;
	date: string;
}
