<template>
  <div class="virtual-table-wrapper">
    <!-- 左固定列 -->
    <div v-if="leftFixedColumns.length" class="fixed-left">
      <a-table
        :columns="leftFixedColumns"
        :dataSource="visibleData"
        :pagination="false"
        :customRow="customRow"
        class="fixed-table"
      >
        <template #bodyCell="{ text, record, column }">
          <slot name="bodyCell" :text="text" :record="record" :column="column" />
        </template>
        <template #tbody>
          <div :style="fixedTableBodyStyle">
            <div :style="fixedTableContentStyle">
              <table class="ant-table-tbody">
                <tr v-for="row in visibleData" :key="row.key" class="ant-table-row">
                  <td
                    v-for="column in leftFixedColumns"
                    :key="column.dataIndex"
                    class="ant-table-cell"
                  >
                    <slot
                      name="bodyCell"
                      :text="row[column.dataIndex]"
                      :record="row"
                      :column="column"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </template>
      </a-table>
    </div>

    <!-- 主滚动区域 -->
    <div class="scroll-main" @scroll="handleScroll">
      <a-table
        :columns="scrollColumns"
        :dataSource="visibleData"
        :pagination="false"
        :customRow="customRow"
        class="main-table"
      >
        <template #bodyCell="{ text, record, column }">
          <slot name="bodyCell" :text="text" :record="record" :column="column" />
        </template>
        <template #tbody>
          <div :style="mainTableBodyStyle">
            <div :style="mainTableContentStyle">
              <table class="ant-table-tbody">
                <tr v-for="row in visibleData" :key="row.key" class="ant-table-row">
                  <td
                    v-for="column in scrollColumns"
                    :key="column.dataIndex"
                    class="ant-table-cell"
                  >
                    <slot
                      name="bodyCell"
                      :text="row[column.dataIndex]"
                      :record="row"
                      :column="column"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </template>
      </a-table>
    </div>

    <!-- 右固定列 -->
    <div v-if="rightFixedColumns.length" class="fixed-right">
      <a-table
        :columns="rightFixedColumns"
        :dataSource="visibleData"
        :pagination="false"
        :customRow="customRow"
        class="fixed-table"
      >
        <template #bodyCell="{ text, record, column }">
          <slot name="bodyCell" :text="text" :record="record" :column="column" />
        </template>
        <template #tbody>
          <div :style="fixedTableBodyStyle">
            <div :style="fixedTableContentStyle">
              <table class="ant-table-tbody">
                <tr v-for="row in visibleData" :key="row.key" class="ant-table-row">
                  <td
                    v-for="column in rightFixedColumns"
                    :key="column.dataIndex"
                    class="ant-table-cell"
                  >
                    <slot
                      name="bodyCell"
                      :text="row[column.dataIndex]"
                      :record="row"
                      :column="column"
                    />
                  </td>
                </tr>
              </table>
            </div>
          </div>
        </template>
      </a-table>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    columns: Array,
    dataSource: Array,
    rowHeight: {
      type: Number,
      default: 55
    },
    buffer: {
      type: Number,
      default: 5
    },
    tableHeight: {
      type: Number,
      default: 600
    }
  },
  data() {
    return {
      scrollTop: 0,
      visibleData: [],
      offset: 0
    }
  },
  computed: {
    // 分离固定列和滚动列
    leftFixedColumns() {
      return this.columns.filter(col => col.fixed === 'left')
    },
    rightFixedColumns() {
      return this.columns.filter(col => col.fixed === 'right')
    },
    scrollColumns() {
      return this.columns.filter(col => !col.fixed)
    },

    // 主表格样式
    mainTableBodyStyle() {
      return {
        height: `${this.totalHeight}px`,
        position: 'relative',
        overflow: 'hidden'
      }
    },
    mainTableContentStyle() {
      return {
        transform: `translateY(${this.offset}px)`,
        position: 'absolute',
        width: '100%'
      }
    },

    // 固定列公共样式
    fixedTableBodyStyle() {
      return {
        height: `${this.tableHeight}px`,
        overflow: 'hidden'
      }
    },
    fixedTableContentStyle() {
      return {
        transform: `translateY(-${this.scrollTop}px)`,
        transition: 'transform 0.2s'
      }
    },

    // 其他计算属性
    totalHeight() {
      return this.dataSource.length * this.rowHeight
    },
    startIndex() {
      return Math.max(0, Math.floor(this.scrollTop / this.rowHeight) - this.buffer)
    },
    endIndex() {
      return Math.min(
        this.dataSource.length,
        this.startIndex + Math.ceil(this.tableHeight / this.rowHeight) + this.buffer * 2
      )
    }
  },
  watch: {
    dataSource: {
      immediate: true,
      handler() {
        this.updateVisibleData()
      }
    },
    scrollTop() {
      this.updateVisibleData()
    }
  },
  methods: {
    handleScroll(e) {
      this.scrollTop = e.target.scrollTop
      // 同步固定列滚动位置
      this.syncFixedColumnsScroll()
    },
    updateVisibleData() {
      this.visibleData = this.dataSource.slice(this.startIndex, this.endIndex)
      this.offset = this.startIndex * this.rowHeight
    },
    syncFixedColumnsScroll() {
      // 同步固定列的纵向滚动
      const fixedLeft = this.$el.querySelector('.fixed-left .ant-table-body')
      const fixedRight = this.$el.querySelector('.fixed-right .ant-table-body')
      ;[fixedLeft, fixedRight].forEach(el => {
        if (el) el.scrollTop = this.scrollTop
      })
    },
    customRow() {
      return {
        style: {
          height: `${this.rowHeight}px`,
          lineHeight: `${this.rowHeight}px`
        }
      }
    }
  }
}
</script>

<style scoped>
.virtual-table-wrapper {
  display: flex;
  position: relative;
  height: v-bind(tableHeight + 'px');
}

/* 固定列容器 */
.fixed-left,
.fixed-right {
  z-index: 2;
  overflow: hidden;
}

/* 主滚动区域 */
.scroll-main {
  flex: 1;
  overflow: auto;
}

/* 同步固定列高度 */
.fixed-table >>> .ant-table-body {
  height: v-bind(tableHeight + 'px') !important;
}

/* 强制行高一致 */
.main-table >>> .ant-table-row,
.fixed-table >>> .ant-table-row {
  height: v-bind(rowHeight + 'px') !important;
}

/* 隐藏默认滚动条 */
.scroll-main >>> .ant-table-body {
  overflow: hidden !important;
}
</style>
