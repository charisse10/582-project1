<template>
  <div class="projects-flex">
    <ProjectItem
      v-for="project in projects"
      :project="project"
      @likeProject="likeProject"
      @unlikeProject="unlikeProject"
      @deleteProject="deleteProject"
      :key="project.id"
    ></ProjectItem>
  </div>
</template>

<script>
import ProjectItem from "./ProjectItem.vue";

export default {
  name: "ProjectsList",
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
    deleteProject(id) {
      this.$emit("deleteProject", id);
    },
  },
};
</script>

<style lang="scss"></style>
