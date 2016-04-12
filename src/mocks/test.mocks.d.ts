/// <reference path="../../typings/browser.d.ts" />
export declare class MockFetch {
}
export declare var MOCK_VIDEO_REPONSE: () => {
    "kind": string;
    "etag": string;
    "id": {
        "kind": string;
        "channelId": string;
    };
    "snippet": {
        "publishedAt": string;
        "channelId": string;
        "title": string;
        "description": string;
        "thumbnails": {
            "default": {
                "url": string;
            };
            "medium": {
                "url": string;
            };
            "high": {
                "url": string;
            };
        };
        "channelTitle": string;
        "liveBroadcastContent": string;
    };
};
export declare var MOCK_SEARCH_RESPONSE: () => {
    "kind": string;
    "etag": string;
    "nextPageToken": string;
    "prevPageToken": string;
    "regionCode": string;
    "pageInfo": {
        "totalResults": number;
        "resultsPerPage": number;
    };
    "items": ({
        "kind": string;
        "etag": string;
        "id": {
            "kind": string;
            "channelId": string;
        };
        "snippet": {
            "publishedAt": string;
            "channelId": string;
            "title": string;
            "description": string;
            "thumbnails": {
                "default": {
                    "url": string;
                };
                "medium": {
                    "url": string;
                };
                "high": {
                    "url": string;
                };
            };
            "channelTitle": string;
            "liveBroadcastContent": string;
        };
    } | {
        "kind": string;
        "etag": string;
        "id": {
            "kind": string;
            "videoId": string;
        };
        "snippet": {
            "publishedAt": string;
            "channelId": string;
            "title": string;
            "description": string;
            "thumbnails": {
                "default": {
                    "url": string;
                    "width": number;
                    "height": number;
                };
                "medium": {
                    "url": string;
                    "width": number;
                    "height": number;
                };
                "high": {
                    "url": string;
                    "width": number;
                    "height": number;
                };
            };
            "channelTitle": string;
            "liveBroadcastContent": string;
        };
    })[];
};
