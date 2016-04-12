/// <reference path='../../typings/browser.d.ts' />
System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var MockFetch, MOCK_VIDEO_REPONSE, MOCK_SEARCH_RESPONSE;
    return {
        setters:[],
        execute: function() {
            MockFetch = (function () {
                function MockFetch() {
                }
                return MockFetch;
            }());
            exports_1("MockFetch", MockFetch);
            exports_1("MOCK_VIDEO_REPONSE", MOCK_VIDEO_REPONSE = function () {
                return {
                    "kind": "youtube#searchResult",
                    "etag": "\"q5k97EMVGxODeKcDgp8gnMu79wM/cQnA2LE_H_Ome9_pJs6YeBTuqrA\"",
                    "id": {
                        "kind": "youtube#channel",
                        "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ"
                    },
                    "snippet": {
                        "publishedAt": "2014-03-18T17:41:39.000Z",
                        "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ",
                        "title": "LastWeekTonight",
                        "description": "Breaking news on a weekly basis. Sundays at 11PM - only on HBO. Subscribe to the Last Week Tonight channel for the latest videos from John Oliver and the ...",
                        "thumbnails": {
                            "default": {
                                "url": "https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"
                            },
                            "medium": {
                                "url": "https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"
                            },
                            "high": {
                                "url": "https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"
                            }
                        },
                        "channelTitle": "LastWeekTonight",
                        "liveBroadcastContent": "none"
                    }
                };
            });
            exports_1("MOCK_SEARCH_RESPONSE", MOCK_SEARCH_RESPONSE = function () {
                return {
                    "kind": "youtube#searchListResponse",
                    "etag": "q5k97EMVGxODeKcDgp8gnMu79wM/e_sHuVCjBBAg-pC60YCYXXV2A9k",
                    "nextPageToken": "CAUQAA",
                    "prevPageToken": "UQAA21",
                    "regionCode": "SE",
                    "pageInfo": {
                        "totalResults": 1000000,
                        "resultsPerPage": 5
                    },
                    "items": [
                        {
                            "kind": "youtube#searchResult",
                            "etag": "q5k97EMVGxODeKcDgp8gnMu79wM/cQnA2LE_H_Ome9_pJs6YeBTuqrA",
                            "id": {
                                "kind": "youtube#channel",
                                "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ"
                            },
                            "snippet": {
                                "publishedAt": "2014-03-18T17:41:39.000Z",
                                "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ",
                                "title": "LastWeekTonight",
                                "description": "Breaking news on a weekly basis. Sundays at 11PM - only on HBO. Subscribe to the Last Week Tonight channel for the latest videos from John Oliver and the ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"
                                    },
                                    "medium": {
                                        "url": "https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"
                                    },
                                    "high": {
                                        "url": "https://yt3.ggpht.com/-lc3LinEhpgA/AAAAAAAAAAI/AAAAAAAAAAA/A6-FbtNyNgU/s512-c-k-no-rj-c0xffffff/photo.jpg"
                                    }
                                },
                                "channelTitle": "LastWeekTonight",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "q5k97EMVGxODeKcDgp8gnMu79wM/3EQ2q5gdTA17K9wiereNEkhN0QU",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "Ylomy1Aw9Hk"
                            },
                            "snippet": {
                                "publishedAt": "2016-04-04T06:30:00.000Z",
                                "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ",
                                "title": "Last Week Tonight with John Oliver: Congressional Fundraising (HBO)",
                                "description": "Lawmakers have to raise money to keep their jobs, but a surprising amount of their job now consists of raising money. John Oliver sits down with Congressman ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/Ylomy1Aw9Hk/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/Ylomy1Aw9Hk/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/Ylomy1Aw9Hk/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "LastWeekTonight",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "q5k97EMVGxODeKcDgp8gnMu79wM/CVl6X0r6P8XvSchzLsW2vsjvTIM",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "vU8dCYocuyI"
                            },
                            "snippet": {
                                "publishedAt": "2016-03-21T06:30:00.000Z",
                                "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ",
                                "title": "Last Week Tonight with John Oliver: Border Wall (HBO)",
                                "description": "Donald Drumpf wants to build a wall on the U.S-Mexico border. Is his plan feasible? Connect with Last Week Tonight online... Subscribe to the Last Week ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/vU8dCYocuyI/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/vU8dCYocuyI/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/vU8dCYocuyI/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "LastWeekTonight",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "q5k97EMVGxODeKcDgp8gnMu79wM/VSjkFlWJmtH8Ak0I3bw8jKaQgrU",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "DnpO_RTSNmQ"
                            },
                            "snippet": {
                                "publishedAt": "2016-02-29T07:30:30.000Z",
                                "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ",
                                "title": "Last Week Tonight with John Oliver: Donald Trump (HBO)",
                                "description": "Our main story was about Donald Trump. We cant believe were saying that either. Connect with Last Week Tonight online... Subscribe to the Last Week Tonight ...",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/DnpO_RTSNmQ/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/DnpO_RTSNmQ/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/DnpO_RTSNmQ/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "LastWeekTonight",
                                "liveBroadcastContent": "none"
                            }
                        },
                        {
                            "kind": "youtube#searchResult",
                            "etag": "q5k97EMVGxODeKcDgp8gnMu79wM/xm43SIItnYN4YabLZWV5ukyx9zI",
                            "id": {
                                "kind": "youtube#video",
                                "videoId": "zsjZ2r9Ygzw"
                            },
                            "snippet": {
                                "publishedAt": "2016-03-14T06:30:00.000Z",
                                "channelId": "UC3XTzVzaHQEd30rQbuvCtTQ",
                                "title": "Last Week Tonight with John Oliver: Encryption (HBO)",
                                "description": "Strong encryption poses problems for law enforcement, is weakening it worth the risks it presents? Its…complicated. Connect with Last Week Tonight online.",
                                "thumbnails": {
                                    "default": {
                                        "url": "https://i.ytimg.com/vi/zsjZ2r9Ygzw/default.jpg",
                                        "width": 120,
                                        "height": 90
                                    },
                                    "medium": {
                                        "url": "https://i.ytimg.com/vi/zsjZ2r9Ygzw/mqdefault.jpg",
                                        "width": 320,
                                        "height": 180
                                    },
                                    "high": {
                                        "url": "https://i.ytimg.com/vi/zsjZ2r9Ygzw/hqdefault.jpg",
                                        "width": 480,
                                        "height": 360
                                    }
                                },
                                "channelTitle": "LastWeekTonight",
                                "liveBroadcastContent": "none"
                            }
                        }
                    ]
                };
            });
        }
    }
});
