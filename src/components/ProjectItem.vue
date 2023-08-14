<template>
  <div class="project">
    <h3>{{ project.title }}</h3>
    <img :src="project.image" alt="Project Image" />
    <p>{{ project.description }}</p>
    <p class="likes">{{ likesNumber }}</p>
    <button class="like" v-if="!isLiked" @click="sendLike">Like</button>
    <button class="unlike" v-else @click="sendUnlike">Liked</button>
    <button class="delete" @click="deleteThisProject">x</button>
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
      // this.likeCount--;
    },
    deleteThisProject() {
      this.$emit("deleteProject", this.project.id);
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
