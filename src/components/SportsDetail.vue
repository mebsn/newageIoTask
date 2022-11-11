<template>
  <div class="container sharedClass">
    <div class="logOut sharedClass" @click="handleLogOut">Log out</div>
    <div class="info sharedClass">{{ sportToDisplay[0].c }}</div>
    <div class="goBack sharedClass" @click="handleGoBack">Go Back To Sports</div>
  </div>
</template>

<script>
export default {
  name: "SportsDetail",
  data() {
    return {
      sportToDisplay: this.$store.state.sports.sports.filter( // TODO: find fill be better.
        (x) => x.id == this.$route.params.id // TODO: you could filter the data by slug from url ad well.
      ),
    };
  },
  methods: {
    async handleLogOut() {
      await this.$store.dispatch("user/logout"); // TODO: repetitive logic can be a dispatcher or mixin
      // this.$router.push({ path: "/" });
    },
    handleGoBack() {
        this.$router.push({ path: "/sports" });
    }
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sharedClass{
    display: flex;
  justify-content: center;
  align-items: center;
}
.container {
  width: 100%;
  height: 100vh;
  flex-direction: column;
  background-color: rgba(12, 82, 9, 0.648);
}
.logOut {
  width: 100px;
  height: 30px;
  background-color: rgb(100, 0, 40);
  color: white;
  border-radius: 6px;
  position: absolute;
  top: 20px;
  right: 20px;
  cursor: pointer;
}
.logOut:hover {
  background-color: rgb(240, 73, 140);
}
.goBack {
    width:160px;
    height:30px;
    color:white;
    border-radius:6px;
    background-color: blue;
    cursor:pointer;
    margin-top:30px;
}
.goBack:hover {
    background-color: rgb(82, 82, 219);
}
.info {
    color:white;
    font-size:2.0rem;
    width:300px;
    height:70px;
    border-radius:12px;
    border:2px solid white;
    background-color:black;
}
</style>
