<template>
  <div style="height: 100%; overflow: auto;">
    <h2>Vue 使用版本为2.6.10</h2>
    <h3>1、给dom元素设置ref，直接获得改元素</h3>
    <div ref="ref1">我是个div</div>
    <h3>2、给组件设置ref，获得该组件的实例</h3>
    <ChildDemo ref="ref2" />
    <h3>3、设置两个相同的ref, 两个均为dom元素; 最终获得最后一个dom元素</h3>
    <div ref="ref3">我是个div3-1</div>
    <div ref="ref3">我是个div3-2</div>
    <h3>4、设置两个相同的ref, 两个均为组件; 最终获得最后一个组件</h3>
    <ChildDemo ref="ref4" index="4-1" />
    <ChildDemo ref="ref4" index="4-2" />
    <h3>5、在v-for循环中使用ref，ref指针得到是一个list</h3>
    <div>
      <div v-for="item in list5" :key="item" ref="ref5">我是个div{{ item }}</div>
    </div>
    <h3>6、在v-for循环中对组件使用相同ref，循环对象为组件</h3>
    <div>
      <ChildDemo v-for="item in list6" :key="item" ref="ref6" :index="item" />
    </div>
    <h3>7、在相邻组件中各自使用相同的ref, 得到是各自组件内部的元素</h3>
    <div>
      <RefDemo1 />
      <RefDemo2 />
    </div>
    <h3>8、在表格插槽中使用相同ref，得到的是最后一个组件</h3>
    <a-table :columns="columns" :data-source="dataSource">
      <template slot="c2" slot-scope="text, record, index">
        <a-button ref="ref8">操作{{ index }}</a-button>
      </template>
    </a-table>
  </div>
</template>
<script>
import ChildDemo from './ChildDemo.vue'
import RefDemo1 from './RefDemo1.vue'
import RefDemo2 from './RefDemo2.vue'
const columns = [
  {
    title: '列1',
    dataIndex: 'c1'
  },
  {
    title: '列2',
    dataIndex: 'c2',
    scopedSlots: { customRender: 'c2' }
  }
]
export default {
  name: 'SameRef',
  components: { ChildDemo, RefDemo1, RefDemo2 },
  data() {
    return {
      list5: Array.from({ length: 5 }).map((v, index) => `5-${index + 1}`),
      list6: Array.from({ length: 5 }).map((v, index) => `6-${index + 1}`),
      columns,
      dataSource: Array.from({ length: 30 }).map((v, index)=> ({
        c1: 'hhhhhh' + index
      }))
    }
  },
  mounted() {
    console.log('给dom元素设置ref:', this.$refs.ref1)
    console.log('给组件设置ref', this.$refs.ref2)
    console.log('设置两个相同的ref, 两个均为dom元素', this.$refs.ref3)
    console.log('设置两个相同的ref, 两个均为组件', this.$refs.ref4)
    console.log('在v-for循环中对dom使用相同ref，循环对象为dom元素', this.$refs.ref5)
    console.log('在v-for循环中对组件使用相同ref，循环对象为组件', this.$refs.ref6)
    console.log('在v-for循环中对组件使用相同ref，循环对象为组件', this.$refs.ref7)
    console.log('在表格自定义插槽中使用相同ref，循环对象为组件', this.$refs.ref8, this.$refs.ref8.$el)
  }
}
</script>
