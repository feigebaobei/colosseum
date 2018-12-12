<template>
  <div class="responsive">
    <div v-for="(itemP, index) in dataBox">
      <span v-html="itemP.text"></span>
    </div>
    <button @click="modify">modify</button>
  </div>
</template>

<script>
export default {
  props: [''],
  data () {
    return {
      dataBox: []
    }
  },
  computed: {
  },
  components: {
  },
  methods: {
    modify () {
      let obj = {}
      let arrTemp = []
      for (let i = 0; i < 3; i++) {
        obj.text = i
        obj.value = i
        obj.cont = []
        arrTemp.push(obj)
      }
      this.dataBox = arrTemp
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.responsive {}
</style>
