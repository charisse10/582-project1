<template>
  <h1>PORTFOLIO APP</h1>
  <h2>PROJECTS</h2>
  <div :projects="projects"></div>

  <FavouritesList
    :projects="projects"
    @likeProject="likeProject"
    @unlikeProject="unlikeProject"
  ></FavouritesList>

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
        },
        {
          id: 2,
          title: "Project 2",
          description: "Description 2",
        },
        {
          id: 3,
          title: "Project 3",
          description: "Description 3",
        },
      ],
    };
  },
  components: {
    FavouritesList,
  },
};
</script>

<style lang="scss"></style>
