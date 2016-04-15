import {MissingRequiredFieldError} from './error';
import {GoogleApiQuery} from './query';
import {GoogleApiResponse} from './response';
import {GoogleApiRequest} from './request';
import {MOCK_SEARCH_RESPONSE} from '../../mocks/test.mocks';

export class MockApiRequest extends GoogleApiRequest {
    execute(query: any) {
        return Promise.resolve(new GoogleApiResponse(<IHeaders>{}, MOCK_SEARCH_RESPONSE()));
    }
}

class MyCustomModel {
    constructor(data) {

    }
}

class MyCustomQuery extends GoogleApiQuery {
    requiredFields:string[] = ['part'];

    post_get_hook(response) {
        var items = [],
            body = response.body;

        body.items.forEach(function (item) {
            items.push(new MyCustomModel(item));
        });

        body.items = items;
        return body;
    }
}

export function main() {
    describe('GoogleApiQuery', function () {

        it('should validate a query', function () {
            var query = new MyCustomQuery(new MockApiRequest());

            expect(() => query.execute()).toThrow(new MissingRequiredFieldError('part'));

            query.equal('part', 'snippet');

            expect(() => query.execute()).not.toThrow(new MissingRequiredFieldError('part'));
        });

        it('should set params when using equal', function () {
            var query = new MyCustomQuery(new MockApiRequest());

            query.equal('galaxy', 42);

            expect(query.params).toEqual({'galaxy': [42]});

            query.equal('galaxy', 'life');

            expect(query.params).toEqual({'galaxy': [42, 'life']});

            query.equal('galaxy', ['hitchhiker', 'guide']);

            expect(query.params).toEqual({'galaxy': [42, 'life', 'hitchhiker', 'guide']});
        });

        it('should set isFirstPage when previousPageToken is set to null', function (done) {
            var query = new GoogleApiQuery(new MockApiRequest());

            expect(query.isFirstPage()).toBe(false);
            query.execute()
                .then(() => {
                    query.next();
                    expect(query.isFirstPage()).toBe(false);
                    done();
                });
        });

        it('should set pageToken to nextPageToken from response', function (done) {
            var query = new GoogleApiQuery(new MockApiRequest());

            query.execute()
                .then(() => {
                    query.next();
                    expect(query.params.pageToken).toBe(MOCK_SEARCH_RESPONSE().nextPageToken);
                    done();
                });
        });

        it('should set pageToken to prevPageToken from response', function (done) {
            var query = new GoogleApiQuery(new MockApiRequest());

            query.execute()
                .then(() => {
                    query.previous();
                    expect(query.params.pageToken).toBe(MOCK_SEARCH_RESPONSE().prevPageToken);
                    done();
                });
        });

        it('should pass through post_get_hook and create instances of MyCustomModel', function (done) {
            var query = new MyCustomQuery(new MockApiRequest());

            query.equal('part', 'snippet');
            query.execute()
                .then((response) => {
                    expect(response.items[0] instanceof MyCustomModel).toBe(true);
                    done();
                });
        });
    });
}
