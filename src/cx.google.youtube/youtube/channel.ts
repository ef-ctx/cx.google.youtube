import {IYouTubeId, YouTubeId} from './id';
import {YouTubeThumbnailTypes, IYouTubeThumbnailTypes} from './thumbnail';

export interface IChannelSnippetResponseObject {
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishedAt: string;
    thumbnails: IYouTubeThumbnailTypes;
    title: string;
}

export interface IChannelResponseObject {
    kind: string;
    etag: string;
    id: IYouTubeId;
    snippet: IChannelSnippetResponseObject;
}


export class YouTubeChannel {
    id: YouTubeId;
    channelId: string;
    channelTitle: string;
    description: string;
    liveBroadcastContent: string;
    publishedAt: Date;
    thumbnails: YouTubeThumbnailTypes;
    title: string;

    constructor(data: IChannelResponseObject) {
        this.id = new YouTubeId(data.id);
        this.channelId = data.snippet.channelId;
        this.channelTitle = data.snippet.channelTitle;
        this.description = data.snippet.description;
        this.publishedAt = new Date(data.snippet.publishedAt);
        this.thumbnails = new YouTubeThumbnailTypes(data.snippet.thumbnails);
        this.title = data.snippet.title;
    }
}
