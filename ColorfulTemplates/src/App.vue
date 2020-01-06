<template>
    <div class="container">
        <div class="row">
            <div class="col-xs-12">
                <br>
                <button class="btn btn-primary" @click="displayComponent('appBlue')">Load Blue Template</button>
                <button class="btn btn-success" @click="displayComponent('appGreen')">Load Green Template</button>
                <button class="btn btn-danger" @click="displayComponent('appRed')">Load Red Template</button>
                <hr>

                <component v-bind:is="selectedComponent"></component>
                
                <app-blue>
                    <h1 slot="title">This is blue element heading</h1>
                    <p slot="content">This is my test content.</p>
                </app-blue>
                <app-green>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                    </p>
                </app-green>
                <app-red>
                    <img slot="img" src="https://lh3.googleusercontent.com/VYkCu5jonkBkpBa-R4WyN-gHxJK3fPGPmCg57OiAd68ySh3doN1elOUXJNj9FVG2i8ZGbyv3Xg=w640-h400-e365"/>
                </app-red>
            </div>
        </div>
    </div>
</template>

<script>
    import Blue from './components/Blue.vue';
    import Green from './components/Green.vue';
    import Red from './components/Red.vue';

    export default {
        data: function () {
            return {
                selectedComponent: 'appBlue'
            }
        },
        components: {
            appBlue: Blue,
            appGreen: Green,
            appRed: Red
        },
        methods: {
            displayComponent: function (componentName) {
                this.selectedComponent = componentName;
            }
        }
    }
</script>

<style>
</style>
