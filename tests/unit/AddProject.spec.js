import { shallowMount } from "@vue/test-utils";
import AddProject from "@/components/AddProject.vue";

describe("AddProject.vue", () => {

  it("emits submit event when data is submitted", async () => {
    const wrapper = shallowMount(AddProject);

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


  it("clears the form when submitted", async () => {
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

});
