<template>
  <!-- <Greet name="Bruce" hero-name="Batman" />
  <Greet name="Clark" hero-name="Superman" />
  <Greet name="Diana" hero-name="Wonder Woman" />
  <Greet :name="name" :hero-name="channel" /> -->

  <Article id="my-article" title="Article Title" :likes="50" :isPublished="true" />
</template>

<script>
// import Greet from "./components/Greet.vue";
import Article from "./components/Article.vue";
export default {
  name: 'App',
  components: {
    // Greet,
    Article,
  },
  data() {
    return {
      name: "Henry",
      channel: "Codevolution",
    };
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
