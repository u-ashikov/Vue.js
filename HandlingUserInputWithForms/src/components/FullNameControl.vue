<template>
    <div class="form-group">
        <label for="full-name">Full Name</label>
        <input id="full-name" type="text" name="full-name" class="form-control" v-on:input="setFullName($event)"/>
    </div>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        setFullName: function (event) {
            this.$emit('input', event.target.value);
        }
    }
}
</script>