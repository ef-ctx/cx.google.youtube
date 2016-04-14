import {JsonBodyParseError} from './error';
import {GoogleApiRequest} from './request';
import {GoogleApiQuery} from './query';
import {GoogleApiResponse} from './response';
import {MockFetch, MOCK_SEARCH_RESPONSE} from '../../mocks/test.mocks';

export function main() {
    describe('GoogleApiRequest', function () {
        beforeEach(function () {
            window['fetch'] = MockFetch;
        });

        it('should take a GoogleApiQuery and call fetch', function () {
            spyOn(window, 'fetch').and.callFake(function () {
                return Promise.resolve();
            });

            var query = new GoogleApiQuery(new GoogleApiRequest());

            query.execute();
            expect(window['fetch']).toHaveBeenCalledWith(query.baseUrl);
        });

        it('should set a limit to GoogleApiQuery and call fetch with maxResults', function () {
            spyOn(window, 'fetch').and.callFake(function () {
                return Promise.resolve();
            });

            var query = new GoogleApiQuery(new GoogleApiRequest());
            query.limit(42);
            query.execute();

            expect(window['fetch']).toHaveBeenCalledWith(query.baseUrl + '?maxResults=42');
        });

        it('should set a param to a value of a GoogleApiQuery and call fetch with that param', function () {
            spyOn(window, 'fetch').and.callFake(function () {
                return Promise.resolve();
            });

            var query = new GoogleApiQuery(new GoogleApiRequest());
            query.equal('hello', 'earth');
            query.execute();

            expect(window['fetch']).toHaveBeenCalledWith(query.baseUrl + '?hello=earth');
        });

        it('should return a instance of GoogleApiResponse', function (done) {
            spyOn(window, 'fetch').and.callFake(function () {
                return Promise.resolve({
                    'json': () => Promise.resolve(MOCK_SEARCH_RESPONSE())
                });
            });

            var query = new GoogleApiQuery(new GoogleApiRequest());

            query.execute()
                .then((response) => {
                    expect(response instanceof GoogleApiResponse).toBe(true);
                    done();
                });
        });

        it('should throw JsonBodyParseError if body failed to parse', function (done) {
            spyOn(window, 'fetch').and.callFake(function () {
                return Promise.resolve({
                    'json': () => Promise.reject('Cant parse JSON body')
                });
            });

            var query = new GoogleApiQuery(new GoogleApiRequest());

            query.execute()
                .catch((reason) => {
                    expect(reason instanceof JsonBodyParseError).toBe(true);
                    done();
                });
        });
    });
}
