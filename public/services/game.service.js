(function() {
  'use strict';

    angular.module('app')
        .service('gameService', gameService);

    gameService.$inject = ['$http'];
    function gameService($http) {

      var exports = {
        createGame: createGame,
        getGame: getGame
      };

      function createGame(game) {
        return $http.post('/games', game);
      }

      function getGame(u) {
        game = u;
      }


      return exports;
    }
})();
