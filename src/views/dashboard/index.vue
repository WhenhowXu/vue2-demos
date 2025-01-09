<template>
  <div class="vd-page">
    <div class="vd-page_main">
      <h3>DASHBOARD</h3>
      <div style="width: 100%; height: 100%;border: 1px solid #ccc;">
        <BaseChart :options="options" />
      </div>
    </div>
  </div>
</template>

<script>
import { BaseChart } from '@/components/base'
export default {
  name: 'Dashboard',
  components: {
    BaseChart
  },
  data() {
    return {
      options: {
        tooltip: {
          trigger: 'item'
        },
        legend: {
          top: '5%',
          left: 'center'
        },
        series: [
          {
            name: 'Access From',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            itemStyle: {
              borderRadius: 10,
              borderColor: '#fff',
              borderWidth: 2
            },
            label: {
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 40,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 1048, name: 'Search Engine' },
              { value: 735, name: 'Direct' },
              { value: 580, name: 'Email' },
              { value: 484, name: 'Union Ads' },
              { value: 300, name: 'Video Ads' }
            ]
          }
        ]
      }
    }
  }
}
</script>
