export type YouTubeKind = 'youtube#channel' | 'youtube#video';

export interface IYouTubeId {
    kind: string;
    channelId?: string;
    videoId?: string;
}

export class YouTubeId implements IYouTubeId {
    kind: YouTubeKind;
    channelId: string;
    videoId: string;

    constructor(data: IYouTubeId) {
        this.kind = <YouTubeKind>data.kind;
        this.channelId = data.channelId;
        this.videoId = data.videoId;
    }
}
