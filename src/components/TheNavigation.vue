<template>
    <nav id="nav">
        <p class="logo">Travel App</p>
        <ul class="nav-links">
            <li class="links">
                <router-link to="/">Home</router-link>
            </li>
            <li
                v-for="destination in destinations"
                :key="destination.id"
                class="links"
            >
                <router-link
                    :to="{
                        name: 'DestinationDetails',
                        params: { slug: destination.slug },
                    }"
                >
                    {{ destination.name }}
                </router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
// @ is an alias to /src
import store from "@/store.js";

export default {
    name: "Home",
    components: {},
    data() {
        return {
            destinations: store.destinations,
        };
    },
};
</script>

<style scoped>
#nav {
    display: flex;
    align-items: center;
    border-bottom: 3px solid gray;
}

#nav a {
    font-weight: bold;
    color: #2c3e50;
    text-decoration: none;
    font-weight: bold;
}

#nav a:last-child {
    margin: 0;
}

#nav a.active {
    color: #ab26ab;
}

.nav-links {
    display: flex;
}

.links {
    margin-right: 7%;
    list-style: none;
}

.links:hover {
    text-decoration: underline;
}

.logo {
    font-size: 21px;
    font-weight: bold;
    color: purple;
}
</style>
