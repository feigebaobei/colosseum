<template>
  <div>
    <p>bar</p>
    <button @click="cevent">cevent</button>
    <p>{{a}}</p>
    <p>{{b}}</p>
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
      this.obj.a = 'aa'
    }
  }
}
</script>
