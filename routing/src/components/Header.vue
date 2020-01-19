<template>
    <div>
        <ul class="nav nav-pills">
            <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
            <router-link to="/user/1" tag="li" active-class="active"><a>User 1</a></router-link>
            <router-link to="/user/2" tag="li" active-class="active"><a>User 2</a></router-link>
        </ul>
    </div>
</template>