new Vue({
    el: '#app',
    data: {
        title: 'The VueJS Instance'
    },
    beforeCreate: function () {
        console.log('beforeCreate()');
    },
    created: function () {
        console.log('created()');
    },
    beforeMount: function () {
        console.log('beforeMount()');
    },
    mounted: function () {
        console.log('mounted()');
    },
    beforeUpdate: function () {
        console.log('beforeUpdate()');
    },
    updated: function () {
        console.log('updated()')
    },
    beforeDestroy: function () {
        console.log('beforeDestroy()');
    },
    destroyed: function() {
        console.log('destroyed()');
    },
    methods: {
        changeTitle: function () {
            this.title = 'The title has been changed!';
        },
        destroy: function () {
            this.$destroy();
        }
    }
});