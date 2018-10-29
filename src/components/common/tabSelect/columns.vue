<template>
  <div class="columns" :class="[{}]" :style="[heightCustom]">
    <span v-for="(item, index) in arrData" :key="index" v-html="item.text" v-on:click="trigger"></span>
  </div>
</template>

<script>
export default {
  props: {
    arrData: {
      type: Array,
      default () {
        return [
          {
            text: 'string0'
          },
          {
            text: 'string1string1string1'
          },
          {
            text: 'string2'
          },
          {
            text: 'string3'
          },
          {
            text: 'string4'
          },
          {
            text: 'string5'
          },
          {
            text: 'string6'
          }
        ]
      }
    },
    height: {
      type: String, // 数值加单位
      default: '100%'
    },
    eventtype: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    heightCustom () {
      let obj = Object.create(null)
      obj.height = this.height
      return obj
    }
  },
  components: {
  },
  methods: {
    trigger: function () {
      let obj = Object.create(null)
      this.$emit(this.eventtype, obj)
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.columns {
  display: flex;
  flex-direction: column;
  overflow-y: scroll;

}
</style>
