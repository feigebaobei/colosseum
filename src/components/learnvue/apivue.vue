<template>
  <div class="apivue">
    <p>{{firstName}} {{lastName}} aka {{alias}}</p>
    <h2>选项，组合</h2>
    <p>parent</p>
    <!-- <p>{{testparent}}</p> -->
    <p>mixins</p>
    <mixinsParent :color="colorData"></mixinsParent>
    <h2>extends</h2>
    <hr>
    <p>ref</p>
    <tr-row ref="tr"></tr-row>
    <ref-data-transfer ref="child" :data="'123data'"></ref-data-transfer>
    <button @click="getChildData">get child data</button>
    <button @click="setChildData">set child data</button>
    <hr>
    <p>bus通信</p>
    <div class="half">
      <p>left</p>
      <bus1></bus1>
    </div>
    <div class="half">
      <p>right</p>
      <bus2></bus2>
    </div>
    <hr>
    <p>provide</p>
      <bus1></bus1>
    <hr>
      <button>onBlur</button>
      <form action="#">
        <input type="search" @click="onBlur" ref="search">
      </form>
    <hr>
      <p>默认props</p>
      <prop :first="first" :second="second" :three="three"></prop>
    <hr>
      <p>computed</p>
      <computed></computed>
    <hr>
      <p>动态组件</p>
      <component :is="curComp"></component>
    <hr>
  </div>
</template>

<script>
import mixins from './mixinsParent.vue'
import trRow from './trRow.vue'
import refDataTransfer from './refDataTransfer.vue'
import bus1 from './bus1.vue'
import bus2 from './bus2.vue'
import prop from './props.vue'
import computed from './computed.vue'
import foo from '@/components/commen/foo.vue'
import bar from '@/components/commen/bar.vue'
export default {
  data: function () {
    return {
      firstName: 'Walter',
      lastName: 'White',
      alias: 'Heisenberg',
      colorData: 'red',
      // 测试porps属性
      first: 'string',
      second: [1, 2, 3],
      three: {k: 'v'},
      curComp: 'foo'
    }
  },
  // provide: {
  //   bar: 'demo'
  // },
  provide: () => {
    return {bar: 'haha'}
  },
  components: {
    mixinsParent: mixins,
    trRow,
    refDataTransfer,
    bus1,
    bus2,
    prop,
    computed,
    foo,
    bar
  },
  // computed: {
  //   testparent: function () {
  //     console.log(this.$parent)
  //     return this.$parent
  //   }
  // },
  methods: {
    getChildData: function () {
      let childData = this.$refs.child.getDataOther()
      console.log(childData)
    },
    setChildData: function (firstName) {
      this.$refs.child.setDataOther(firstName)
    },
    onBlur: function () {
      let search = this.$refs.search
      search.blur()
    }
  },
  mounted () {
    let ref = this.$refs.tr
    console.log(ref)
  }
}
</script>

<style>
  .apivue {
  }
  .half {
    display: inline-block;
    width: 50%;
    height: auto;
    border: 1px solid #928;
    box-sizing: border-box;
  }
</style>
