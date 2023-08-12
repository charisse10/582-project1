<template>
  <h2>Add project</h2>

  <form @submit.prevent="saveNewProject" action="">
    <label for="title">Title</label>
    <input type="text" v-model="titleInput" required />
    <label for="description">Description</label>
    <textarea
      name=""
      id=""
      cols="25"
      rows="10"
      v-model="descriptionInput"
    ></textarea>
    <input type="text" v-model="imageInput" required />
    <input class="add" type="submit" value="save project" />
  </form>

  <h3>{{ titleInput }}</h3>
  <p>{{ descriptionInput }}</p>
  <p>{{ imageInput }}</p>
</template>

<script>
export default {
  name: "AddProject",
  data() {
    return {
      obj: {},
      id: 7,
      titleInput: "",
      descriptionInput: "",
      imageInput: "",
    };
  },

  methods: {
    saveNewProject() {
      const newProject = {
        id: this.id,
        title: this.titleInput,
        description: this.descriptionInput,
        image: this.imageInput,
      };

      this.id++;
      this.$emit("addProject", newProject);

      this.titleInput = "";
      this.descriptionInput = "";
      this.imageInput = "";
    },
  },
};
</script>

<style lang="scss"></style>
