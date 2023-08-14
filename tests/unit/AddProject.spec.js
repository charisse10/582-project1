import { shallowMount } from "@vue/test-utils";
import AddProject from "@/components/AddProject.vue";

describe("AddProject.vue", () => {
  it("emits event when data is submitted", async () => {
    const wrapper = shallowMount(AddProject);

    // user input
    await wrapper.setData({
      titleInput: "Project Name",
      descriptionInput: "Description of the project",
      imageInput: "https://placehold.co/EEE/31343C0",
    });
    wrapper.find("form").trigger("submit");

    expect(wrapper.emitted().addProject).toBeTruthy();
    expect(wrapper.emitted().addProject[0]).toEqual([
      {
        id: 10,
        title: "Project Name",
        description: "Description of the project",
        image: "https://placehold.co/EEE/31343C0",
      },
    ]);
  });

  it("clears the form when submitted", () => {
    const wrapper = shallowMount(AddProject);
    expect(wrapper.find("form").exists()).toBe(true);
  });

  it("emits event when data is submitted", async () => {
    const wrapper = shallowMount(AddProject);
    await wrapper.setData({
      titleInput: "Project Name",
      descriptionInput: "Description of the project",
      imageInput: "https://placehold.co/EEE/31343C0",
    });
    wrapper.find("form").trigger("submit");
    expect(wrapper.emitted().addProject).toBeTruthy();
    expect(wrapper.vm.titleInput).toBe("");
    expect(wrapper.vm.descriptionInput).toBe("");
    expect(wrapper.vm.imageInput).toBe("");
  });

  it("shows the error message when required fields are empty", () => {
    // const wrapper = shallowMount(AddProject);
    // wrapper.find("form").trigger("submit");
    // expect(wrapper.find(".error").exists()).toBe(true);
  });
});
