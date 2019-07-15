<template>
  <div class="confusion">
    confusion
    <router-link to="/default" class="active">default</router-link>
    <router-link to="/mock">mock</router-link>
    <div class="content">
        <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  props: {},
  data () {
    return {
    }
  },
  computed: {
  },
  components: {
  },
  methods: {},
  created () {},
  mounted () {}
}
</script>

<style lang="sass" scoped>
.confusion
  .active
    color: red;
    background-color: #809;
</style>
