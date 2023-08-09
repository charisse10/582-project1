<template>
  <div class="project">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <img :src="project.image" alt="Project Image" />

    <button v-if="isLiked" @click="sendLike">Like</button>
    <button v-else-if="isDisliked" @click="sendDislike">Dislike</button>
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
          image: "https://placehold.co/EEE/31343C0",
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
    // sendLike() {
    //   this.$emit("likeProject", this.project.id);
    //   this.isLiked = true;
    // },
    // sendDislike() {
    //   this.$emit("dislikeProject", this.project.id);
    //   this.isLiked = false;
    // },
  },
};
</script>

<style lang="scss">
.project {
  // background-color: rgb(4, 73, 25);
  color: rgb(153, 153, 153);
  padding: 25px 50px 50px;
  margin-bottom: 25px;
}

button {
  display: block;
  background-color: rgba(235, 4, 4, 0.87);
  color: rgb(255, 255, 255);
  padding: 25px 50px 50px;
}
</style>
