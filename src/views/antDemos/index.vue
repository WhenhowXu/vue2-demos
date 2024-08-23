<template>
  <LayoutPage>
    <template #main>
      <vxe-toolbar ref="toolbarRef" custom :refresh="{ query: fetchDemos }" />
      <vxe-table ref="tableRef" border :loading="loading" :data="vxeDemos">
        <vxe-column type="seq" title="序号" width="60" fixed="left" />
        <vxe-column field="name" title="示例名称" />
        <vxe-column field="template" title="组件名称" />
        <vxe-column field="describe" title="详细描述" />
        <vxe-column field="actions" title="操作" align="center" width="100" fixed="right">
          <template #default="{ row }">
            <vxe-button
              mode="text"
              status="primary"
              @click="gotoDetailPage(row)"
            >查看示例</vxe-button>
          </template>
        </vxe-column>
      </vxe-table>
    </template>
    <div slot="main" />
  </LayoutPage>
</template>

<script>
import { getAntDemos } from '@/api/table'
import { LayoutPage } from '@/components/layouts'

export default {
  name: 'AntDemos',
  components: {
    LayoutPage
  },
  data() {
    return {
      loading: false,
      vxeDemos: []
    }
  },
  mounted() {
    this.fetchDemos()
    const $table = this.$refs.tableRef
    const $toolbar = this.$refs.toolbarRef
    if ($table && $toolbar) {
      $table.connect($toolbar)
    }
  },
  methods: {
    async fetchDemos() {
      try {
        this.loading = true
        this.vxeDemos = await getAntDemos()
      } finally {
        this.loading = false
      }
    },
    gotoDetailPage(row) {
      this.$router.push({
        path: '/antDemos/detail',
        query: { template: row.template, title: row.name }
      })
    }
  }
}
</script>
