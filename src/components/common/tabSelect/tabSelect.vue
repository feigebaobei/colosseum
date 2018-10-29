<template>
  <div class="tabSelect">
    <tabli :tabs="tabs" :customClass="'ha'" :callback="'getLevelTopData'" @getLevelTopData="getLevelTopData">
      <div class="cont" slot="address">address
        <div class="levelItem" v-for="(arr, index) in showData" :key="index">
          <columns :height="'106px'" :arrData="arr" :eventtype="'getNextLevelData'" @getNextLevelData="getNextLevelData"></columns>
        </div>
        <!-- <div class="levelItem">
          <columns :height="'106px'" :arrData="[{text: 'str1-0'},{text: 'str1-1'},{text: 'str1-2'},]" :eventtype="'ev'" @ev="ev"></columns>
        </div>
        <div class="levelItem">
          <columns :height="'106px'" :arrData="[{text: 'str1-4'},{text: 'str1-3'},{text: 'str1-5'},]" :eventtype="'ev'" @ev="ev"></columns>
        </div> -->
      </div>
      <div slot="subject">subject</div>
      <div slot="temp">temp</div>
    </tabli>
    <hr>
  </div>
</template>

<script>
import tabli from '../tabli/tabli.vue'
import columns from './columns.vue'
export default {
  props: [''],
  data () {
    return {
      tabs: [
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
      ],
      allData: {
        address: [
          {
            text: 'string text',
            value: 'only',
            id: '1,',
            child: [
              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1,',
                child: [
                  {
                    text: 'child2 string',
                    value: 'child2 value',
                    id: '1-1-1'
                  },
                  {
                    text: 'child2 string',
                    value: 'child2 value',
                    id: '1-1-1'
                  },
                  {
                    text: 'child2 string',
                    value: 'child2 value',
                    id: '1-1-1'
                  },
                  {
                    text: 'child2 string',
                    value: 'child2 value',
                    id: '1-1-1'
                  }
                ]
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              }
            ]
          },
          {
            text: 'string text',
            value: 'only',
            id: '2,',
            child: [
              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              }
            ]
          },
          {
            text: 'string text',
            value: 'only',
            id: '3,',
            child: [
              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              }
            ]
          },
          {
            text: 'string text',
            value: 'only',
            id: '4,',
            child: [
              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              },

              {
                text: 'child1 string',
                value: 'child1 value',
                id: '1-1'
              }
            ]
          }
        ],
        subject: [],
        temp: []
      },
      showData: [
        [],
        [],
        []
      ],
      selectedResult: {}
    }
  },
  computed: {
  },
  components: {
    tabli,
    columns
  },
  methods: {
    ev (obj) {
      console.log(obj)
    },
    getLevelTopData (obj) {
      // this.showData = this.allData.forEach(function (item, index, arr) {
      //   tempArr = item
      // }, this)
      // this.showData =
      let tempArr = []
      console.log(obj.value)
      // console.log(this.allData.address)
      // console.log(this.allData[obj.value])
      // console.log(this.allData['address'])
      this.allData[obj.value].forEach(function (item, index, arr) {
        let tempObj = Object.create(null)
        for (let key in item) {
          if (key !== 'child') {
            tempObj[key] = item[key]
          }
        }
        tempArr.push(obj)
      }, this)
      this.showData = tempArr
    },
    getNextLevelData (obj) {
      console.log('getNextLevelData', obj)
      this.addData.child.forEach((item, index, arr) => {
        console.log(this)
      }, this)
    }
  },
  created () {},
  mounted () {}
}
</script>

<style lang="scss" scoped>
.tabSelect {
  .cont {
    display: flex;
    overflow-x: scroll;
    .levelItem {
      width: 100%;
      flex-grow: 1;
      flex-shrink: 1;
    }
  }
}
</style>
