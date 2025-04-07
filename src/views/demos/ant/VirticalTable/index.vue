<template>
  <ProTable :columns="columns" :data-source="dataSource" />
</template>
<script>
import ProTable from './ProTable.vue'
export default {
  components: { ProTable },
  data() {
    return {
      columns: [
        { dataIndex: 'name', title: '字段1', width: 120 },
        { dataIndex: 'name1', title: '字段2', width: 120 },
        { dataIndex: 'name2', title: '字段3', width: 120 },
        { dataIndex: 'name3', title: '字段4', width: 120 },
        { dataIndex: 'name4', title: '字段5', width: 120 },
        { dataIndex: 'name5', title: '字段5', width: 120 },
        { dataIndex: 'name6', title: '字段5', width: 120, fixed: 'right' }
      ],
      dataSource: Array.from({ length: 500 }).map((_, index) => ({
        id: index,
        name: 'KKKKKKKKKKKKKKKKK'
      }))
    }
  }
}
</script>
