import {MissingRequiredFieldError} from '../core/error';
import {GoogleApiRequest} from '../core/request';
import {GoogleApiResponse} from '../core/response';
import {YouTubeApiQuery} from './query';
import {YouTubeChannel} from './channel';
import {YouTubeVideo} from './video';
import {MOCK_SEARCH_RESPONSE} from '../../mocks/test.mocks';

export class MockApiRequest extends GoogleApiRequest {
    execute(query: any) {
        return Promise.resolve(new GoogleApiResponse(<IHeaders>{}, MOCK_SEARCH_RESPONSE()));
    }
}

export function main() {
    describe('YouTubeApiQuery', function () {
        it('should validate YouTubeApiQuery', function () {
            var query = new YouTubeApiQuery();
            query.equal('part', 'snippet');

            expect(() => query.validateQuery()).toThrow(new MissingRequiredFieldError('key'));

            query.key('12345');

            expect(() => query.validateQuery()).not.toThrow(new MissingRequiredFieldError('key'));

            query = new YouTubeApiQuery();
            query.equal('part', 'snippet');

            query.access_token('12345');

            expect(() => query.validateQuery()).not.toThrow(new MissingRequiredFieldError('access_token'));
        });

        it('should transform response in post_get_hook', function (done) {
            var query = new YouTubeApiQuery(new MockApiRequest());

            query.key('aa');
            query.equal('part', 'snippet');

            query.execute().then(function (response) {
                expect(response.items[0] instanceof YouTubeChannel).toBe(true);
                expect(response.items[1] instanceof YouTubeVideo).toBe(true);
                done();
            });
        });
    });
}
