<template>
  <header>
    <h1>Portfolio App</h1>
  </header>
  <main>
    <section class="projects">
      <h2>Projects</h2>
      <div class="projects-flex">
        <FavouritesList
          :projects="projects"
          @likeProject="likeProject"
          @unlikeProject="unlikeProject"
        ></FavouritesList>
      </div>
    </section>
    <div class="right">
      <section class="liked-projects">
        <h2>Liked projects</h2>
        <div v-for="project in projectsLikedList" :key="project">
          {{ project != null ? projects[parseInt(project) - 1].title : "" }}
        </div>
      </section>

      <section class="add">
        <AddProject @addProject="addProject"></AddProject>
      </section>
    </div>
  </main>
</template>

<script>
import FavouritesList from "./components/FavouritesList.vue";
import AddProject from "./components/AddProject.vue";

export default {
  name: "App",
  data() {
    return {
      projectsLikedList: [],
      projects: [
        {
          id: 1,
          title: "Profile App",
          description:
            "This project was created with Vue.js. It is a portfolio app that displays projects, description and image.",
          image: "https://placehold.co/275x200/FF00FF/FFF?text=Vue.js",
        },
        {
          id: 2,
          title: "Nature Reserve App",
          description:
            "This project was created with React.js. It is a chat app that displays messages, users and images.",
          image: "https://placehold.co/275x200/FF00FF/FFF?text=React.js",
        },
        {
          id: 3,
          title: "Movie Review App",
          description:
            "This project was created with Angular.js. It is a movie review app that displays movies, reviews and images.",
          image: "https://placehold.co/300x200/FF00FF/FFF?text=Angular.js",
        },
        {
          id: 4,
          title: "Social Media App",
          description:
            "This project was created with Vue.js. It is a social media app that displays posts, comments and images.",
          image: "https://placehold.co/300x200/FF00FF/FFF?text=Vue.js",
        },
        {
          id: 5,
          title: "E-commerce App",
          description:
            "This project was created with React.js. It is an e-commerce app that displays products, prices and images.",
          image: "https://placehold.co/300x200/FF00FF/FFF?text=React.js",
        },
        {
          id: 6,
          title: "Blog App",
          description:
            "This project was created with Angular.js. It is a blog app that displays posts, comments and images.",
          image: "https://placehold.co/300x200/FF00FF/FFF?text=Angular.js",
        },
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
      console.log("https://placehold.co/275x200/FF00FF/FFF?text=Vue.js");
    },

    unlikeProject(id) {
      this.projectsLikedList[id] = null;
    },

    addProject(newProject) {
      this.projects.push(newProject);
      console.log("added:", this.projects);
    },
  },
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  overflow: hidden;
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  $purple: rgb(61, 2, 95);

  h2 {
    font-size: 2rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
  }

  button {
    display: block;
    margin: 1em auto 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  header {
    background-color: $purple;
    position: fixed;
    width: 100%;
    padding: 15px;

    h1 {
      color: #fff;
      font-size: 2.5rem;
      text-align: center;
    }
  }

  main {
    padding: 125px 25px 0;
    .projects {
      .projects-flex {
        .project {
          width: 90%;
          margin: 0 auto 25px;
          background-color: #f3f3f3;
          text-align: center;
          padding: 25px;

          &:hover {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
          }

          h3 {
            font-size: 1.7rem;
            color: $purple;
          }

          img {
            width: 90%;
            margin: 0 auto;
            transition: transform 1s ease;

            &:hover {
              transform: scale(110%);
            }
          }
        }
        button {
          text-transform: uppercase;
          border: 2px solid $purple;
          display: block;
          padding: 10px 35px;
          border-radius: 25px;

          &:hover {
            background-color: rgb(251, 229, 253);
            color: black;
          }
        }

        .unlike {
          background-color: $purple;
          color: #fff;
        }
      }
    }

    .liked-projects {
      border: 1px solid $purple;
      min-height: 100px;
      padding: 0 25px 25px;
    }

    form {
      border: 1px solid $purple;
      padding: 40px 25px 25px;

      input {
        display: block;
        margin: 0 auto 25px;
        width: 50%;
        padding: 10px;
      }

      textarea {
        display: block;
        margin: 0 auto 25px;
        width: 90%;
        padding: 10px;
      }

      .add {
        display: block;
        border: none;
        padding: 10px 15px;
        border-radius: 5px;
      }
    }
  } //main
} //app

@media only screen and (min-width: 768px) {
  #app {
    main {
      display: flex;
      gap: 50px;

      .projects {
        width: 65%;

        .projects-flex {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
        } //projects-flex
      } //projects
      .right {
        width: 35%;
      }
    } //main
  } //app
}

@media (min-width: 992px) {
  #app {
    main {
      .projects {
        width: 75%;

        .projects-flex {
          .project {
            width: calc((100% / 2) - 25px);
            margin: 25px 0;
          } //project
        } //projects-flex
      } //projects
      .right {
        width: 25%;
      }
    } //main
  } //app
} //media

@media (min-width: 1200px) {
  #app {
    main {
      .projects {
        .projects-flex {
          .project {
            width: calc((100% / 3) - 25px);
          } //project
        } //projects-flex
      } //projects
      .right {
      }
    } //main
  } //app
} //media
</style>
