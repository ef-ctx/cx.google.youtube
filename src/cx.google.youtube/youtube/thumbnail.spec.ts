import {YouTubeThumbnail, YouTubeThumbnailTypes} from './thumbnail';

export function main() {
    describe('YouTubeThumbnail', function () {
        var MOCK_THUMBNAIL = JSON.parse('{"url":"https://i.ytimg.com/vi/PL-Cf5dR6PY/default.jpg","width":120,"height":90}'),
            MOCK_THUMBNAIL2 = JSON.parse('{"url":"https://i.ytimg.com/vi/PL-Cf5dR6PY/default.jpg"}'),
            MOCK_THUMBNAIL_TYPES = JSON.parse('{"default":{"url":"https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"},"medium":{"url":"https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"},"high":{"url":"https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"}}');

        it('should create a YouTubeThumbnail instance', function () {
            var thumbnail = new YouTubeThumbnail(MOCK_THUMBNAIL);
            expect(thumbnail.url).toBe(MOCK_THUMBNAIL.url);
            expect(thumbnail.height).toBe(MOCK_THUMBNAIL.height);

            var thumbnail = new YouTubeThumbnail(MOCK_THUMBNAIL2);
            expect(thumbnail.height).toBe(undefined);
        });

        it('should create a YouTubeThumbnailTypes instance', function () {
            var thumbnail = new YouTubeThumbnailTypes(MOCK_THUMBNAIL_TYPES);
            expect(thumbnail.default.url).toBe(MOCK_THUMBNAIL_TYPES.default.url);
            expect(thumbnail.default.height).toBe(MOCK_THUMBNAIL_TYPES.default.height);
        });
    });
}
