<template>
  <h2>Add project</h2>
  <h3 v-if="showOutput">{{ titleInput }}</h3>
  <p v-if="showOutput">{{ descriptionInput }}</p>
  <!-- <h3>{{ addProject.title }}</h3>
  <p>{{ aadProject.description }}</p> -->

  <form @submit.prevent="submitProject" action="">
    <label for="">Title</label>
    <input type="text" v-model="titleInput" />
    <label for="">Description</label>
    <textarea
      name=""
      id=""
      cols="25"
      rows="10"
      v-model="descriptionInput"
    ></textarea>
    <!-- <input type="file" name="fileToUpload" id="fileToUpload" /> -->
    <button @click="saveProject">Save project</button>
  </form>
</template>

<script>
export default {
  name: "AddProject",
  // props: {
  //   addProject: {
  //     type: Object,
  //     default() {
  //       return {
  //         title: "Project Name",
  //         description: "Description of the project",
  //       };
  //     },
  //   },
  // },

  data() {
    return {
      titleInput: "",
      descriptionInput: "",
      showOutput: false,
    };
  },
  methods: {
    saveProject() {
      const projectObj = {
        title: this.titleInput,
        description: this.descriptionInput,
      };
      this.$emit("addProjectObj", projectObj);
      this.titleText = "";
      this.descriptionText = "";
      this.showOutput = true;
    },
  },

  computed: {},
};
</script>

<style lang="scss"></style>
