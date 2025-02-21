<template>
  <div>
    <a-input-search
      v-model="keywords"
      placeholder="请输入关键字搜索"
      enter-button
      @search="search"
    />
    <ul>
      <li v-for="(item, index) in dataSource" :key="index">
        <span v-highlight="highlightWords">{{ item.name }}</span>
        <a-divider type="vertical" />
        <span v-highlight="highlightWords">{{ item.address }}</span>
      </li>
    </ul>
  </div>
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
