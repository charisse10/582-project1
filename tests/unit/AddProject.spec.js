import { shallowMount } from "@vue/test-utils";
import AddProject from "@/components/AddProject.vue";

describe("FavouritesList.vue", () => {
  it("display form when being passed", () => {
    const wrapper = shallowMount(AddProject);
    expect(wrapper.find("h2").text()).toBe("Add project");
  });

  it("clears the text field after submit", () => {});

  it("shows the error message when required fields are empty", () => {});

  it("shows the error message when the image is not valid", () => {});

  it("emits the addProject event with correct data when submitted", () => {});
});
