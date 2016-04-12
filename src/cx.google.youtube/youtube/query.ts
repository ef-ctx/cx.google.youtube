import {MissingRequiredFieldError} from '../core/error';
import {GoogleApiQuery} from '../core/query';

import {YouTubeChannel} from './channel';
import {YouTubeVideo} from './video';

const YouTubeReponseType = {
    'CHANNEL': 'youtube#channel',
    'VIDEO': 'youtube#video'
}

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
    requiredFields:string[] = ['part'];

    access_token(value: string) {
        return this.equal('access_token', value);
    }

    key(value: string) {
        return this.equal('key', value);
    }

    post_get_hook(response: any): IYouTubeApiResponse {
        var items = [],
            body = response.body;

        body.items.forEach(function (item) {
            if (item.id && item.id.kind === YouTubeReponseType.VIDEO) {
                items.push(new YouTubeVideo(item));
            } else if (item.id && item.id.kind === YouTubeReponseType.CHANNEL) {
                items.push(new YouTubeChannel(item));
            } else {
                items.push(item);
            }
        });

        body.items = items;
        return body;
    }

    validateQuery() {
        super.validateQuery();

        if (!this.params.hasOwnProperty('key') && !this.params.hasOwnProperty('access_token')) {
            throw new MissingRequiredFieldError((!this.params.hasOwnProperty('key') ? 'key' : 'access_token'));
        }
    }
}
