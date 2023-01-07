<template>
  <h1>Job Details Page</h1>
  <p>The Job ID is {{ id }}</p>
</template>

<script>
export default {
  name: "JobDetails",
  props: ["id"],
  data() {
    return {
      //   id: this.$route.params.id,
    };
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>