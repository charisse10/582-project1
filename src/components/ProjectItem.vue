<template>
  <div class="project">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <img :src="project.image" alt="Project Image" />

    <button v-if="!isLiked" @click="sendLike">Like</button>
    <button class="unlike" v-else @click="sendUnlike">Unlike</button>
  </div>
</template>

<script>
export default {
  name: "ProjectItem",
  props: {
    project: {
      type: Object,
      default() {
        return {
          id: 0,
          title: "Project Name",
          description: "Description of the project",
          image: "https://placehold.co/EEE/355E3B",
        };
      },
    },
  },
  data() {
    return {
      isLiked: false,
    };
  },

  methods: {
    sendLike() {
      this.$emit("likeProject", this.project.id);
      this.isLiked = true;
    },
    sendUnlike() {
      this.$emit("unlikeProject", this.project.id);
      this.isLiked = false;
    },
  },
};
</script>

<style lang="scss"></style>
