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
      props: { project },
    });
    expect(wrapper.find("h2").text()).toBe(project.title);
    expect(wrapper.find("p").text()).toBe(project.description);
    expect(wrapper.find("img").attributes("src")).toBe(project.image);
  });

  it('displays "Like" button when project is not yet clicked', () => {
    const wrapper = shallowMount(ProjectItem);
    expect(wrapper.find("button").text()).toContain("Like");
  });

  it("emits likeProject event when Like button is clicked", () => {
    const project = {
      id: 0,
      title: "Project Name",
      description: "Description of the project",
      image: "https://placehold.co/EEE/31343C0",
    };
    const wrapper = shallowMount(ProjectItem, {
      props: { project },
    });

    wrapper.find("button").trigger("click");
    expect(wrapper.emitted().likeProject).toBeTruthy();
    expect(wrapper.emitted().likeProject[0]).toEqual([project.id]);
  });

  it('displays "Unlike" button when project is liked', async () => {
    const wrapper = shallowMount(ProjectItem);
    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.isLiked).toBeTruthy();
    expect(wrapper.find("button").exists()).toBe(true);
  });

  it("emits unlikeProject event when Unlike button is clicked", async () => {
    const project = {
      id: 0,
      title: "Project Name",
      description: "Description of the project",
      image: "https://placehold.co/EEE/355E3B",
    };
    const wrapper = shallowMount(ProjectItem, {
      props: { project },
    });

    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.isLiked).toBeTruthy();
    await wrapper.find("button").trigger("click");
    expect(wrapper.emitted().unlikeProject).toBeTruthy();
    expect(wrapper.emitted().unlikeProject[0]).toEqual([project.id]);
  });

  it("emits add to favourites event when like button is clicked", () => {
    const project = {
      id: 0,
      title: "Project Name",
      description: "Description of the project",
      image: "https://placehold.co/EEE/31343C0",
    };
    const wrapper = shallowMount(ProjectItem, {
      props: { project },
    });
    wrapper.find("button").trigger("click");
    expect(wrapper.emitted().addToFavourites).toBeTruthy();
    expect(wrapper.emitted().addToFavourites[0]).toEqual([project.id]);
  });

  it("emits remove from favourites event when dislike button is clicked", () => {});

  it("counts the number of likes when liked button is clicked", () => {});
});
