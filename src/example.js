System.register(['./cx.google.youtube/index'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var index_1, index_2, index_3;
    var YouTubeExampleCtrl;
    return {
        setters:[
            function (index_1_1) {
                index_1 = index_1_1;
                index_2 = index_1_1;
                index_3 = index_1_1;
            }],
        execute: function() {
            YouTubeExampleCtrl = (function () {
                function YouTubeExampleCtrl($scope, $mdDialog) {
                    this.$scope = $scope;
                    this.$mdDialog = $mdDialog;
                    this.$scope.keywords = 'EF Education First';
                }
                YouTubeExampleCtrl.prototype.execute = function (query) {
                    var _this = this;
                    query.execute().then(function (response) {
                        _this.showResponse(response.items);
                    }, function (reason) {
                        console.error('reason', reason);
                    });
                };
                YouTubeExampleCtrl.prototype.search = function (keywords) {
                    this.query = new index_2.YouTubeSearchQuery(new index_1.GoogleApiRequest());
                    this.query.equal('q', keywords)
                        .equal('type', 'video')
                        .key('AIzaSyAC4J1cgsfkRJCmHJJAxgP3En0b3EvxYYM')
                        .limit(10);
                    this.execute(this.query);
                };
                YouTubeExampleCtrl.prototype.next = function () {
                    this.execute(this.query.next());
                };
                YouTubeExampleCtrl.prototype.previous = function () {
                    this.execute(this.query.previous());
                };
                YouTubeExampleCtrl.prototype.openVideo = function (video) {
                    var _this = this;
                    var query = new index_3.YouTubeVideoListQuery(new index_1.GoogleApiRequest());
                    query.id(video.id)
                        .key('AIzaSyAC4J1cgsfkRJCmHJJAxgP3En0b3EvxYYM');
                    query.execute().then(function (response) {
                        _this.$mdDialog.show({
                            template: '<div style="width: 640px; height: 360px;">' + response.items[0].player.embedHtml + '</div>',
                            parent: angular.element(document.body),
                            clickOutsideToClose: true
                        });
                    }, function (reason) {
                        console.error('reason', reason);
                    });
                };
                YouTubeExampleCtrl.prototype.showResponse = function (response) {
                    var _this = this;
                    this.$scope.$apply(function () {
                        _this.$scope.searchResponse = response;
                    });
                };
                YouTubeExampleCtrl.$inject = ['$scope', '$mdDialog'];
                return YouTubeExampleCtrl;
            }());
            exports_1("default",angular.module('cx.google.youtube.example', [
                'ngMaterial',
            ])
                .controller('YouTubeExampleCtrl', YouTubeExampleCtrl)
                .directive('youtubeExample', [
                function () {
                    return {
                        'restrict': 'A',
                        'controller': 'YouTubeExampleCtrl as ctrl'
                    };
                }
            ]));
        }
    }
});
