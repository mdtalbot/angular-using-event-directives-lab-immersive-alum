function VoteController() {
    this.votes = 0;
    let vm = this;

    this.incrementVotes = function () {
        vm.votes++
    };

    this.decrementVotes = function () {
        vm.votes--
    };
}

angular
    .module('app')
    .controller('VoteController', VoteController);