new Vue({
        el: '#exercise',
        data: {
            value: ''
        },
        methods: {
            showAlert: function () {
                alert('Hello, I have been clicked!');
            },
            saveValue: function (event) {
                this.value = event.target.value;
            }
        }
    });