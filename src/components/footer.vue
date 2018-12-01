<template>
  <footer class="footer">
    <p>second</p>
    <p>first</p>
<<<<<<< Updated upstream
    <p>three three</p>
=======
    <p>three</p>
>>>>>>> Stashed changes
    <h2>footer footer footer footer footer footer footer footer </h2>
  </footer>
</template>

<script>
export default {
  data: function () {
    return {}
  },
  methods: {
    handleScroll () {
      console.log('23')
      console.log(window.scrollY)
    }
  },
  mounted () {
    // window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style>
  .footer{
    background: #333;
    color: #999;
  }
</style>
