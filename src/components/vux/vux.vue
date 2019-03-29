<template>
  <div class="vux">
    vux
    <icon type="success"></icon>
    <group>
      <cell title="title" value="value"></cell>
    </group>
    <x-switch title="开关" v-model="show"></x-switch>
    <popup v-model="show" position="right">
      <div style="width:500px;">
        haha
      </div>
    </popup>
    <group>
      <datetime v-model="dateValue" :placeholder="'Please'">
      </datetime>
      <datetime v-model="dateValue" :placeholder="'Please select'" :min-year=2000 :max-year=2016 format="YYYY-MM-DD HH:mm" :title="'Years after 2000'"></datetime>
    </group>
    <hr>
    <picker :data='phone' v-model="phoneResult" @on-change='change'></picker>
    <!--
      :data的数组里的value请使用String。
    -->
    <picker :data='klass' v-model="klassResult" @on-change='change'></picker>
    <picker :data='years' v-model="yearResult" @on-change='change'></picker>
    <picker :data='more' v-model="moreResult" :columns="2" @on-change='change'></picker>
    <!-- <picker :data='more' :fixed-columns="4" :columns="0" v-model='moreResult' @on-change='change'></picker> -->
  </div>
</template>

<script>
import {Icon, Group, Cell, Popup, XSwitch, Datetime, Picker} from 'vux'
let years = []
for (var i = 2000; i <= 2030; i++) {
  years.push({
    name: i + '年',
    value: i + ''
  })
}
export default {
  props: [''],
  data () {
    return {
      show: false,
      dateValue: '',
      phone: [
        ['mi', 'iphone', 'huawei', 'sum'],
        ['mi', 'iphone', 'huawei', 'sum'],
        ['mi', 'iphone', 'huawei', 'sum'],
        ['mi', 'iphone', 'huawei', 'sum']
      ],
      phoneResult: ['sum', 'mi', 'iphone', 'huawei'],
      klass: [
        [
          {
            name: '1',
            value: 1213
          },
          {
            name: '2',
            value: 2
          },
          {
            name: '3',
            value: 3
          },
          {
            name: '4',
            value: 4
          }
        ],
        [
          {
            name: '1',
            value: 1
          },
          {
            name: '2',
            value: 2
          },
          {
            name: '3',
            value: 3
          },
          {
            name: '4',
            value: 4
          }
        ],
        [
          {
            name: '1',
            value: 1
          },
          {
            name: '2',
            value: 2
          },
          {
            name: '3',
            value: 3
          },
          {
            name: '4',
            value: 4
          }
        ]
      ],
      klassResult: [],
      years: [years, years],
      yearResult: [''],
      // more: [
      //   {
      //     name: '中国',
      //     value: 'china',
      //     parent: 0
      //   }, {
      //     name: '美国',
      //     value: 'USA',
      //     parent: 0
      //   }, {
      //     name: '广东',
      //     value: 'china001',
      //     parent: 'china'
      //   }, {
      //     name: '广西',
      //     value: 'china002',
      //     parent: 'china'
      //   }, {
      //     name: '美国001',
      //     value: 'usa001',
      //     parent: 'USA'
      //   }, {
      //     name: '美国002',
      //     value: 'usa002',
      //     parent: 'USA'
      //   }, {
      //     name: '广州',
      //     value: 'gz',
      //     parent: 'china001'
      //   }, {
      //     name: '深圳',
      //     value: 'sz',
      //     parent: 'china001'
      //   }, {
      //     name: '广西001',
      //     value: 'gz',
      //     parent: 'china002'
      //   }, {
      //     name: '广西002',
      //     value: 'sz',
      //     parent: 'china002'
      //   }, {
      //     name: '美国001_001',
      //     value: '0003',
      //     parent: 'usa001'
      //   }, {
      //     name: '美国001_002',
      //     value: '0004',
      //     parent: 'usa001'
      //   }, {
      //     name: '美国002_001',
      //     value: '0005',
      //     parent: 'usa002'
      //   }, {
      //     name: '美国002_002',
      //     value: '0006',
      //     parent: 'usa002'
      //   }
      // ],
      more: [
        {
          "name": "11月15日 今天",
          "value": "2018-11-15",
          "parent": "0"
        },
        {
          "name": "11月16日 周一",
          "value": "2018-11-16",
          "parent": "0"
        },
        {
          "name": "11月17日 周二",
          "value": "2018-11-17",
          "parent": "0"
        },
        {
          "name": "11月18日 周三",
          "value": "2018-11-18",
          "parent": "0"
        },
        {
          "name": "11月19日 周四",
          "value": "2018-11-19",
          "parent": "0"
        },
        {
          "name": "11月20日 周五",
          "value": "2018-11-20",
          "parent": "0"
        },
        {
          "name": "11月21日 周六",
          "value": "2018-11-21",
          "parent": "0"
        },
        {
          name: "19点",
          value: "2018-11-15 19",
          parent: "2018-11-15 19"
        },
        {
          "name": "20点",
          "value": "2018-11-15 20",
          "parent": "2018-11-15 20"
        },
        {
          "name": "21点",
          "value": "2018-11-15 21",
          "parent": "2018-11-15 21"
        },
        {
          "name": "22点",
          "value": "2018-11-15 22",
          "parent": "2018-11-15 22"
        },
        {
          "name": "23点",
          "value": "2018-11-15 23",
          "parent": "2018-11-15 23"
        },
        {
          "name": "0点",
          "value": "2018-11-15 0",
          "parent": "2018-11-15 0"
        },
        {
          "name": "1点",
          "value": "2018-11-15 1",
          "parent": "2018-11-15 1"
        },
        {
          "name": "2点",
          "value": "2018-11-15 2",
          "parent": "2018-11-15 2"
        },
        {
          "name": "3点",
          "value": "2018-11-15 3",
          "parent": "2018-11-15 3"
        },
        {
          "name": "4点",
          "value": "2018-11-15 4",
          "parent": "2018-11-15 4"
        },
        {
          "name": "5点",
          "value": "2018-11-15 5",
          "parent": "2018-11-15 5"
        },
        {
          "name": "6点",
          "value": "2018-11-15 6",
          "parent": "2018-11-15 6"
        },
        {
          "name": "7点",
          "value": "2018-11-15 7",
          "parent": "2018-11-15 7"
        }],


      moreResult: ['']
    }
  },
  computed: {
  },
  components: {
    Icon,
    group: Group,
    Cell,
    Popup,
    XSwitch,
    Datetime,
    Picker
  },
  methods: {
    change (v) {
      console.log(v)
    }
  },
  mounted () {}
}
</script>

<style lang="scss" scoped>
</style>
