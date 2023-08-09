<template>
  <div>
    <ProjectItem
      v-for="project in projects"
      :project="project"
      @likeProject="likeProject"
      @dislikeProject="dislikeProject"
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
    dislikeProject(id) {
      this.$emit("dislikeProject", id);
    },
  },
};
</script>

<style lang="scss"></style>
