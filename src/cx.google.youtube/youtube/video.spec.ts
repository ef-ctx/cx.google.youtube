import {YouTubeVideo} from './video';
import {MOCK_VIDEO_REPONSE} from '../../mocks/test.mocks';

export function main() {
    describe('YouTubeVideo', function () {

        it('should create a YouTubeVideo instance', function () {
            var video = new YouTubeVideo(MOCK_VIDEO_REPONSE());

            expect(video.publishedAt.getTime()).toBe(new Date(MOCK_VIDEO_REPONSE().snippet.publishedAt).getTime());
            expect(video.thumbnails.high.url).toBe(MOCK_VIDEO_REPONSE().snippet.thumbnails.high.url);
        });
    });
}
