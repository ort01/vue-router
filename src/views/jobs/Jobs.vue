<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id" class="job">
    <router-link :to="{ name: 'JobDetails', params: { id: job.id } }">
      <h2>{{ job.title }}</h2>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "Jobs",
  props: {},
  data: () => {
    return {
      jobs: [
        { title: "UX Designer", id: 1, details: "designer" },
        { title: "Web Developer", id: 2, details: "developer" },
        { title: "Vue Developer", id: 3, details: "front-end developer" },
      ],
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.job h2 {
  background: #f4f4f4;
  padding: 20px;
  border-radius: 10px;
  margin: 10px auto;
  max-width: 600px;
  cursor: pointer;
  color: #444;
  transition: all 0.5s;
}
.job h2:hover {
  color: #42a1b9;
  background: #ddd;
}
a {
  text-decoration: none;
}
a:visited {
  color: inherit;
}
</style>