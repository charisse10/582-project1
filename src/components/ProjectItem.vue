<template>
  <div class="project">
    <h3>{{ project.title }}</h3>
    <p>{{ project.description }}</p>
    <img :src="project.image" alt="Project Image" />
    <button v-if="!isLiked" @click="sendLike">Like</button>
    <button class="unlike" v-else @click="sendUnlike">Liked</button>
    <p>{{ likesNumber }}</p>
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
      likeCount: 0,
    };
  },

  methods: {
    sendLike() {
      this.$emit("likeProject", this.project.id);
      this.isLiked = true;
      this.likeCount++;
    },
    sendUnlike() {
      this.$emit("unlikeProject", this.project.id);
      this.isLiked = false;
    },
  },

  computed: {
    likesNumber() {
      if (this.likeCount === 0) {
        return "";
      } else if (this.likeCount === 1) {
        return "1 like";
      } else {
        return `${this.likeCount} Likes`;
      }
    },
  },
};
</script>

<style lang="scss"></style>
