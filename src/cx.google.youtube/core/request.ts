import {MissingRequiredFieldError, JsonBodyParseError} from './error';
import {GoogleApiQuery} from './query';
import {GoogleApiResponse} from './response';

export class GoogleApiRequest {
    constructor() {
    }

    queryAsString(query: GoogleApiQuery): string {
        var flatQuery = Object.keys(query.params).map((a) => {
                var param = query.params[a],
                    values;

                if (Array.isArray(param)) {
                    values = param.join(',');
                } else if (param !== undefined && param !== null) {
                    values = param;
                }

                return values ? a + '=' + values : '';
            }),
            queryStr = flatQuery.join('&');

        return query.baseUrl + (queryStr ? ('?' + queryStr) : '');
    }

    execute(query: GoogleApiQuery):Promise<any> {
        return fetch(this.queryAsString(query))
            .then((response) => this.handleSuccess(query, response));
    }

    private handleSuccess(query: GoogleApiQuery, response: IResponse) {
        return response.json()
            .then((body) => {
                return new GoogleApiResponse(response.headers, body);
            })
            .catch((reason) => {
                throw new JsonBodyParseError(reason);
            });
    }
}
