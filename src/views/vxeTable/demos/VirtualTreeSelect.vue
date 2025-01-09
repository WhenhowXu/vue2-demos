<template>
  <base-tree-select
    :tree-data="treeData"
    :replace-fields="replaceFields"
    style="width: 400px"
  >
    <template #title="{ row }">{{ row.name }}</template>
  </base-tree-select>
</template>
<script>
export default {
  name: 'VirtualTree',
  data() {
    return {
      treeData: [
        {
          name: '1233',
          id: '1',
          type: 1,
          children: [{ pId: '1', name: 'A123210', id: '1-1', type: 2 }]
        },
        ...Array.from({ length: 500 }).map((_, index) => ({
          name: `其它节点other-${index}`,
          id: `other-${index}`
        }))
      ],
      replaceFields: {
        title: 'name',
        key: 'id',
        children: 'children'
      }
    }
  },
  methods: {
    onDelete(row) {
      this.$message.info(`删除: ${row.name}`)
    },
    onAdd(row) {
      this.$message.info(`新增: ${row.name}`)
    },
    onEdit(row) {
      this.$message.info(`编辑: ${row.name}`)
    }
  }
}
</script>
