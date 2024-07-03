<template>
  <div class="page-container basic-list-page">
    <div class="left-section">
      <BasicListTree v-model="activeRow" :tree-data="demos" show-search>
        <template #actions="{ row }">
          <i
            v-if="row.type === 'file'"
            class="vxe-icon-feedback"
            @click="activeRow = row"
          />
        </template>
      </BasicListTree>
    </div>
    <div class="content-section" >
      <component :is="activeRow.component"/>
    </div>

  </div>
</template>
<script>
import BasicListTree from './BasicListTree.vue'
import * as BasicDemos from './demos'
import { demos } from './config'

export default {
  name: 'BasicList',
  components: { BasicListTree, ...BasicDemos },
  data() {
    return {
      demos,
      activeRow: demos.find((v) => v.type === 'file')
    }
  }
}
</script>
<style lang="less" scoped>
.basic-list-page {
  display: flex;
  flex-direction: row;
  height: 100%;
  .left-section {
    width: 360px;
    background-color: lightblue;
    margin-right: 12px;
  }
  .content-section {
    flex: 1;
    background-color: #fff;
    border-radius: 4px;
  }
}
</style>
