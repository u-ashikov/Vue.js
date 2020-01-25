<template>
    <div>
        <h3>Edit the User</h3>
    </div>
</template>

<script>
export default {
    beforeRouteLeave: function(to, from , next) {
        if (true) {
            console.log('Before Leaving..');
        }

        next();
    }
}
</script>