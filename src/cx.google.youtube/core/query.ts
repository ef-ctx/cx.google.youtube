import {MissingRequiredFieldError} from './error';
import {GoogleApiRequest} from './request';
import {GoogleApiResponse} from './response';

const HTTP_METHODS = {
    'GET': 'GET'
};

const REQUEST_PARAMETERS = {
    'LIMIT': 'maxResults',
    'PAGE_TOKEN': 'pageToken'
};

export class GoogleApiQuery {
    baseUrl: string = 'https://www.googleapis.com/';
    method: string = HTTP_METHODS.GET;
    request: GoogleApiRequest;

    params: any;
    requiredFields:string[] = [];

    private nextPageToken: string;
    private previousPageToken: string;

    constructor(request?: GoogleApiRequest) {
        this.request = request;
        this.params = {};
    }

    equal(key: string, value: any) {
        if (!this.params.hasOwnProperty(key)) {
            this.params[key] = [];
        }

        this.params[key].push(value);

        return this;
    }

    set(key: string, value: any) {
        this.params[key] = value;
        return this;
    }

    isFirstPage(): boolean {
        return this.previousPageToken === null;
    }

    isLastPage(): boolean {
        return this.nextPageToken === null;
    }

    limit(n: number) {
        return this.set(REQUEST_PARAMETERS.LIMIT, n);
    }

    next() {
        return this.set(REQUEST_PARAMETERS.PAGE_TOKEN, this.nextPageToken);
    }

    previous() {
        return this.set(REQUEST_PARAMETERS.PAGE_TOKEN, this.previousPageToken);
    }

    execute() {
        this.validateQuery();

        return this.request.execute(this)
            .then((response) => {
                this.updateQueryFromResponse(response);

                return this.post_get_hook(response);
            });
    }

    post_get_hook(response: any) {
        return response;
    }

    updateQueryFromResponse(response: GoogleApiResponse) {
        if (response.body.hasOwnProperty('nextPageToken')) {
            this.nextPageToken = response.body.nextPageToken;
        } else {
            this.nextPageToken = null;
        }

        if (response.body.hasOwnProperty('prevPageToken')) {
            this.previousPageToken = response.body.prevPageToken;
        } else {
            this.previousPageToken = null;
        }
    }

    validateQuery() {
        this.requiredFields.forEach((field) => {
            if (!this.params.hasOwnProperty(field)) {
                throw new MissingRequiredFieldError(field);
            }
        });
    }

}
