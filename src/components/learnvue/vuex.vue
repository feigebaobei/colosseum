<template>
  <div class="vuex">
    <p>vuex</p>
    <p>color: {{color}}</p>
    <!-- <p>age: {{age}}</p> -->
    <!-- <p>name: {{name}}</p> -->
    <p>age: {{count}}</p>
    <p>color: {{cl}}</p>
    <p>2倍年龄: {{calcAge}}</p>
    <button @click="addAge">add age</button>
    <button @click="addAge2">add 2 age</button>
    <button @click="getAllData">getAllData</button>
  </div>
</template>

<script>
// import { mapState, mapGetters } from 'vuex'
import { mapGetters } from 'vuex'
export default {
  props: [''],
  data () {
    return {
      // color: this.$store.state.color,
      // cl: null
    }
  },
  // 从state里得到数据
  // computed: {
  //   name () {
  //     return this.$store.state.name
  //   },
  //   age () {
  //     return this.$store.state.age
  //   }
  // },
  // 使用mapState
  // computed: mapState({
  //   count: state => state.age,
  //   cl: state => state.color,
  //   calcAge () {
  //     return this.$store.state.age * 2
  //   }
  // }),
  // 使用...mapState
  // computed: {
  //   ...mapState({
  //     count: state => state.age,
  //     cl: state => state.color,
  //     calcAge (state) {
  //       // 传入state参数与使用this.$store得到state一样。
  //       return state.age * 2
  //     }
  //   })
  // },
  // 从getters里得到数据
  // computed: {
  //   count () {
  //     return this.$store.getters.getAge
  //   },
  //   cl () {
  //     return this.$store.getters.getColor
  //   },
  //   calcAge () {
  //     return this.$store.getters.getAgeDouble
  //   }
  // },
  // 使用mapGetters
  // computed: mapGetters({
  //   // count: this.$store.getters.getAge
  //   count: getAge
  //   // cl: this.$store.getters.getColor,
  //   // calcAge: this.$store.getters.getAgeDouble
  // }),
  // 使用...mapGetters
  computed: {
    // ...mapGetters(['color']),
    ...mapGetters({
      // count: 'getAge', // 不使用命名空间的访问方式
      // cl: 'getColor',
      // calcAge: 'getAgeDouble'
      // 使用login里的状态
      // count: 'login/getAge',
      // cl: 'login/getColor', // 使用命名空间的访问方式
      // calcAge: 'login/getAgeDouble'
      // 使用car里的状态
      count: 'car/getAge',
      cl: 'car/getColor',
      calcAge: 'car/getAgeDouble'
    }),
    color () {
      // return this.cl
      console.log(this)
      // return this.$store.state.login.color
      return this.$store.getters['login/color']
    }
  },
  components: {
  },
  methods: {
    addAge () {
      this.$store.commit('addAge', {num: 1})
    },
    addAge2 () {
      // this.$store.commit('key')
      // this.$store.commit('item')
      this.$store.commit('ft')
    },
    getAllData () {
      console.log(this.$store)
      this.$store.dispatch('car/allData')
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.vuex {}
</style>
