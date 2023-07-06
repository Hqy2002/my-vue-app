
<template>
  <div class="register">
    <h2>Register</h2>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input type="text" id="name" v-model="name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="email" required>
      </div>
      <div class="form-group">
        <label for="password">Password</label>
        <input type="password" id="password" v-model="password" required>
      </div>
      <button @click.prevent="register">Register</button>
      <router-link to="/login">Login</router-link>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      password: ''
    }
  },
  methods: {
    register() {
      // add your register logic here
      console.log('register', this.name, this.email, this.password)
    }
  }
}
</script>
