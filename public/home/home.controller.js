(function() {
  'use strict';

  angular.module('app')
    .controller('HomeController', HomeController);

  HomeController.$inject = ['$state', 'headerService', 'gameService'];
  function HomeController($state, headerService, gameService) {
    var vm = this;

    // Variables
    vm.tab = 'create';
    vm.create = {};
    vm.join = {};

    // Function Declarations
    vm.isValid = isValid;
    vm.submit = submit;


    // Function Definitions
    function isValid() {
      return ((vm.tab === 'create' && (!vm.create.numPlayers || !vm.create.numDice)) || (vm.tab === 'join' && !vm.join.gameId));
    }

    function submit() {
      if(vm.tab === 'create') {
        function success(response) {
          headerService.setGame(response.data);
          console.log(response.data);
          $state.go('^.game');
        }

        function error(reason) {
          console.log(reason);
        }

        gameService.createGame(vm.create).then(success, error);
      }
    }

  }
})();
