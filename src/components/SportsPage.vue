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
      sportsData: this.$store.state.sports.sports, // TODO: taking this data from helper function would've shorten the code an you would not have to declare data variable.
    };
  },
   created() {
    this.$store.dispatch("load_sports");
    // if (!window.localStorage.getItem("Sports")) { // TODO: repetitive code which can be unified in store module.
    //    this.$store.dispatch("load_sports");
    // } else {
    //   // TODO: do you know the difference between assigning and referencing?
    //   this.$store.state.sports.sports = JSON.parse(window.localStorage.getItem("Sports")); // TODO: you can use Vue helper functions to shorten this line of code
    // }
  },
  methods: {
    async handleLogOut(){
     await this.$store.dispatch("logout");
      // TODO: this action can go inside the dispatcher.
    },
    handleDetails(x, y) {
      window.localStorage.setItem("dataToDisplay" , y ); // TODO: why? you can filter the data in details page from store & you already have the id of the sport in route params.
      this.$router.push({  path: `/sports/${x}` });
    }
  },
  computed: {
    getSportsArray() {
      return this.$store.state.sports.sports; // TODO: must be a getter and better will be to use helper functions.
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
