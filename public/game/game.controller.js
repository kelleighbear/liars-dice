(function() {
  'use strict';

  angular.module('app')
      .controller('GameController', GameController);

  GameController.$inject = ['$state', 'headerService', 'gameService'];

  function GameController($state, headerService, gameService) {
      var vm = this;

      // Variables
      vm.game = null;
      vm.currentPlayer = 0;
      vm.claim = {};
      vm.maxNumToMove = 0;
      vm.lastClaimNumber = 0;
      vm.actions = [];
      vm.totalNumDice = 0;
      vm.showAll = false;
      vm.challengeResults = null;
      vm.colors = [
        'red-player',
        'green-player',
        'blue-player',
        'purple-player',
        'orange-player'
      ]

      // Function Declarations
      vm.makeChallenge = makeChallenge;
      vm.makeClaim = makeClaim;
      vm.calcMaxNumToMove = calcMaxNumToMove;
      vm.isInvalidClaim = isInvalidClaim;

      // Initialization Logic
      activate();

      // Function Definitions
      function activate() {
          vm.game = headerService.getGame();
          if (!vm.game) {
              $state.go('^.start');
          } else {
            formatActionsAndGetNumDice();
          }
      }

      function makeChallenge() {
          function success(response) {
              vm.challengeResults = !response.data;
              gameService.getGame(vm.game._id)
              .then(function(response) {
                vm.game = response.data;
                headerService.setGame(vm.game);
                formatActionsAndGetNumDice();
              });
          }

          function error(reason) {
              console.log(reason);
          }
          vm.showAll = true;
          gameService.makeChallenge({player: vm.currentPlayer}).then(success, error);
      }

      function makeClaim() {
          function success(response) {
              vm.game = response.data.document;
              headerService.setGame(vm.game);
              vm.lastClaimNumber = vm.claim.claimNumber;
              vm.claim = {};
              formatActionsAndGetNumDice();
              vm.currentPlayer = ++vm.currentPlayer % vm.game.numPlayers;
          }

          function error(reason) {
              console.log(reason);
          }

          vm.claim.player = vm.currentPlayer;

          gameService.makeClaim(vm.claim).then(success, error);
      }

      function calcMaxNumToMove() {
        if(vm.claim.moveFace != null) {
          vm.maxNumToMove = vm.game.playerHands[vm.currentPlayer].filter(function(face) { return face === vm.claim.moveFace; }).length;
        }
      }

      function isInvalidClaim() {
        return (vm.challengeResults || (vm.claim.moveFace && vm.claim.moveNumber > vm.maxNumToMove) || (!vm.claim.claimFace || !vm.claim.claimNumber));
      }

      function formatActionsAndGetNumDice() {
        vm.actions = [];
        for(var i = 0, len = vm.game.actions.length; i < len; i++) {
          var action = vm.game.actions[i];
          var a = 'Player ' + (action.player+1);
          if(action.actionType === 'claim') {
            a += ' claimed there are ' + action.claimNumber + ' ' + action.claimFace + '\'s';
          } else {
            a += ' made a challenge!';
          }
          vm.actions = vm.actions.concat(a);
        }
        vm.totalNumDice = vm.game.playerHands.reduce(function(accumulator, current) {
          return accumulator + current.length;
        }, 0);
      }


  }
})();
