import Mock from 'mockjs'
const Random = Mock.Random

let data = []

for (let i = 0; i < 3; i++) {
  data.push({
    name: Random.string(3, 8)
  })
}

// Mock.mock('/data/index', 'post', data)
Mock.mock('/data/index', data)
