export class GoogleApiResponse {
    headers: IHeaders;
    body: any;

    constructor(headers: IHeaders, body: any) {
        this.headers = headers;
        this.body = body || {};
    }
}
