<template>
    <p v-if="currentServer == null">Currently no server is selected.</p>
    <p v-else>Server #{{ currentServer.id }} is in state: {{ currentServer.status }}</p>
</template>

<script>
import { eventBus } from '../main'

export default {
    data: function() {
        return {
            currentServer: null
        }
    },
    created: function() {
        eventBus.$on('displayStatus', (server) => {
            this.currentServer = server;
        });
    }
}
</script>