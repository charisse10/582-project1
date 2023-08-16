import { shallowMount } from "@vue/test-utils";
import ProjectsList from "@/components/ProjectsList.vue";

describe("ProjectsList.vue", () => {

  it("emits project id when likeProject is trigerred", async () => {
    const projectId = 1;
    const wrapper = shallowMount(ProjectsList);
    await wrapper.vm.likeProject(projectId);
    expect(wrapper.emitted().likeProject).toBeTruthy();
    expect(wrapper.emitted().likeProject[0][0]).toEqual(projectId);
  });


  it("emits project id when unlikeProject is trigerred", async () => {
    const projectId = 1;
    const wrapper = shallowMount(ProjectsList);
    await wrapper.vm.unlikeProject(projectId);
    expect(wrapper.emitted().unlikeProject).toBeTruthy();
    expect(wrapper.emitted().unlikeProject[0][0]).toEqual(projectId);
  });
  

  it("emits project id when deleteProject is trigerred", async () => {
    const projectId = 1;
    const wrapper = shallowMount(ProjectsList);
    await wrapper.vm.deleteProject(projectId);
    expect(wrapper.emitted().deleteProject).toBeTruthy();
    expect(wrapper.emitted().deleteProject[0][0]).toEqual(projectId);
  });
  
});
