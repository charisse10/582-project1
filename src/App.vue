<template>
  <h1>PORTFOLIO APP</h1>
  <h2>PROJECTS</h2>
  <div :projects="projects"></div>

  <FavouritesList :projects="projects"></FavouritesList>

  <div class="popular">
    <h2>POPULAR PROJECTS</h2>
    <div>{{ projectsLiked }}</div>
  </div>
</template>

<script>
import FavouritesList from "./components/FavouritesList.vue";

export default {
  name: "App",
  data() {
    return {
      projects: [
        {
          id: 1,
          title: "Project 1",
          description: "Description 1",
          image: "https://placehold.co/300x300/EEE/31343C0",
        },
      ],
    };
  },
  components: {
    FavouritesList,
  },
  methods: {},
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  max-width: 90%;
  margin: 0 auto;
}
</style>
