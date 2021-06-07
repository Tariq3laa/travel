<template>
    <div>
        <go-back></go-back>
        <section class="destination">
            <h1>{{ destination.name }}</h1>
            <div class="destination-details">
                <img
                    :src="require(`@/assets/${destination.image}`)"
                    :alt="destination.name"
                    srcset=""
                />
                <p>{{ destination.description }}</p>
            </div>
        </section>
        <section class="experiences">
            <h2>Top Experiences in {{ destination.name }}</h2>
            <div class="cards">
                <div
                    v-for="experience in destination.experiences"
                    :key="experience.slug"
                    class="card"
                >
                    <router-link
                        :to="{
                            name: 'ExperienceDetails',
                            params: { experienceSlug: experience.slug },
                        }"
                    >
                        <img
                            :src="require(`@/assets/${experience.image}`)"
                            :alt="experience.name"
                            srcset=""
                        />
                        <span class="card-text">
                            {{ experience.name }}
                        </span>
                    </router-link>
                </div>
            </div>
            <router-view :key="$route.path" />
        </section>
    </div>
</template>

<script>
import store from "@/store.js";

export default {
    components: {
        "go-back": () =>
            import(/* webpackChunkName: "GoBack" */ "@/components/GoBack.vue"),
    },
    props: {
        slug: {
            type: String,
            required: true,
        },
    },
    computed: {
        destination() {
            return store.destinations.find(
                (destination) => destination.slug === this.slug
            );
        },
    },
};
</script>

<style scoped>
img {
    max-width: 600px;
    max-height: 400px;
    width: 100%;
    height: auto;
}

.destination-details {
    display: flex;
    justify-content: space-between;
}

p {
    margin: 0 40px;
    font-size: 21px;
    text-align: left;
}

.cards {
    display: flex;
    justify-content: space-between;
}

.cards img {
    min-height: 200px;
    cursor: pointer;
}

.card {
    padding: 0 20px;
    position: relative;
}

.card-text {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 24px;
    font-weight: bold;
    color: white;
    cursor: pointer;
    text-decoration: none;
}
</style>
