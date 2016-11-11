(function() {
  'use strict';

  angular.module('app')
    .controller('HeaderController', HeaderController);

  HeaderController.$inject = ['$location', 'headerService'];
  function HeaderController($location, headerService) {
    var vm = this;
    vm.isPlayingGame = isPlayingGame;
    vm.isOnGamePage = isOnGamePage;
    vm.exitGame = exitGame;

    function isPlayingGame() {
      vm.game = headerService.getGame();
      return vm.game ? true : false;
    }

    function isOnGamePage() {
      return $location.url().indexOf('/game') !== -1;
    }

    function exitGame() {
      headerService.setGame(null);
      vm.game = null;
    }
  }
})();
