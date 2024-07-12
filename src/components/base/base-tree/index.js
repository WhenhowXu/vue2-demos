import { Table, Column } from 'vxe-table'
const getDefaultReplaceFields = () => ({
  'title': 'title',
  'key': 'key',
  'children': 'children',
  'parentKey': 'parentKey'
})
export default {
  name: 'BaseTree',
  props: {
    showSearch: { type: Boolean, default: true }, // 是否支持搜搜
    treeData: { type: Array, default: () => [] }, // 树数据源
    loading: { type: Boolean, default: false }, // 树加载状态
    replaceFields: { type: Object, default: () => getDefaultReplaceFields() }, // 字段替换
    actionColumnProps: { type: Object, default: () => ({}) }, // 操作列属性配置
  },
  render(h) {
    const { $props, $scopedSlots, $attrs } = this
    console.log(this, 'this')
    const { treeData, replaceFields, loading, actionColumnProps } = $props
    const _replaceFields = Object.assign(getDefaultReplaceFields(), replaceFields)
    return h('div', {}, [
      // 搜索区域

      // 树结构区域
      h('div', { class: 'base-tree-wrapper', style: { height: '100%', overflow: 'hidden' } }, [
        h(Table, {
          props: {
            data: treeData,
            height: '100%',
            loading,
            showHeader: false,
            showOverflow: 'tooltip', // 过长显示省略号（tooltip 显示）
            treeConfig: {
              transform: false,
              line: true,
              accordion: true,
              iconOpen: 'vxe-icon-square-minus-fill',
              iconClose: 'vxe-icon-square-plus-fill'
            },
            expandConfig: { expandAll: true }
          },
          attrs: $attrs
        }, [
          h(Column, { props: { treeNode: true, field: _replaceFields.title } }, [$scopedSlots.title ? (params) => $scopedSlots.title.call(this, params, h) : null]),
          $scopedSlots.tool ? h(Column, { props: { field: 'actions', title: '操作', width: 220, align: 'right', ...actionColumnProps } }, [function (vm) {
            return $scopedSlots.tool.call(this, vm, h)
          }]) : null
        ])])
    ])
  }
}
