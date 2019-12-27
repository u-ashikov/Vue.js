new Vue({
    el: '#game-container',
    data: {
        gameStarted: false
    },
    methods: {
        startGame: function (event) {
            this.gameStarted = !this.gameStarted;
        },
        attack: function (event) {

        },
        specialAttack: function (event) {

        },
        heal: function (event) {

        },
        giveUp: function (event) {
            this.startGame();
        }
    }
});