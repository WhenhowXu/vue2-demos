<template>
  <base-tree
    :tree-data="treeData"
    :replace-fields="replaceFields"
    style="width: 400px"
  >
    <template #tool="{ row }">
      <vxe-button v-if="row.type > 1" @click="onDelete(row)">删除</vxe-button>
      <vxe-button v-if="row.type > 0" @click="onAdd(row)">新增</vxe-button>
      <vxe-button v-if="row.type > 0" @click="onEdit(row)">编辑</vxe-button>
    </template>
    <template #title="{ row }">{{ row.name }} {{ row.id }}</template>
  </base-tree>
</template>
<script>
export default {
  name: "VirtualTree",
  data() {
    return {
      treeData: [
        {
          name: "1233",
          id: "1",
          type: 1,
          children: [{ pId: "1", name: "A12321", id: "1-1", type: 2 }],
        },
        ...Array.from({ length: 500 }).map((_, index) => ({
          name: "其它节点",
          id: `other-${index}`,
        })),
      ],
      replaceFields: {
        title: "name",
        key: "id",
        children: "children",
      },
    };
  },
  methods: {
    onDelete(row) {
      this.$message.info(`删除: ${row.name}`);
    },
    onAdd(row) {
      this.$message.info(`新增: ${row.name}`);
    },
    onEdit(row) {
      this.$message.info(`编辑: ${row.name}`);
    },
  },
};
</script>
