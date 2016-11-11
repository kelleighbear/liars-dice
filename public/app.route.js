(function() {
    'use strict';

    angular.module('app')
        .config(config);

    config.$inject = ['$stateProvider', '$urlRouterProvider'];

    function config($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise('/home');

        $stateProvider
            .state('root', {
                url: '/',
                abstract: true,
                views: {
                    'main': {
                        templateUrl: 'layout/shell.html'
                    },
                    'header@root': {
                        templateUrl: 'layout/header.html',
                        controller: 'HeaderController',
                        controllerAs: 'header'
                    }
                }
            })
            .state('root.home', {
                url: 'home',
                views: {
                    'tab-content@root': {
                        templateUrl: 'home/home.html',
                        controller: 'HomeController',
                        controllerAs: 'home'
                    }
                }
            })
            .state('root.game', {
                  url: 'game',
                  views: {
                      'tab-content@root': {
                          templateUrl: 'game/game.html',
                          controller: 'GameController',
                          controllerAs: 'game'
                      }
                  }
              })
              .state('root.about', {
                  url: 'about',
                  views: {
                      'tab-content@root': {
                          templateUrl: 'about/about.html'
                      }
                  }
              });
    }
})();
