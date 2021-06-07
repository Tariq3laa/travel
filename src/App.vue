<template>
    <div id="app">
        <the-navigation></the-navigation>
        <router-view :key="$route.path" />
    </div>
</template>

<script>
export default {
    components: {
        'the-navigation': () =>
            import(
                /* webpackChunkName: "theNavigation" */ "@/components/TheNavigation.vue"
            ),
    },
};
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
