<template>
  <h1>Jobs</h1>
  <div v-for="job in jobs" :key="job.id">
    <h2>{{ job.title }}</h2>
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
</style>