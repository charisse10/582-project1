<template>
  <h2>Add project</h2>
  <!-- <h3>{{ titleInput }}</h3>
  <p>{{ descriptionInput }}</p>
  <img :src="imageInput" alt="Project Image" /> -->

  <form @submit.prevent="saveNewProject" action="">
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
    <!-- <input type="text" v-model="imageInput" /> -->
    <input class="add" type="submit" value="save project" />
  </form>
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
      this.obj["id"] = this.id;
      this.id++;
      this.obj["title"] = this.titleInput;
      this.obj["description"] = this.descriptionInput;
      this.obj["image"] = this.imageInput;
      this.$emit("addProject", this.obj);
      console.log("sent ", this.obj);
    },
  },
};
</script>

<style lang="scss"></style>
