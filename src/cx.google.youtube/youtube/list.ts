import {GoogleApiRequest} from '../core/request';
import {YouTubeApiQuery, IYouTubeApiResponse} from './query';
import {YouTubeId} from './id';
import {YouTubeVideo} from './video';

export class YouTubeVideoListQuery extends YouTubeApiQuery {
    baseUrl: string = 'https://www.googleapis.com/youtube/v3/videos';

    constructor(request?: GoogleApiRequest) {
        super(request);
        this.equal('part', 'snippet');
        this.equal('part', 'player');
    }

    id(id: YouTubeId): YouTubeVideoListQuery {
        return this.equal('id', id.videoId);
    }

    post_get_hook(response: any): IYouTubeApiResponse {
        var items = [],
            body = response.body;

        body.items.forEach(function (item) {
            items.push(new YouTubeVideo(item));
        });

        body.items = items;
        return body;
    }
}
