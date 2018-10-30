<template>
  <div>
    <p>bar</p>
    <button @click="cevent">cevent</button>
    <p>{{obj.a}}</p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      obj: {
        a: 'a',
        b: 'b',
        c: 'c'
      }
    }
  },
  computed: {
    a: function () {
      return this.obj.a + 'asd'
    },
    b: function () {
      return this.a + '2'
    }
  },
  components: {},
  methods: {
    cevent: function () {
      for (let i = 0; i < 133; i++) {
        // this.obj.a = i
        this.$nextTick(() => {
          console.log(i)
          this.obj.a = i
        })
      }
    }
  }
}
</script>
