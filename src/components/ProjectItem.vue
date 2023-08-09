<template>
  <div class="project">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
    <img :src="project.image" alt="Project Image" />
  </div>
</template>

<script>
export default {
  name: "App",
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
  data() {},

  components: {
    // HelloWorld,
  },
};
</script>

<style lang="scss">
.project {
  background-color: rgb(4, 73, 25);
  color: rgb(248, 248, 248);
  padding: 25px 50px 50px;
  margin-bottom: 50px;
}
</style>
