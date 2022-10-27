<template>
  <div class="container sharedClass">
    <div class="logOut sharedClass" @click="handleLogOut">Log out</div>
    <h3>Our Sports List:</h3>
  <ol >
    <li class="sharedClass" v-for="sport in getSportsArray" :key="sport.id" @click="handleDetails(sport.c , sport.id)">
      {{sport.n}}
    </li>
  </ol>
  </div>
</template>

<script>
export default {
  name: "SportsPage",
  data() {
    return {
      sportsData: this.$store.state.sports.sports,
    };
  },
  async created() {
    if (!window.localStorage.getItem("Sports")) {
      await this.$store.dispatch("LOAD_SPORTS");
    } else {
      this.$store.state.sports.sports = JSON.parse(window.localStorage.getItem("Sports"));
    }
  },
  methods: {
    async handleLogOut(){
     await this.$store.dispatch("LOGOUT");
     this.$router.push({ path: "/" });
    },
    handleDetails(x, y) {
      window.localStorage.setItem("dataToDisplay" , y )
      this.$router.push({  path: `/sports/${x}` });
    }
  },
  computed: {
    getSportsArray() {
      return this.$store.state.sports.sports;
    },
  }
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
  flex-direction: column;
  background-color:rgba(221, 131, 14, 0.648)
}
li {
  width:200px;
  height:35px;
  border:2px solid black;
  border-radius:6px;
  cursor:pointer;
  margin-top:10px;
}
li:nth-child(odd) {
    color: white;  
    margin-right:80px;
    background-color:blueviolet;
    
}
li:nth-child(odd):hover {
  background-color:rgb(175, 116, 231)
}
li:nth-child(even) {
    color: black;   
    margin-left:80px;
    background-color:teal;
}
li:nth-child(even):hover {
  background-color:rgb(9, 230, 230)
}
.logOut {
  width:100px;
  height:30px;
  background-color: rgb(100, 0, 40);
  color:white;
  border-radius:6px;
  cursor:pointer;
  position:absolute;
  top:20px;
  right:20px;
}
.logOut:hover {
  background-color: rgb(240, 73, 140);
}
</style>
