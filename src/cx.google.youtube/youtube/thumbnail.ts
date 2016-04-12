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

    constructor(data: IYouTubeThumbnail) {
        this.height = data.height;
        this.url = data.url;
        this.width = data.width;
    }
}

export class YouTubeThumbnailTypes {
    default: YouTubeThumbnail;
    high: YouTubeThumbnail;
    medium: YouTubeThumbnail;

    constructor(data: IYouTubeThumbnailTypes) {
        this.default = new YouTubeThumbnail(data.default);
        this.high = new YouTubeThumbnail(data.high);
        this.medium = new YouTubeThumbnail(data.medium);
    }
}
