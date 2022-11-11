<template>
  <div class="container ">
    <form class="loginForm " v-on:submit="handleSignIn">
      <label>Username:</label>
      <input type="text" placeholder="username" v-model="input.login"/>
      <label>Password:</label>
      <input type="password" placeholder="password" v-model="input.password"/>
      <span v-if="emptyCredentials">You must fill both fields!!!</span>
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>

<script>
export default {
  name: 'SignUpPage',
  data() {
    return {
      input: {
        login: null,
        password: null,
      },
      emptyCredentials: false,
    };
  },

  methods: {
    async handleSignIn(event) {
      event.preventDefault();
      if( this.input.login == null || this.input.password == null){
        this.emptyCredentials = true;
        var self = this; // TODO: why var?
        setTimeout(function () {
          self.emptyCredentials = false; // TODO: you can solve this in a better way.
        }, 3000);
      } else {
        try {
        await this.$store.dispatch("load_token", this.input);
        this.$router.push({ path: "/sports" });
      } catch (err) {
        throw new Error(err); // TODO: in catch we do not throw another exception as catch is used to handle them.
      }
      }
    },

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.container {
  width:100%;
  height:100vh;
  display:flex;
  justify-content: center;
  align-items: center;
  background-color:rgba(221, 131, 14, 0.648)
}
.loginForm {
  width: 400px;
  display:flex;
  flex-direction: column;
  align-items: center;
  background-color: turquoise;
  border-radius:12px;
}
label {
  font-size:1.4rem;
  margin-top:20px;
}
input {
  width: 200px;
  height:30px;
  border-radius:6px;
  margin-top:15px;
  padding-left:10px;
}
button {
  margin-top:20px;
  width:80px;
  height:30px;
  border-radius:8px;
  background-color:green;
  cursor:pointer;
  color:white;
  margin-bottom: 20px;
}
button:hover {
  background-color:rgb(48, 242, 48);
}
span {
  margin-top:10px;
}
</style>
