new Vue({
        el: '#exercise',
        data: {
            value: 0,
        },
        computed: {
            result: function () {
                if (this.value == 37) {
                    return 'done';
                }

                return 'not there yet';
            }
        },
        watch: {
            result: function (value) {
                var vm = this;

                setTimeout(function () {
                    vm.value = 0;
                }, 5000)
            }
        }
    });