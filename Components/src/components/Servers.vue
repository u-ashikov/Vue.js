<template>
<ul class="list-group">
    <li class="list-group-item" 
        v-for="(server, index) in servers" 
        @click="sendStatus(index)" 
        v-bind:class="{ active: isActive(index) }"
    >
        Server #{{ server.id }}
    </li>
</ul>
</template>

<script>
import { eventBus } from '../main'

export default {
    data: function () {
        return {
            servers : [
                { id: 1, status: 'Normal'},
                { id: 2, status: 'Stable'},
                { id: 3, status: 'Critical'},
                { id: 4, status: 'Normal'},
                { id: 5, status: 'Not Responding'},
            ],
            currentSelectedServerId: -1
        }
    },
    methods: {
        sendStatus: function(serverIndex) {
            var server = this.servers[serverIndex];
            this.currentSelectedServerId = serverIndex;

            eventBus.$emit('displayStatus', server);
        },
        isActive: function(index) {
            return this.currentSelectedServerId == index;
        }
    }
}
</script>

<style scoped>
.list-group-item:hover {
  cursor: pointer;
}
</style>