export interface IYouTubePlayer {
    embedHtml: string;
}

export class YouTubePlayer {
    embedHtml: string;

    constructor(data: IYouTubePlayer) {
        this.embedHtml = data.embedHtml;
    }
}
