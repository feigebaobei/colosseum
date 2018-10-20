<template>
  <div class="props">
    props
    <p>first: {{first}}</p>
    <p>second: {{second}}</p>
    <p>three: {{three}}</p>
    <p>four: {{four}}</p>
  </div>
</template>

<script>
export default {
  // props: ['data'],
  props: {
    first: String,
    second: Array,
    three: Object,
    four: {
      type: Number,
      required: false,
      default: 100
    }
  },
  data () {
    return {}
  },
  computed: {
  },
  components: {},
  methods: {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
