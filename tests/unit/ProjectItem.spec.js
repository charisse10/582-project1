import { shallowMount } from "@vue/test-utils";
import ProjectItem from "@/components/ProjectItem.vue";

describe("ProjectItem.vue", () => {
  it("renders props: project when passed", () => {
    const project = {
      id: 0,
      title: "Project Name",
      description: "Description of the project",
      image: "https://placehold.co/EEE/31343C0",
    };
    const wrapper = shallowMount(ProjectItem, {
      propsData: { project },
    });
    expect(wrapper.find("h2").text()).toBe(project.title);
  });

  it("emits like event when like button is clicked", async () => {
    // const wrapper = shallowMount(ProjectItem);
    // await wrapper.find("button").trigger("click");
    // expect(wrapper.emitted(like)).toBeTruthy();
    // expect(wrapper.vm.like).toBe(true);
  });

  it("displays class when like button is clicked", () => {});

  it("emits add to favourites event when like button is clicked", () => {});

  it("emits unlike event when dislike button is clicked", () => {});

  it("emits remove from favourites event when dislike button is clicked", () => {});
});
