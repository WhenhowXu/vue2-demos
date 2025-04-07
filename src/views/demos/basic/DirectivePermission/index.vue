<template>
  <a-space>
    <a-button>正常按钮</a-button>
    <a-button type="primary">正常按钮</a-button>
  </a-space>
</template>

<script>
export default {
  data() {
    return {
      keywords: '',
      highlightWords: '',
      dataSource: [
        { name: '张三', address: '湖北省武汉市书院路51号' },
        { name: '李四', address: '北京市东城区王府井320号' },
        { name: '东方索索', address: '湖北省江夏区黄龙山地铁小镇' }
      ]
    }
  },
  methods: {
    search(value) {
      this.highlightWords = value || ''
    }
  }
}
</script>
