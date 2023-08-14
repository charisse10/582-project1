<template>
  <header>
    <img src="./assets/hw.svg" alt="" />
    <h1>Hello World</h1>
  </header>

  <main>
    <section class="projects">
      <h2>Projects</h2>
      <div class="projects-flex">
        <FavouritesList
          :projects="projects"
          @likeProject="likeProject"
          @unlikeProject="unlikeProject"
          @deleteProject="deleteProject"
        ></FavouritesList>
      </div>
    </section>

    <div class="right">
      <section class="add">
        <AddProject
          @addProject="addProject"
          @deleteNewProject="deleteNewProject"
        ></AddProject>
      </section>

      <section class="liked-projects">
        <h2>Liked projects</h2>
        <div v-for="project in projectsLikedList" :key="project">
          {{ project != null ? projects[parseInt(project) - 1].title : "" }}
        </div>
      </section>
    </div>
  </main>

  <footer>Copyright 2023 © Hello World</footer>
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
          image:
            "https://images.pexels.com/photos/192273/pexels-photo-192273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 2,
          title: "Nature Reserve App",
          description:
            "This project was created with React.js. It is a chat app that displays messages, users and images.",
          image:
            "https://images.pexels.com/photos/248526/pexels-photo-248526.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 3,
          title: "Movie Review App",
          description:
            "This project was created with Angular.js. It is a movie review app that displays movies, reviews and images.",
          image:
            "https://images.pexels.com/photos/163066/desk-terminplanung-control-newsletter-163066.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 4,
          title: "Social Media App",
          description:
            "This project was created with Vue.js. It is a social media app that displays posts, comments and images.",
          image:
            "https://images.pexels.com/photos/5077049/pexels-photo-5077049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 5,
          title: "E-commerce App",
          description:
            "This project was created with React.js. It is an e-commerce app that displays products, prices and images.",
          image:
            "https://images.pexels.com/photos/246658/pexels-photo-246658.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 6,
          title: "Blog App",
          description:
            "This project was created with Angular.js. It is a blog app that displays posts, comments and images.",
          image:
            "https://images.pexels.com/photos/5424636/pexels-photo-5424636.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 7,
          title: "Notetaking App",
          description:
            "This project was created with Vue.js. It is a portfolio app that displays projects, description and image.",
          image:
            "https://images.pexels.com/photos/38544/imac-apple-mockup-app-38544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 8,
          title: "Daily Quotes App",
          description:
            "This project was created with React.js. It is a chat app that displays messages, users and images.",
          image:
            "https://images.pexels.com/photos/246684/pexels-photo-246684.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
        },
        {
          id: 9,
          title: "Recipe App",
          description:
            "This project was created with Angular.js. It is a movie review app that displays movies, reviews and images.",
          image:
            "https://images.pexels.com/photos/4348404/pexels-photo-4348404.jpeg?auto=compress&cs=tinysrgb&w=1600",
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

    deleteProject(id) {
      const index = this.projects.findIndex((project) => project.id === id);
      if (index !== -1) {
        this.projects.splice(index, 1);
      }
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

$purple: rgb(61, 2, 95);
$yellow: rgb(251, 247, 153);
$gray: #f3f3f3;

#app {
  overflow: hidden;
  font-size: 16px;
  font-family: Avenir, Helvetica, Arial, sans-serif;

  h2 {
    font-size: 1.7rem;
    text-transform: uppercase;
    text-align: center;
    margin-bottom: 1rem;
  }

  p {
    margin-bottom: 1rem;
  }

  button {
    display: block;
    margin: 15px auto 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

  header {
    background-color: $yellow;
    position: fixed;
    z-index: 2;
    width: 100%;
    padding: 15px;
    display: flex;
    justify-content: center;

    img {
      width: 50px;
      height: 50px;
      margin-right: 15px;
    }

    h1 {
      color: $purple;
      font-size: 2.5rem;
      text-align: center;
    }
  }

  main {
    padding: 0 25px;
    .projects {
      margin: 125px 0 50px;
      .projects-flex {
        .project {
          width: 100%;
          margin: 0 auto 25px;
          background-color: $gray;
          text-align: center;
          padding: 25px;
          position: relative;

          &:hover {
            box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.5);
            transition: 1s;
          }

          h3 {
            font-size: 1.5rem;
            color: $purple;
            margin: 1.5rem 0 1rem;
          }

          img {
            width: 90%;
            margin: 0 auto 25px;
            transition: transform 1s ease;

            &:hover {
              transform: scale(110%);
            }
          }

          p {
            padding-bottom: 75px;
          }

          .likes {
            font-weight: bolder;
            position: absolute;
            bottom: -50px;
            left: 0;
            transform: translateX(40px);
            font-size: 1.2rem;
            color: $purple;
          }

          button {
            display: block;
            font-size: 1.1rem;
            text-transform: uppercase;
            font-weight: bold;
          }

          .like,
          .unlike {
            position: absolute;
            border: 2px solid $purple;
            padding: 10px 35px;
            border-radius: 25px;
            margin-bottom: 0.5rem;
            bottom: 25px;
            right: 0;
            transform: translateX(-40px);

            &:hover {
              background-color: $yellow;
              transition: 1s;
            }
          }

          .delete {
            border: none;
            padding: 2px 8px;
            border-radius: 50%;
            background-color: transparent;
            position: absolute;
            top: 10px;
            right: 40px;

            &:hover {
              transform: scale(150%);
              transition: 1s;
            }
          }
        }
        .unlike {
          background-color: $purple;
          color: #fff;
        }
      }
    }

    .right {
      form {
        background: $yellow;
        border: 1px solid $purple;
        padding: 40px 25px 25px;
        text-align: center;
        margin-bottom: 25px;

        label {
          margin-bottom: 1rem;
        }

        input {
          display: block;
          margin: 0 auto 25px;
          width: 50%;
          padding: 10px;
          border-radius: 10px;
        }

        textarea {
          display: block;
          margin: 0 auto 25px;
          width: 90%;
          padding: 10px;
          border-radius: 10px;
        }

        .add {
          background-color: $purple;
          color: white;
          text-transform: uppercase;
          width: 150px;
          border-radius: 10px;

          &:hover {
            background-color: black;
            transition: 1s;
          }
        }
      }
      .liked-projects {
        color: $purple;
        text-align: center;
        padding: 25px;
        margin-bottom: 100px;
        font-size: 1.2rem;
        font-weight: bold;

        h2 {
          color: #000;
        }
      }
    } //right
  } //main
  footer {
    position: fixed;
    bottom: 0;
    width: 100%;
    background-color: $yellow;
    text-align: center;
    padding: 25px 0;
  }
} //app

@media only screen and (min-width: 768px) {
  #app {
    main {
      display: flex;

      .projects {
        width: 50%;
        margin-bottom: 100px;

        .projects-flex {
          display: flex;
          flex-wrap: wrap;
        } //projects-flex
      } //projects

      .right {
        width: 50%;
        position: fixed;
        height: 100vh;
        right: 0;
        top: 0;
        z-index: 0;
        padding: 125px 50px 0;
      }
    } //main
  } //app
}

@media only screen and (min-width: 1200px) {
  #app {
    main {
      .projects {
        width: 66.66%;
        .projects-flex {
          .project {
            width: calc((100% / 2) - 25px);
          } //project
        } //projects-flex
      } //projects

      .right {
        width: 33.33%;
        padding: 125px 50px 0 25px;
      }
    } //main
  } //app
} //media

@media only screen and (min-width: 1440px) {
  #app {
    main {
      .projects {
        width: 75%;
        .projects-flex {
          .project {
            width: calc((100% / 3) - 25px);
          } //project
        } //projects-flex
      } //projects

      .right {
        width: 25%;
      }
    } //main
  } //app
} //media
</style>
