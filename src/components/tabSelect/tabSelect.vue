<template>
  <div class="tabSelect">
    <tabbox :data="data"></tabbox>
    <contbox :data="data"></contbox>
  </div>
</template>

<script>
import contbox from './contbox.vue'
import tabbox from './tabbox.vue'
export default {
  props: [''],
  data () {
    return {
      data: [
        {
          text: 'text0',
          value: 'value0',
          cont: [
            {
              text: 'text0-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text0-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text0-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text0-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text0-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text1-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text2-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text3-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text4-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                }
              ]
            }
          ]
        },
        {
          text: 'text1',
          value: 'value1',
          cont: [
            {
              text: 'text1-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text1-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text2-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text3-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text4-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                }
              ]
            }
          ]
        },
        {
          text: 'text1',
          value: 'value1',
          cont: [
            {
              text: 'text1-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text1-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text2-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text3-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text4-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                }
              ]
            }
          ]
        },
        {
          text: 'text1',
          value: 'value1',
          cont: [
            {
              text: 'text1-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text1-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text1-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text2-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text2-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text3-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text3-0-0',
                  value: 'value0-0-0'
                }
              ]
            },
            {
              text: 'text4-0',
              value: 'value0-0',
              child: [
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                },
                {
                  text: 'text4-0-0',
                  value: 'value0-0-0'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  computed: {
  },
  components: {
    tabbox,
    contbox
  },
  mounted () {}
}
</script>

<style lang="sass" scoped>
</style>
