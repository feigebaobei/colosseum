<template>
  <div class="tabSelect">
    <tab :tabs="tabs" :defaultTabValue="'address'">
      <div slot="address">address</div>
      <div slot="subject">subject</div>
      <div slot="three">
        <mul-class-select v-if="showData.address.length" :showData="showData.address"></mul-class-select>
        <!-- <mul-class-select :showData="showData.subject"></mul-class-select> -->
      </div>
      <div slot="four">four</div>
    </tab>
  </div>
</template>

<script>
import tab from './tab.vue'
import mulClassSelect from './mulClassSelect.vue'
// import oasis from '@/lib/api.oasis.js'
export default {
  props: {
    tabs: {
      type: Array,
      default () {
        return [
          {
            text: '地址',
            value: 'address'
          },
          {
            text: '科室',
            value: 'subject'
          },
          {
            text: '温度',
            value: 'temp'
          }
        ]
      }
    },
    data: {
      type: Object,
      default () {
        return Object.create(null)
      }
    },
    isAccumulation: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      // tabs: [
      //   {
      //     text: '地址',
      //     value: 'address'
      //   },
      //   {
      //     text: '科室',
      //     value: 'subject'
      //   },
      //   {
      //     text: 'three text',
      //     value: 'three'
      //   },
      //   {
      //     text: 'four text',
      //     value: 'four'
      //   }
      // ],
      // allData: {
      //   // address: [],
      //   // subject: []
      // },
      showData: {
        // address: [],
        // subject: []
      },
      selectReault: {
        address: {},
        subject: {}
      }
    }
  },
  computed: {
    // showData () {
    //   this.allData.address.forEach((item, index, arr) => {
    //     // console.log(item)
    //     for (let key in item) {
    //       console.log(key)
    //     }
    //     // this.showData.address = item
    //   }, this)
    // }
  },
  watch: {
    // handler (newValue, oldValue) {

    // },
    // deep: true
  },
  components: {
    tab,
    mulClassSelect
  },
  methods: {
    init () {
      let obj0 = Object.create(null)
      let obj1 = Object.create(null)
      let obj2 = Object.create(null)
      this.tabs.forEach((item, index, arr) => {
        obj0[item.value] = []
        obj1[item.value] = []
        obj2[item.value] = []
      }, this)
      this.allData = Object.assign(Object.create(null), obj0)
      this.showData = Object.assign(Object.create(null), obj1)
      this.selectReault = Object.assign(Object.create(null), obj2)
    },
    getProvince () {
      // let info = {}
      // oasis.postProvinceData(info).then(response => {
      //   let tempArr = []
      //   response.data.forEach((item, index, arr) => {
      //     let obj = Object.create(null)
      //     obj.areacode = item.areacode
      //     obj.text = item.areaname
      //     obj.child = []
      //     obj.parentAreaCode = ''
      //     if (item.areaname.indexOf('省') > -1 || item.areaname.indexOf('区') > -1) {
      //       obj.isDetail = false
      //     } else {
      //       obj.isDetail = true
      //     }
      //     tempArr.push(obj)
      //   }, this)
      //   this.allData.address.push(tempArr)
      // }).catch(error => {
      //   console.log(error)
      // })
      this.$axios({
        method: 'post',
        url: '/testback/dept/all',
        data: {
          auth: {'crcstring': 1540949122959, 'channel': 'local.oasisapp.cn:81'}
        }
      }).then(response => {
        console.log(response)
      }).catch(error => {
        console.log(error)
      })
    },
    // 重新计算需要展示的数据
    calcShowData (item) {
      // 当前选中的元素
    }
  },
  created () {
    this.init()
  },
  mounted () {
    this.getProvince()
  }
}
</script>

<style lang="less" scoped>
.tabSelect {
  height: 100vh;
}
</style>
