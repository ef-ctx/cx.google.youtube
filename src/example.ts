import {GoogleApiRequest} from './cx.google.youtube/index';
import {YouTubeSearchQuery} from './cx.google.youtube/index';
import {YouTubeVideo} from './cx.google.youtube/index';
import {YouTubeVideoListQuery} from './cx.google.youtube/index';

declare var angular: any;

class YouTubeExampleCtrl {
    $scope: any;
    $mdDialog: any;

    searchResponse: any[];
    query: YouTubeSearchQuery;

    static $inject: string[] = ['$scope', '$mdDialog'];
    constructor($scope, $mdDialog) {
        this.$scope = $scope;
        this.$mdDialog = $mdDialog;
        this.$scope.keywords = 'EF Education First';
    }

    execute(query: YouTubeSearchQuery) {
        query.execute().then((response) => {
            this.showResponse(response.items);
        }, (reason) => {
            console.error('reason', reason);
        });
    }

    search(keywords: string) {
        this.query = new YouTubeSearchQuery(new GoogleApiRequest());

        this.query.equal('q', keywords)
            .equal('type', 'video')
            .key('AIzaSyAC4J1cgsfkRJCmHJJAxgP3En0b3EvxYYM')
            .limit(10);

        this.execute(this.query);
    }

    next() {
        this.execute(this.query.next());
    }

    previous() {
        this.execute(this.query.previous());
    }

    openVideo(video: YouTubeVideo) {
        var query = new YouTubeVideoListQuery(new GoogleApiRequest());

        query.id(video.id)
            .equal('part', 'snippet')
            .equal('part', 'player')
            .key('AIzaSyAC4J1cgsfkRJCmHJJAxgP3En0b3EvxYYM');

        query.execute().then((response) => {
            this.$mdDialog.show({
              template: '<div style="width: 640px; height: 360px;">' + response.items[0].player.embedHtml  + '</div>',
              parent: angular.element(document.body),
              clickOutsideToClose:true
            });
        }, (reason) => {
            console.error('reason', reason);
        });
    }

    showResponse(response: any[]) {
        this.$scope.$apply(() => {
            this.$scope.searchResponse = response;
        });
    }
}

export default angular.module('cx.google.youtube.example', [
    'ngMaterial',
])
.controller('YouTubeExampleCtrl', YouTubeExampleCtrl)
.directive('youtubeExample', [
    function() {
        return {
            'restrict': 'A',
            'controller': 'YouTubeExampleCtrl as ctrl'
        };
    }
]);
