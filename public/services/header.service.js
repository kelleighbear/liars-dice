(function() {
  'use strict';

    angular.module('app')
        .service('headerService', headerService);

    headerService.$inject = ['$http'];
    function headerService($http) {

      var game = null;

      var exports = {
        getGame: getGame,
        setGame: setGame
      };

      function getGame() {
        return game;
      }

      function setGame(u) {
        game = u;
      }


      return exports;
    }
})();
