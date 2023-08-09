<template>
  <div>
    <ProjectItem
      v-for="project in projects"
      :project="project"
      :key="project.id"
    ></ProjectItem>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "FavouritesList",
  props: {
    projects: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    ProjectItem,
  },
  methods: {},
};
</script>

<style lang="scss"></style>
