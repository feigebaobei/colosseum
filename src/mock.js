import Mock from 'mockjs'
const Random = Mock.Random

let name = [] // 模板

for (let i = 0; i < 3; i++) { // 在模板中生成多条数据
  name.push({
    name: Random.string(3, 8),
    age: Mock.mock({
      'number|1-100': 100
    })
  })
}
let age = {
  ages: Mock.mock({
    'number|1-100': 100
  })
}

Mock.setup({
  timeout: '200' // 2s-2s后返回数据
})
Mock.mock('/data/name', 'post', name)
Mock.mock('/data/age', 'get', age)
