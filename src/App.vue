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
          title: "Profile App",
          description:
            "This project was created with Vue.js. It is a portfolio app that displays projects, description and image.",
          image: "https://placehold.co/350x200/EEE/31343C0",
        },
        {
          id: 2,
          title: "Nature Reserve App",
          description:
            "This project was created with React.js. It is a chat app that displays messages, users and images.",
          image: "https://placehold.co/350x200/EEE/31343C0",
        },
        {
          id: 3,
          title: "Movie Review App",
          description:
            "This project was created with Angular.js. It is a movie review app that displays movies, reviews and images.",
          image: "https://placehold.co/350x200/EEE/31343C0",
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
