(function() {
  'use strict';

  angular.module('app')
    .controller('StartController', StartController);

  StartController.$inject = ['$state', 'headerService', 'gameService'];
  function StartController($state, headerService, gameService) {
    var vm = this;

    // Variables
    vm.tab = 'create';
    vm.create = {};
    vm.join = {};

    // Function Declarations
    vm.isInvalid = isInvalid;
    vm.submit = submit;


    // Function Definitions
    function isInvalid() {
      return ((vm.tab === 'create' && (!vm.create.numPlayers || !vm.create.numDice)) || (vm.tab === 'join' && !vm.join.gameId));
    }

    function submit() {
      function success(response) {
        headerService.setGame(response.data);
        console.log(response.data);
        $state.go('^.game');
      }

      function error(reason) {
        console.log(reason);
      }

      if(vm.tab === 'create') {
        gameService.createGame(vm.create).then(success, error);
      } else if(vm.tab === 'join') {
        gameService.getGame(vm.join.gameId).then(success, error);
      }
    }

  }
})();
