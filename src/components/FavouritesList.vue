<template>
  <h2>PROJECTS</h2>
  <div>
    <ProjectItem
      v-for="project in projects"
      :project="project"
      @likeProject="likeProject"
      @unlikeProject="unlikeProject"
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
  methods: {
    likeProject(id) {
      this.$emit("likeProject", id);
    },
    unlikeProject(id) {
      this.$emit("unlikeProject", id);
    },
  },
};
</script>

<style lang="scss"></style>
