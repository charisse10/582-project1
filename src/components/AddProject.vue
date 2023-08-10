<template>
  <form @submit.prevent="submitProject" action="">
    <h2>Add project</h2>
    <label for="">Title</label>
    <input type="text" v-model="titleInput" />
    <label for="">Description</label>
    <textarea
      name=""
      id=""
      cols="30"
      rows="10"
      v-model="descriptionInput"
    ></textarea>
    <button @click="saveProject">Save project</button>
  </form>
</template>

<script>
export default {
  name: "AddProject",
  data() {
    return {
      title: "",
      description: "",
    };
  },
  methods: {},
};
</script>

<style lang="scss"></style>
