(function () {
    function generateRandomNumberInRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function doDamage(isSpecialAttack) {
        var minDamage = 1;
        var maxDamage = 10;

        var monsterAttackDamage = generateRandomNumberInRange(minDamage, maxDamage);

        maxDamage = isSpecialAttack ? 20 : maxDamage;

        var playerAttackDamage = generateRandomNumberInRange(minDamage, maxDamage);

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

    function logHeal(playerHealPoints, monsterAttackPoints) {
        logMessage('The player healed himself for ' + playerHealPoints, 'success');

        var monsterAttackLogMessage = 'The monster hits the player for ' + monsterAttackPoints;
        logMessage(monsterAttackLogMessage, 'danger');
    }

    function logMessage(message, messageBackgroundColor) {
        if (!messageBackgroundColor) {
            messageBackgroundColor = 'primary';
        }

        var el = $('<div>')
                    .addClass(`bg-${messageBackgroundColor} col-12 text-white text-uppercase`)
                    .text(message);

        $('#log').append(el);
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
            },
            attack: function (event) {
                doDamage.call(this);
            },
            specialAttack: function (event) {
                doDamage.call(this, isSpecialAttack = true);
            },
            heal: function (event) {
                var playerHealPoints = generateRandomNumberInRange(1, 10)

                this.playerBlood += playerHealPoints;

                if (this.playerBlood > 100) {
                    this.playerBlood = 100;
                }
                
                var monsterAttackDamage = generateRandomNumberInRange(1, 10);

                logHeal(playerHealPoints, monsterAttackDamage);

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
                    alert('The monster is dead!');
                }
            },
            playerBlood: function () {
                if (this.playerBlood <= 0) {
                    alert('You are dead!');
                }
            }
        }
    });
})();