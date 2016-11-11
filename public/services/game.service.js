(function() {
  'use strict';

    angular.module('app')
        .service('gameService', gameService);

    gameService.$inject = ['$http', 'headerService'];
    function gameService($http, headerService) {

      var exports = {
        createGame: createGame,
        getGame: getGame,
        makeClaim: makeClaim,
        makeChallenge: makeChallenge
      };

      function createGame(game) {
        return $http.post('/games', game);
      }

      function getGame(id) {
        return $http.get('/games/' + id);
      }

      function makeClaim(claim) {
        return $http.post('/games/' + headerService.getGame()._id + '/claim', claim);
      }

      function makeChallenge(challenge) {
        return $http.post('/games/' + headerService.getGame()._id + '/challenge', challenge);
      }


      return exports;
    }
})();
