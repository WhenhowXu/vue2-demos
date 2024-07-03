<template>
  <div class="base-tree-wrapper">
    <vxe-table
      ref="xTree3"
      show-overflow
      row-key
      border="inner"
      height="100%"
      :row-config="{ isHover: true }"
      :show-header="false"
      :data="treeData"
      :checkbox-config="{ labelField: 'name' }"
      :tree-config="{
        transform: true,
        accordion: true,
        line: true,
        iconOpen: 'vxe-icon-square-minus-fill',
        iconClose: 'vxe-icon-square-plus-fill',
      }"
    >
      <vxe-column tree-node>
        <template #default="{ row }">
          <span>
            <template v-if="row.type === 'folder'">
              <i
                class="tree-node-icon"
                :class="
                  $refs.xTree3.isTreeExpandByRow(row)
                    ? 'vxe-icon-folder-open'
                    : 'vxe-icon-folder'
                "
              />
            </template>
            <template v-else>
              <i class="tree-node-icon vxe-icon-file-txt" />
            </template>
            <span>{{ row.name }}</span>
          </span>
        </template>
      </vxe-column>
      <vxe-column title="操作" width="60">
        <template #default="{ row }">
          <slot name="actions" :row="row" />
        </template>
      </vxe-column>
    </vxe-table>
  </div>
</template>
<script>
export default {
  name: 'BasicListTree',
  props: {
    showSearch: { type: Boolean, default: true }, // 开启搜索
    treeData: { type: Array, default: () => [] },
    activeRow: { type: Array, default: () => [] } // 当前选中项
  },
  created() {
    console.log(this.$attrs, this.props)
  }
}
</script>

<style lang="less" scoped>
.base-tree-wrapper {
  height: 100%;
}
.tree-node-icon {
  width: 24px;
  text-align: center;
}
</style>
