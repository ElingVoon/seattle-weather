<template lang="html">
  <div class="main">
    <h1 >Contact Us</h1>
    <form @submit.prevent="handleSubmit">  <!-- // v-model directive 2-way data binding -->
      <label>Name</label>
      <input type="name" v-model="name" required>

      <label>Email</label>
      <input type="email" v-model="email" requried>
      <div v-if="emailError" class="error">{{ emailError }}
      </div>

      <label>Role</label>
      <select v-model="role">
        <option value="developer">Web Developer</option>
        <option value="designer">Web Designer</option>
        <option value="none">None of the above</option>
      </select>

      <div class="terms">
        <input type="checkbox" v-model="terms" required>
        <label>Accept term and conditions</label>
      </div>
      <div class="submit">
        <button type="button" name="button">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      email: '',
      role: '',
      terms: false, //boolean value
      emailError:''
    }
  },
  methods: {
    handleSubmit() {
      //validate form
      this.emailError = this.email.length > 7 ?
        '': 'Please enter a valid email'

      if(!this.emailError) {
        console.log('email: ', this.email)
      }
    }
  }
}
</script>

<style lang="css" scoped>
  form {
    /* max-width: 420px; */
    margin: 30px auto;
    background: white;
    text-align: left;
    border-radius: 10px;
  }
  label {
    color: #444;
    display: inline-block;
    margin: 25px 0 15px;
    font-size: .7rem;
    text-transform: uppercase;
    letter-spacing: 1px;
    font-weight: bold;
  }
  input, select {
    display: block;
    padding: 10px 6px;
    width: 100%;
    box-sizing: border-box;
    border: none;
    border-bottom: 1px solid #ddd;
    color: #555;
  }
  input[type="checkbox"] {
    display: inline-block;
    width: 16px;
    margin: 0 10px 0 0;
    position: relative;
    top: 2px;
  }
  button {
    background: #0b6dff;
    padding: 10px 20px;
    margin-top: 20px;
    color: white;
    border-radius: 10px;
  }
  .submit {
    text-align: center;
  }
</style>
