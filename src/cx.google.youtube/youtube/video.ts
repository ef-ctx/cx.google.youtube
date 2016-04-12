import {IYouTubeId, YouTubeId} from './id';
import {YouTubeApiQuery} from './query';
import {YouTubeThumbnailTypes, IYouTubeThumbnailTypes} from './thumbnail';
import {YouTubePlayer, IYouTubePlayer} from './player';

export interface IVideoSnippetResponseObject {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishedAt: string;
    thumbnails: IYouTubeThumbnailTypes;
    title: string;
}

export interface IVideoResponseObject {
    kind: string;
    etag: string;
    id: IYouTubeId;
    player?: IYouTubePlayer;
    snippet: IVideoSnippetResponseObject;
}

export class YouTubeVideo {
    id: YouTubeId;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    player: YouTubePlayer;
    publishedAt: Date;
    thumbnails: YouTubeThumbnailTypes;
    title: string;

    constructor(data: IVideoResponseObject) {
        this.id = new YouTubeId(data.id);
        this.channelId = data.snippet.channelId;
        this.channelTitle = data.snippet.channelTitle;
        this.description = data.snippet.description;
        this.player = data.player && new YouTubePlayer(data.player) || null;
        this.publishedAt = new Date(data.snippet.publishedAt);
        this.thumbnails = new YouTubeThumbnailTypes(data.snippet.thumbnails);
        this.title = data.snippet.title;
    }
}
