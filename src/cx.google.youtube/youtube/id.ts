export type YouTubeKind = 'youtube#channel' | 'youtube#video';

export interface IYouTubeId {
    kind?: string;
    channelId?: string;
    videoId?: string;
}

export class YouTubeId implements IYouTubeId {
    kind: YouTubeKind;
    id: string;

    constructor(data: string | IYouTubeId) {
        var idData = typeof data === 'string' ? <IYouTubeId>{'kind': 'youtube#video', 'videoId': data} : data;
        this.kind = <YouTubeKind>idData.kind;
        this.id = this.kind === 'youtube#channel' ? idData.channelId : idData.videoId;
    }
}
