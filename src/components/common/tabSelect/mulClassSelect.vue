<template>
  <div class="mulClassSelect">
    <column :showDdata="showData" :eventType="'switchItem'" @switchItem="switchItem"></column>
  </div>
</template>

<script>
import column from './column.vue'
export default {
  props: {
    showData: {
      type: Array,
      default () {
        return []
      }
    },
    eventType: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      data: [
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string1',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string2',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        },
        {
          text: 'string3',
          k0: 'v0',
          k1: 'v1',
          k2: 'v2',
          k3: 'v3'
        }
      ]
    }
  },
  computed: {
  },
  components: {
    column
  },
  methods: {
    switchItem (obj) {
      console.log(obj)
      if (this.eventType) {
        this.$emit(this.eventType, obj)
      } else {
      }
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="less" scoped>
.mulClassSelect {}
</style>
