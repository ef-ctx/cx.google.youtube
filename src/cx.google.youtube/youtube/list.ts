import {InvalidFieldValueError} from '../core/error';
import {GoogleApiRequest} from '../core/request';
import {YouTubeApiQuery, IYouTubeApiResponse} from './query';
import {YouTubeId} from './id';
import {YouTubeVideo} from './video';

const YOUTUBE_VIDEO_PART = [
    'contentDetails',
    'fileDetails',
    'id',
    'liveStreamingDetails',
    'localizations',
    'player',
    'processingDetails',
    'recordingDetails',
    'snippet',
    'statistics',
    'status',
    'suggestions',
    'topicDetails'
];

export class YouTubeVideoListQuery extends YouTubeApiQuery {
    baseUrl: string = 'https://www.googleapis.com/youtube/v3/videos';

    constructor(request?: GoogleApiRequest) {
        super(request);
    }

    id(ids: YouTubeId | YouTubeId[]): YouTubeVideoListQuery {
        var n:YouTubeId[] = Array.isArray(ids) ? ids : [ids];
        return this.equal('id', n.map((id) => id.id));
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

    validateQuery() {
        super.validateQuery();

        if (this.params.part) {
            this.params.part.forEach((value) => {
                if (YOUTUBE_VIDEO_PART.indexOf(value) === -1) {
                    throw new InvalidFieldValueError('part', value);
                }
            });
        }
    }
}
