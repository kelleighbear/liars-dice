(function() {
  'use strict';

  angular.module('app')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['headerService'];
  function HeaderController(headerService) {
    var vm = this;
    vm.isPlayingGame = isPlayingGame;
    vm.exitGame = exitGame;

    function isPlayingGame() {
      vm.game = headerService.getGame();
      return vm.game ? true : false;
    }

    function exitGame() {
      headerService.setGame(null);
      vm.game = null;
    }
  }
})();
