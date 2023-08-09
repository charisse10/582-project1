// import { shallowMount } from "@vue/test-utils";
// import ProjectItem from "@/components/FavouritesList.vue";

describe("FavouritesList.vue", () => {
  it("renders props: courses correctly", () => {
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

  it("emits liked event when action is made in ProjectItem", () => {});

  it("adds the project to favourites when action is made", () => {});

  it("emits disliked event when action is made in ProjectItem", () => {});

  it("removes the project from favourites when action is made", () => {});
});
