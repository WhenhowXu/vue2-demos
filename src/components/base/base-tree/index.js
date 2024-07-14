import { Table, Column, Input } from 'vxe-table'
import { filterTreeData } from './utils'

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
    searchInputProps: { type: Object, default: () => ({}) }, // 搜索框组件属性
    treeData: { type: Array, default: () => [] }, // 树数据源
    loading: { type: Boolean, default: false }, // 树加载状态
    replaceFields: { type: Object, default: () => getDefaultReplaceFields() }, // 字段替换
    actionColumnProps: { type: Object, default: () => ({}) } // 操作列属性配置
  },
  data() {
    return {
      searchWords: '',
      searchResult: [],
      treeRenderData: []
    }
  },
  watch: {
    treeData: {
      immediate: true,
      handler: function(val) {
        this.onSearch(this.searchWords)
      }
    }
  },
  render(h) {
    const { $props, $scopedSlots, $attrs, treeRenderData } = this
    const { replaceFields, loading, actionColumnProps, showSearch, searchInputProps } = $props
    const _replaceFields = Object.assign(getDefaultReplaceFields(), replaceFields)
    return h('div', { class: 'base-tree-container' }, [
      // 搜索区域
      showSearch ? h('header', { class: 'base-tree-header' }, [
        h(Input, { props: { placeholder: '请输入关键字', type: 'search', clearable: true, value: this.searchWords, ...searchInputProps }, on: {
          'search-click': this.onSearchClick,
          'keydown': this.onInputKeyDown,
          'change': this.onSearchWordsChange
        }})
      ]) : null,
      // 树结构区域
      h('div', { class: 'base-tree-table' }, [
        h(Table, {
          props: {
            data: treeRenderData,
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
          h(Column, { props: { treeNode: true, field: _replaceFields.title }}, [$scopedSlots.title ? (params) => $scopedSlots.title.call(this, params, h) : null]),
          $scopedSlots.tool ? h(Column, { props: { field: 'actions', title: '操作', width: 220, align: 'right', ...actionColumnProps }}, [function(vm) {
            return $scopedSlots.tool.call(this, vm, h)
          }]) : null
        ])])
    ])
  },
  methods: {
    onSearch(value) {
      console.log(value, 'onSearch')
      if (value) {
        const _replaceFields = Object.assign(getDefaultReplaceFields(), this.replaceFields)
        this.treeRenderData = filterTreeData(this.treeData, this.searchWords, { replaceFields: _replaceFields })
        console.log(this.treeRenderData)
      } else {
        this.treeRenderData = this.treeData
      }
    },
    onSearchClick() {
      this.onSearch(this.searchWords)
    },
    onInputKeyDown(e) {
      if (e.$event.keyCode === 13) {
        this.onSearch(e.value)
      }
    },
    onSearchWordsChange(e) {
      this.searchWords = e.value
    }
  }
}
