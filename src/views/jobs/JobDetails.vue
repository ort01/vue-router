<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <p>The Job ID is {{ id }}</p>
    <p>Details of the job: {{ job.details }}</p>
  </div>
  <div v-else>
    <p>Loading....</p>
  </div>
</template>

<script>
export default {
  name: "JobDetails",
  props: ["id", "job"],
  data() {
    return {
      //   id: this.$route.params.id,
      job: null,
    };
  },
  mounted() {
    fetch(`http://localhost:3000/jobs/${this.id}`)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((error) => console.log(error.message));
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>