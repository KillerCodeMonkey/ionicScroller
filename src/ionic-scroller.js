/* global ionic */
(function () {
    'use strict';
    var app;
    // declare ionicScroller module
    app = angular.module('ionicScroller', ['ionic']);

    app.directive('ionScrollerTop', [
        '$timeout',
        '$ionicScrollDelegate',
        function ($timeout, $ionicScrollDelegate) {
            return {
                scope: {
                    'cssClass': '@?',
                    'offset': '@?',
                    'text': '@?',
                    'animate': '@?',
                    'scrollDelegate': '@?'
                },
                restrict: 'E',
                replace: true,
                template: '<button ng-show="show" ng-class="cssClass" ng-click="scrollTop()">{{text}}</button>',
                link: function ($scope) {
                    var defaults = {
                            'cssClass': 'button button-dark',
                            'offset': -1,
                            'text': 'Top'
                        },
                        showAlways,
                        delegateHandle,
                        setVisible = function() {
                            if (showAlways) {
                                $scope.show = true;
                                return;
                            }
                            $scope.show = delegateHandle.getScrollPosition().top >= $scope.offset;
                        };

                    $scope.cssClass = $scope.cssClass || defaults.cssClass;
                    $scope.animate = $scope.animate === null || $scope.animate === undefined || $scope.animate === '' || $scope.animate === 'false' ? false : true;
                    $scope.offset = $scope.offset === null || $scope.offset === undefined || $scope.offset === '' ? defaults.offset : $scope.offset;
                    $scope.text = $scope.text === null || $scope.text === undefined ? defaults.text : $scope.text;

                    if ($scope.scrollDelegate && $ionicScrollDelegate.$getByHandle($scope.scrollDelegate)) {
                        delegateHandle = $ionicScrollDelegate.$getByHandle($scope.scrollDelegate);
                    } else {
                        delegateHandle = $ionicScrollDelegate;
                    }

                    showAlways = $scope.offset === -1;

                    if (delegateHandle) {
                        setVisible();

                        if (!showAlways) {
                            ionic.EventController.on('scroll', function () {
                                $timeout(setVisible);
                            }, delegateHandle.getScrollView().__container);
                        }

                        $scope.scrollTop = function () {
                            delegateHandle.scrollTop($scope.animate);
                        };
                    }
                }
            };
        }
    ]);

    app.directive('ionScrollerBottom', [
        '$timeout',
        '$ionicScrollDelegate',
        function ($timeout, $ionicScrollDelegate) {
            return {
                scope: {
                    'cssClass': '@?',
                    'offset': '@?',
                    'text': '@?',
                    'animate': '@?',
                    'scrollDelegate': '@?'
                },
                restrict: 'E',
                replace: true,
                template: '<button ng-show="show" ng-class="cssClass" ng-click="scrollBottom()">{{text}}</button>',
                link: function ($scope) {
                    var defaults = {
                            'cssClass': 'button button-dark',
                            'offset': 40,
                            'text': 'Bottom'
                        },
                        showAlways,
                        scrollContainer,
                        delegateHandle,
                        setVisible = function() {
                            if (showAlways) {
                                $scope.show = true;
                                return;
                            }
                            $scope.show = delegateHandle.getScrollPosition().top <= $scope.offset;
                        };

                    $scope.cssClass = $scope.cssClass || defaults.cssClass;
                    $scope.animate = $scope.animate === null || $scope.animate === undefined || $scope.animate === '' || $scope.animate === 'false' ? false : true;
                    $scope.offset = $scope.offset === null || $scope.offset === undefined || $scope.offset === '' ? defaults.offset : parseInt($scope.offset, 10);
                    $scope.text = $scope.text === null || $scope.text === undefined ? defaults.text : $scope.text;

                    if ($scope.scrollDelegate && $ionicScrollDelegate.$getByHandle($scope.scrollDelegate)) {
                        delegateHandle = $ionicScrollDelegate.$getByHandle($scope.scrollDelegate);
                    } else {
                        delegateHandle = $ionicScrollDelegate;
                    }

                    showAlways = $scope.offset === -1;

                    if (delegateHandle) {
                        scrollContainer = delegateHandle.getScrollView().__container;
                        setVisible();

                        if (!showAlways) {
                            ionic.EventController.on('scroll', function () {
                                $timeout(setVisible);
                            }, scrollContainer);
                        }

                        $scope.scrollBottom = function () {
                            delegateHandle.scrollBottom($scope.animate);
                        };
                    }
                }
            };
        }
    ]);
}).call(this);
