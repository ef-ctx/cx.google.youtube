import {GoogleApiRequest} from '../core/request';
import {YouTubeApiQuery} from './query';

export class YouTubeSearchQuery extends YouTubeApiQuery {
    baseUrl: string = 'https://www.googleapis.com/youtube/v3/search';

    constructor(request?: GoogleApiRequest) {
        super(request);
        this.equal('part', 'snippet');
    }
}
