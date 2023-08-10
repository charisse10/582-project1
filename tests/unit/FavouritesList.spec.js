import { shallowMount } from "@vue/test-utils";
import ProjectItem from "@/components/FavouritesList.vue";
import FavouritesList from "@/components/FavouritesList.vue";

describe('FavouritesList.vue', () => {

  it('renders all the projects on the list of ProjectItem', () => {
    const projects = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description 1',
        image: 'https://example.com/image1.jpg',
      },
      {
        id: 2,
        title: 'Project 2',
        description: 'Description 2',
        image: 'https://example.com/image2.jpg',
      },
    ];
    const wrapper = shallowMount(FavouritesList, {
      props: { projects },
      components: {
        ProjectItem,
      },
    });

    const projectItemWrappers = wrapper.findAllComponents(ProjectItem);
    expect(projectItemWrappers.length).toBe(projects.length);
  });
    

  it('emits likeProject event when ProjectItem Like button is clicked', async () => {
    const projects = [
      {
        id: 0,
        title: "Project Name",
        description: "Description of the project",
        image: "https://placehold.co/EEE/31343C0",
      },
    ];
    const wrapper = shallowMount(FavouritesList, {
      props: { projects },
      components: {
        ProjectItem,
      },
    });

    const projectItemWrapper = wrapper.findComponent(ProjectItem);
    await projectItemWrapper.vm.$emit('likeProject', projects[0].id);
    expect(wrapper.emitted().likeProject).toBeTruthy();
    expect(wrapper.emitted().likeProject[0]).toEqual([projects[0].id]);
  });
    
    
  it('emits unlikeProject event when ProjectItem Unlike button is clicked', async () => {
    const projects = [
      {
        id: 1,
        title: 'Project 1',
        description: 'Description 1',
        image: 'https://example.com/image1.jpg',
      },
    ];
    
    const wrapper = shallowMount(FavouritesList, {
      propsData: { projects },
      components: {
        ProjectItem,
      },
    });

    const projectItemWrapper = wrapper.findComponent(ProjectItem);
    await projectItemWrapper.vm.$emit('unlikeProject', projects[0].id);
    expect(wrapper.emitted().unlikeProject).toBeTruthy();
    expect(wrapper.emitted().unlikeProject[0]).toEqual([projects[0].id]);
  });
    
});
