export const demos = [
  { id: 'model', type: 'folder', name: 'model', describe: '数据双向绑定' },
  { id: 'MultipleModel', type: 'file', parentId: 'model', component: 'MultipleModel', name: '绑定多个model', describe: '一个组件中绑定多个v-model' },
  { id: 'directive', type: 'folder', name: 'ref', describe: '' },
  { id: 'SameRef', type: 'file', parentId: 'directive', component: 'SameRef', name: '使用相同的ref', describe: '一个组件中绑定多个v-model' }
]
