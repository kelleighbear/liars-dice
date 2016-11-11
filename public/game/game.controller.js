(function() {
  'use strict';

  angular.module('app')
    .controller('GameController', GameController);

  GameController.$inject = ['headerService', 'gameService'];
  function GameController(headerService, gameService) {
    var vm = this;
    vm.game = headerService.getGame();

  }
})();
