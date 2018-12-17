<template>
  <div class="downSelect">
    <p>{{msg}}</p>
    <form action="#">
      <input type="search">
      <button type="submit">submit</button>
      <button type="reset">reset</button>
    </form>
    <ds :data="list"></ds>
    <hr>
    <p>secondli</p>
    <!-- <first></first>
    <second></second> -->
  </div>
</template>

<script>
import ds from 'downselect' // 使用npm上的组件
// import {first, second} from 'secondli'
// import ds from '@/components/npmvue/downselect/downSelect.vue' // 使用本地开发的代码
export default {
  // props: [''],
  props: {
    msg: {
      type: String,
      default: function () {
        return 'props默认字段'
        // return '23'
      }
    }
  },
  data () {
    return {
      list: [
        {text: 'first', value: '0'},
        {text: 'second', value: '1'},
        {text: 'three', value: '2'},
        {text: 'four', value: '3'}
      ]
    }
  },
  computed: {
  },
  components: {
    ds
    // first,
    // second
  },
  methods: {},
  mounted () {
  }
}
</script>

<style lang="scss" scoped>
.downSelect {
  color: #923;
}
</style>
