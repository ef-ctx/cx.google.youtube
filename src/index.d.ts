declare module 'cx.google.youtube/core/error' {
    export class Error {
        name: string;
        message: string;
        stack: string;
        constructor(message?: string);
    }
    export class MissingRequiredFieldError extends Error {
        message: string;
        constructor(message: string);
        toString(): string;
    }
    export class JsonBodyParseError extends Error {
        message: string;
        constructor(message: string);
        toString(): string;
    }
}

declare module 'cx.google.youtube/core/query' {
    import { GoogleApiRequest } from 'cx.google.youtube/core/request';
    import { GoogleApiResponse } from 'cx.google.youtube/core/response';

    export class GoogleApiQuery {
        baseUrl: string;
        method: string;
        request: GoogleApiRequest;
        params: any;
        requiredFields: string[];
        private nextPageToken;
        private previousPageToken;
        constructor(request?: GoogleApiRequest);
        equal(key: string, value: any): this;
        set(key: string, value: any): this;
        isFirstPage(): boolean;
        isLastPage(): boolean;
        limit(n: number): this;
        next(): this;
        previous(): this;
        execute(): Promise<any>;
        post_get_hook(response: any): any;
        updateQueryFromResponse(response: GoogleApiResponse): void;
        validateQuery(): void;
    }
}

declare module 'cx.google.youtube/core/request' {
    import { GoogleApiQuery } from 'cx.google.youtube/core/query';

    export class GoogleApiRequest {
        constructor();
        queryAsString(query: GoogleApiQuery): string;
        execute(query: GoogleApiQuery): Promise<any>;
        private handleSuccess(query, response);
    }
}

declare module 'cx.google.youtube/core/response' {
    export class GoogleApiResponse {
        headers: IHeaders;
        body: any;
        constructor(headers: IHeaders, body: any);
    }
}

declare module 'cx.google.youtube/youtube/channel' {
    import { IYouTubeId, YouTubeId } from 'cx.google.youtube/youtube/id';
    import { YouTubeThumbnailTypes, IYouTubeThumbnailTypes } from 'cx.google.youtube/youtube/thumbnail';
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
        constructor(data: IChannelResponseObject);
    }

}

declare module 'cx.google.youtube/youtube/contentDetails' {
    interface IRegionRestriction {
        allowed: string[];
        blocked: string[];
    }
    export interface IYouTubeContentDetails {
        caption?: string;
        definition?: string;
        dimension?: string;
        duration?: string;
        licensedContent?: string;
        regionRestriction?: IRegionRestriction;
    }
    export class YouTubeContentDetails {
        caption: string;
        definition: string;
        dimension: string;
        duration: string;
        licensedContent: string;
        regionRestriction: IRegionRestriction;
        constructor(data: IYouTubeContentDetails);
    }

}

declare module 'cx.google.youtube/youtube/id' {
    export type YouTubeKind = 'youtube#channel' | 'youtube#video';
    export interface IYouTubeId {
        kind: string;
        channelId?: string;
        videoId?: string;
    }
    export class YouTubeId implements IYouTubeId {
        kind: YouTubeKind;
        id: string;
        constructor(data: string | IYouTubeId);
    }

}

declare module 'cx.google.youtube/youtube/list' {
    import { GoogleApiRequest } from 'cx.google.youtube/core/request';
    import { YouTubeApiQuery, IYouTubeApiResponse } from 'cx.google.youtube/youtube/query';
    import { YouTubeId } from 'cx.google.youtube/youtube/id';
    export class YouTubeVideoListQuery extends YouTubeApiQuery {
        baseUrl: string;
        constructor(request?: GoogleApiRequest);
        id(ids: YouTubeId | YouTubeId[]): YouTubeVideoListQuery;
        post_get_hook(response: any): IYouTubeApiResponse;
    }

}

declare module 'cx.google.youtube/youtube/player' {
    export interface IYouTubePlayer {
        embedHtml: string;
    }
    export class YouTubePlayer {
        embedHtml: string;
        constructor(data: IYouTubePlayer);
    }

}

declare module 'cx.google.youtube/youtube/query' {
    import { GoogleApiQuery } from 'cx.google.youtube/core/query';
    export interface IYouTubeApiResponsePageInfo {
        resultsPerPage: number;
        totalResults: number;
    }
    export interface IYouTubeApiResponse {
        etag: string;
        items: any[];
        kind: string;
        nextPageToken: string;
        pageInfo: IYouTubeApiResponsePageInfo;
        regionCode: string;
    }
    export class YouTubeApiQuery extends GoogleApiQuery {
        requiredFields: string[];
        access_token(value: string): this;
        key(value: string): this;
        post_get_hook(response: any): IYouTubeApiResponse;
        validateQuery(): void;
    }
}

declare module 'cx.google.youtube/youtube/search' {
    import { GoogleApiRequest } from 'cx.google.youtube/core/request';
    import { YouTubeApiQuery } from 'cx.google.youtube/youtube/query';
    export class YouTubeSearchQuery extends YouTubeApiQuery {
        baseUrl: string;
        constructor(request?: GoogleApiRequest);
    }
}

declare module 'cx.google.youtube/youtube/thumbnail' {
    export interface IYouTubeThumbnail {
        height?: number;
        url: string;
        width?: number;
    }
    export interface IYouTubeThumbnailTypes {
        default: IYouTubeThumbnail;
        high?: IYouTubeThumbnail;
        medium?: IYouTubeThumbnail;
    }
    export class YouTubeThumbnail {
        height: number;
        url: string;
        width: number;
        constructor(data: IYouTubeThumbnail);
    }
    export class YouTubeThumbnailTypes {
        default: YouTubeThumbnail;
        high: YouTubeThumbnail;
        medium: YouTubeThumbnail;
        constructor(data: IYouTubeThumbnailTypes);
    }
}

declare module 'cx.google.youtube/youtube/video' {
    import { IYouTubeId, YouTubeId } from 'cx.google.youtube/youtube/id';
    import { YouTubeThumbnailTypes, IYouTubeThumbnailTypes } from 'cx.google.youtube/youtube/thumbnail';
    import { YouTubePlayer, IYouTubePlayer } from 'cx.google.youtube/youtube/player';
    import {YouTubeContentDetails, IYouTubeContentDetails} from 'cx.google.youtube/youtube/contentDetails';
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
        contentDetails?: IYouTubeContentDetails;
        player?: IYouTubePlayer;
        snippet?: IVideoSnippetResponseObject;
    }
    export class YouTubeVideo {
        id: YouTubeId;
        channelId: string;
        channelTitle: string;
        contentDetails: YouTubeContentDetails;
        description: string;
        liveBroadcastContent: string;
        player: YouTubePlayer;
        publishedAt: Date;
        thumbnails: YouTubeThumbnailTypes;
        title: string;
        constructor(data: IVideoResponseObject);
    }

}

declare module 'cx.google.youtube' {
    export { MissingRequiredFieldError, JsonBodyParseError } from 'cx.google.youtube/core/error';
    export * from 'cx.google.youtube/core/query';
    export * from 'cx.google.youtube/core/request';
    export * from 'cx.google.youtube/core/response';
    export * from 'cx.google.youtube/youtube/channel';
    export * from 'cx.google.youtube/youtube/id';
    export * from 'cx.google.youtube/youtube/list';
    export * from 'cx.google.youtube/youtube/player';
    export * from 'cx.google.youtube/youtube/query';
    export * from 'cx.google.youtube/youtube/search';
    export * from 'cx.google.youtube/youtube/thumbnail';
    export * from 'cx.google.youtube/youtube/video';
}
