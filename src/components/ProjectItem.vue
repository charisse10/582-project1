<template>
  <h1>...</h1>
  <div class="project">
    <h2>{{ project.title }}</h2>
    <p>{{ project.description }}</p>
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
          description: "Description of the Project",
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

<style lang="scss"></style>
