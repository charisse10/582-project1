import { shallowMount } from "@vue/test-utils";
import ProjectItem from "@/components/ProjectItem.vue";

describe("ProjectItem.vue", () => {
  
  it("renders props project when passed", () => {
    const project = {
      id: 0,
      title: "Project Name",
      description: "Description of the project",
      image: "https://placehold.co/EEE/31343C0",
    };
    const wrapper = shallowMount(ProjectItem, {
      props: { project },
    });
    expect(wrapper.find("h3").text()).toBe(project.title);
    expect(wrapper.find("p").text()).toBe(project.description);
    expect(wrapper.find("img").attributes("src")).toBe(project.image);
  });


  it('toggles between like and dislike buttons', async () => {
    const wrapper = shallowMount(ProjectItem);
    expect(wrapper.find("button").text()).toBe("Like");

    await wrapper.find("button").trigger("click");
    expect(wrapper.vm.isLiked).toBeTruthy();
    expect(wrapper.find("button").text()).toBe("Liked");
  });


  it('displays the delete button be default', () => {
    const wrapper = shallowMount(ProjectItem);
    expect(wrapper.find(".delete").text()).toBe("x");
  });


  it("emits sendLike event when like button is clicked", async () => {
    const wrapper = shallowMount(ProjectItem);
    await wrapper.find(".like").trigger("click");
    expect(wrapper.emitted().likeProject).toBeTruthy();
    expect(wrapper.emitted().likeProject[0][0]).toBe(0);
  });


  it("emits sendUnlike event when unlike button is clicked", async () => {
    const wrapper = shallowMount(ProjectItem);
    await wrapper.setData({ isLiked: true });
    await wrapper.find(".unlike").trigger("click");
    expect(wrapper.emitted().unlikeProject).toBeTruthy();
    expect(wrapper.emitted().unlikeProject[0][0]).toBe(0);
  });


  it("emits delete project event when delete button is clicked", () => {
    const project = {
      id: 0,
      title: "Project Name",
      description: "Description of the project",
      image: "https://placehold.co/EEE/31343C0",
    };
    const wrapper = shallowMount(ProjectItem, {
      props: { project },
    });
    wrapper.find(".delete").trigger("click");
    expect(wrapper.emitted().deleteProject).toBeTruthy();
    expect(wrapper.emitted().deleteProject[0][0]).toEqual(0);
  });


  it("counts the number of likes when like button is clicked", async () => {
    const wrapper = shallowMount(ProjectItem);
    expect(wrapper.find(".likes").text()).toBe("");
    await wrapper.find(".like").trigger("click");
    expect(wrapper.find(".likes").text()).toBe("1 like");
  });


  it("gives the right format for computed likesNumber properly", async () => {
    const wrapper = shallowMount(ProjectItem);
    
    await wrapper.setData({ likeCount: 0 });
    expect(wrapper.vm.likesNumber).toBe("");

    await wrapper.setData({ likeCount: 1 });
    expect(wrapper.vm.likesNumber).toBe("1 like");

    await wrapper.setData({ likeCount: 2 });
    expect(wrapper.vm.likesNumber).toBe("2 Likes");

  });

});
