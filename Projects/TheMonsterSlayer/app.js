(function () {
    function calculateAttackDamage(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function doDamage(isSpecialAttack) {
        var minDamage = 1;
        var maxDamage = 10;

        var monsterAttackDamage = calculateAttackDamage(minDamage, maxDamage);

        maxDamage = isSpecialAttack ? 20 : maxDamage;

        var playerAttackDamage = calculateAttackDamage(minDamage, maxDamage);

        logAttack(playerAttackDamage, monsterAttackDamage);
        this.gameRounds++;
    
        this.monsterBlood -= playerAttackDamage;
        this.playerBlood -= monsterAttackDamage;
    }

    function logAttack(playerAttackPoints, monsterAttackPoints, ) {
        var playerAttackLogMessage = 'The player hits the monster for ' + playerAttackPoints;
        var monsterAttackLogMessage = 'The monster hits the player for ' + monsterAttackPoints;

        logMessage(monsterAttackLogMessage, 'danger');
        logMessage(playerAttackLogMessage, 'primary');
    }

    function logHeal(monsterAttackPoints) {
        logMessage('The player healed himself for 10', 'success');

        var monsterAttackLogMessage = 'The monster hits the player for ' + monsterAttackPoints;
        logMessage(monsterAttackLogMessage, 'danger');
    }

    function logMessage(message, messageBackgroundColor) {
        if (!messageBackgroundColor) {
            messageBackgroundColor = 'primary';
        }

        $('<div>')
                .addClass(`bg-${messageBackgroundColor} col-12 text-white text-uppercase`)
                .text(message)
                .appendTo('#log');
    }

    function showAlert(type, title, message) {
        return Swal.fire({
            icon: type,
            title: title,
            text:  message
        });
    }

    new Vue({
        el: '#game-container',
        data: {
            gameStarted: false,
            gameRounds: 0,
            playerBlood: 100,
            monsterBlood: 100
        },
        methods: {
            startGame: function (event) {
                this.gameStarted = !this.gameStarted;

                this.playerBlood = 100;
                this.monsterBlood = 100;
                this.gameRounds = 0;

                $('#log').empty();
            },
            attack: function (event) {
                doDamage.call(this);
            },
            specialAttack: function (event) {
                doDamage.call(this, isSpecialAttack = true);
            },
            heal: function (event) {
                this.playerBlood += 10;

                if (this.playerBlood > 100) {
                    this.playerBlood = 100;
                }
                
                var monsterAttackDamage = calculateAttackDamage(1, 10);

                logHeal(monsterAttackDamage);

                this.playerBlood -= monsterAttackDamage;

                this.gameRounds++;
            },
            giveUp: function (event) {
                this.startGame();
            }
        },
        watch: {
            monsterBlood: function() {
                if (this.monsterBlood <= 0) {
                    var alertMessage = 'After ' + this.gameRounds + ' rounds you slayed the monster!';

                    showAlert('success', 'Congratulations', alertMessage)
                        .then((result) => {
                        this.startGame();
                    });
                }
            },
            playerBlood: function () {
                if (this.playerBlood <= 0) {
                    var alertMessage = 'After ' + this.gameRounds + ' rounds you have been slayed by the monster!';

                    showAlert('error', 'Game Over', alertMessage)
                        .then((result) => {
                        this.startGame();
                    });
                }
            }
        }
    });
})();