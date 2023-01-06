<template>
  <h1>Job Details Page</h1>
  <p>The Job ID is {{ id }}</p>
  <button @click="handleInfo">Route Info</button>
</template>

<script>
export default {
  name: "JobDetails",
  props: {},
  data() {
    return {
      id: this.$route.params.id,
    };
  },
  methods: {
    handleInfo() {
      console.log(this.$route.params.id);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>