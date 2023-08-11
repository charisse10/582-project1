<template>
  <h1>Portfolio App</h1>

  <section class="liked">
    <h2>Liked projects</h2>
    <div v-for="project in projectsLikedList" :key="project">
      {{ project != null ? projects[parseInt(project) - 1].title : "" }}
    </div>
  </section>

  <section class="projects">
    <FavouritesList
      :projects="projects"
      @likeProject="likeProject"
      @unlikeProject="unlikeProject"
    ></FavouritesList>
  </section>

  <section class="add">
    <AddProject @addProjectObj="addProjectObj"></AddProject>
  </section>
</template>

<script>
import FavouritesList from "./components/FavouritesList.vue";
import AddProject from "./components/AddProject.vue";

export default {
  name: "App",
  data() {
    return {
      projectsLikedList: [],
      savedProjects: [],
      projects: [
        {
          id: 1,
          title: "Profile App",
          description:
            "This project was created with Vue.js. It is a portfolio app that displays projects, description and image.",
          image: "https://placehold.co/300x200/FF00FF/FFF?text=Vue.js",
        },
        {
          id: 2,
          title: "Nature Reserve App",
          description:
            "This project was created with React.js. It is a chat app that displays messages, users and images.",
          image: "https://placehold.co/300x200/FF00FF/FFF?text=React.js",
        },
        // {
        //   id: 3,
        //   title: "Movie Review App",
        //   description:
        //     "This project was created with Angular.js. It is a movie review app that displays movies, reviews and images.",
        //   image: "https://placehold.co/300x200/FF00FF/FFF?text=Angular.js",
        // },
        // {
        //   id: 4,
        //   title: "Social Media App",
        //   description:
        //     "This project was created with Vue.js. It is a social media app that displays posts, comments and images.",
        //   image: "https://placehold.co/300x200/FF00FF/FFF?text=Vue.js",
        // },
        // {
        //   id: 5,
        //   title: "E-commerce App",
        //   description:
        //     "This project was created with React.js. It is an e-commerce app that displays products, prices and images.",
        //   image: "https://placehold.co/300x200/FF00FF/FFF?text=React.js",
        // },
        // {
        //   id: 6,
        //   title: "Blog App",
        //   description:
        //     "This project was created with Angular.js. It is a blog app that displays posts, comments and images.",
        //   image: "https://placehold.co/300x200/FF00FF/FFF?text=Angular.js",
        // },
      ],
    };
  },

  components: {
    FavouritesList,
    AddProject,
  },

  methods: {
    likeProject(id) {
      this.projectsLikedList[id] = id;
    },
    unlikeProject(id) {
      this.projectsLikedList[id] = null;
    },
  },

  addProjectObj(project) {
    this.savedProjects.push(project);
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 0 auto;
  max-width: 90%;

  h2 {
    text-transform: uppercase;
  }

  button {
    display: block;
    margin: 25px auto;
  }

  .liked {
    border: 1px solid #db0909;
    min-height: 200px;
  }

  .projects {
    padding: 50px 0;

    .project {
      background-color: #f3f3f3;
      border: 1px solid #ccc;
      margin: 0 auto 25px;
      padding: 25px;

      &:hover {
        box-shadow: 0 0 5px 0 rgba(0, 0, 0, 0.5);
      }

      h3 {
        color: rgb(61, 2, 95);
      }

      button {
        display: block;
        background-color: rgb(61, 2, 95);
        color: rgb(255, 255, 255);
        border: none;
        padding: 10px 25px;
        border-radius: 25px;

        &:hover {
          background-color: rgb(114, 114, 114);
        }
      }

      .unlike {
        background-color: rgb(231, 231, 231);
      }
    }
  }

  form {
    background-color: #f5f5f5;
    padding: 40px 25px 25px;

    input {
      display: block;
      margin: 0 auto 25px;
      width: 50%;
      padding: 10px;
    }

    textarea {
      display: block;
      margin: 0 auto;
      width: 90%;
      padding: 10px;
    }
  }
}

@media (min-width: 768px) {
}

@media (min-width: 992px) {
}

@media (min-width: 1200px) {
}
</style>
