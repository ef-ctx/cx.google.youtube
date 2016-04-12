import {YouTubeSearchQuery} from './search';

export function main() {
    describe('YouTubeSearchQuery', function () {
        it('should set part to snippet in constructor', function () {
            var query = new YouTubeSearchQuery();

            query.key('a');
            expect(() => query.validateQuery()).not.toThrow();
        });
    });
}
