<template>
  <a-cascader :options="options" change-on-select :display-render="displayRender" @change="onChange" />
</template>
<script>
export default {
  data() {
    return {
      options: [
        {
          value: 'zhejiang',
          label: 'Zhejiang',
          children: [
            {
              value: 'hangzhou',
              label: 'Hangzhou',
              children: [
                {
                  value: 'xihu',
                  label: 'West Lake'
                }
              ]
            }
          ]
        },
        {
          value: 'jiangsu',
          label: 'Jiangsu',
          children: [
            {
              value: 'nanjing',
              label: 'Nanjing',
              children: [
                {
                  value: 'zhonghuamen',
                  label: 'Zhong Hua Men'
                }
              ]
            }
          ]
        }
      ]
    }
  },
  methods: {
    displayRender({ labels, selectedOptions }) {
      const content = labels ? labels.join('/') : ''
      return <span title={content}>{content}</span>
    },
    onChange(value) {
      console.log(value)
    }
  }
}
</script>
