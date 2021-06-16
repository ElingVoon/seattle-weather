<template lang="html">
  <h1>Contact Us</h1>
  <form>  <!-- // v-model directive 2-way data binding -->
    <label>Name:</label>
    <input type="name" required v-model="name">
    <label>Email:</label>
    <input type="email" requried v-model="email">
    <label>Role:</label>
    <select v-model="role">
      <option value="developer">Web Developer</option>
      <option value="designer">Web Designer</option>
      <option value="none">None of the above</option>
    </select>

    <div class="terms">
      <input type="checkbox" v-model="terms" required>
      <label>Accept term and conditions</label>
    </div>
  </form>
  <p>Email: {{ email }}</p>
  <p>Name: {{ name }}</p>
  <p>Role: {{ role }}</p>
  <p>Terms accepted: {{ terms }}</p>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      name: '',
      role: '',
      terms: false //boolean value
    }
  }
}
</script>

<style lang="css" scoped>
  form {
    max-width: 420px;
    margin: 30px auto;
    background: white;
    text-align: left;
    padding: 40px;
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
</style>
