<template>
    <section class="experience">
        <h2>{{ experience.name }}</h2>
        <div class="experience-details">
            <img
                :src="require(`@/assets/${experience.image}`)"
                :alt="experience.name"
                srcset=""
            />
            <p>{{ experience.description }}</p>
        </div>
    </section>
</template>

<script>
import store from "@/store.js";

export default {
    data() {
        return {};
    },
    props: {
        slug: {
            type: String,
            required: true,
        },
        experienceSlug: {
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
        experience() {
            return this.destination.experiences.find(
                (experience) => experience.slug === this.experienceSlug
            );
        },
    },
};
</script>

<style scoped>
img {
    min-height: 200px;
    cursor: p
}

.experience-details {
    display: flex;
    justify-content: space-between;
}

p {
    margin: 0 40px;
    font-size: 21px;
    text-align: left;
}
</style>