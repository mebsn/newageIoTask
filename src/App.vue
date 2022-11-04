<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  async created() {
    // TODO: Would be better if you move this logic in mutation or dispatcher.
    // TODO: do you know vue helper functions? will be better to use it as well.
    if (window.localStorage.getItem("Token")) {
      this.$store.state.user.token = window.localStorage.getItem("Token");
      this.$router.push({ path: "/sports" });
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin:0;
}
body {
  margin:0;
}
</style>
