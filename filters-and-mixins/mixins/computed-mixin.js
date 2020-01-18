export const computedMixin = {
    data: function () {
        return {
            text: 'Hello World!'
        }
    },
    computed: {
        reverseText: function () {
            return this.text.split( '' ).reverse( ).join( '' );
        },
        countLength: function () {
            return this.text + ` (${this.text.length})`;
        }
    }
};