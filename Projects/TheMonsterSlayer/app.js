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
    
        this.monsterBlood -= playerAttackDamage;
        this.playerBlood -= monsterAttackDamage;
    }

    new Vue({
        el: '#game-container',
        data: {
            gameStarted: false,
            playerBlood: 100,
            monsterBlood: 100
        },
        methods: {
            startGame: function (event) {
                this.gameStarted = !this.gameStarted;
            },
            attack: function (event) {
                doDamage.call(this);
            },
            specialAttack: function (event) {
                doDamage.call(this, isSpecialAttack = true);
            },
            heal: function (event) {
                this.playerBlood += generateRandomNumberInRange(1, 10);

                if (this.playerBlood > 100) {
                    this.playerBlood = 100;
                }
                
                var monsterAttackDamage = generateRandomNumberInRange(1, 10);
                this.playerBlood -= monsterAttackDamage;
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