<template>
  <div ref="chartRef" v-resize="t_resize" class="base-chart" />
</template>
<script>
import * as echarts from 'echarts'
import { throttle } from 'lodash-es'

export default {
  name: 'BaseChart',
  props: {
    theme: { type: String, default: 'light' },
    options: { type: Object, default: () => ({}) }
  },
  data() {
    this.t_resize = throttle(this.resize, 400)
    return {
      chart: null
    }
  },
  mounted() {
    this.renderChart()
  },
  beforeDestroy() {
    this.chart && this.chart.dispose()
  },
  methods: {
    renderChart() {
      this.chart = echarts.init(this.$refs.chartRef, this.theme)
      this.chart.setOption(this.options)
    },
    resize() {
      this.chart?.resize?.()
    }
  }
}
</script>
<style lang="less" scoped>
.base-chart {
  width: 100%;
  height: 100%;
}
</style>
