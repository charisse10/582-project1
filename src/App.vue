<template>
  <h1>Portfolio App</h1>

  <FavouritesList
    :projects="projects"
    @likeProject="likeProject"
    @unlikeProject="unlikeProject"
  ></FavouritesList>

  <h2>POPULAR PROJECTS</h2>
  <div v-for="project in projectsLikedList" :key="project">
    {{ project != null ? projects[parseInt(project) - 1].title : "" }}
  </div>
</template>

<script>
import FavouritesList from "./components/FavouritesList.vue";

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
          image: "https://placehold.co/350x200/FF00FF/FFF",
        },
        {
          id: 2,
          title: "Nature Reserve App",
          description:
            "This project was created with React.js. It is a chat app that displays messages, users and images.",
          image: "https://placehold.co/350x200/FF00FF/FFF",
        },
        {
          id: 3,
          title: "Movie Review App",
          description:
            "This project was created with Angular.js. It is a movie review app that displays movies, reviews and images.",
          image: "https://placehold.co/350x200/FF00FF/FFF",
        },
      ],
    };
  },

  components: {
    FavouritesList,
  },

  methods: {
    likeProject(id) {
      this.projectsLikedList[id] = id;
    },
    unlikeProject(id) {
      this.projectsLikedList[id] = null;
    },
  },
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  margin: 0 auto;

  .project {
    border: 1px solid #ccc;
    margin: 0 0 25px;

    button {
      display: block;
      background-color: rgb(61, 2, 95);
      color: rgb(255, 255, 255);
      border: none;
      border-radius: 25px;
      padding: 10px 50px;
      margin: 25px auto;

      &:hover {
        background-color: rgb(114, 114, 114);
      }
    }

    .unlike {
      background-color: rgb(231, 231, 231);
    }
  }
}

@media (min-width: 768px) {
  #app {
    max-width: 90%;
  }
}

// @media (min-width: 992px) {
//   #app {
//   }
// }

// @media (min-width: 1200px) {
//   #app {
//   }
// }
</style>
