// 基于ant-design-vue组件库配置化表单
import { FormModel, Input, Select, Cascader, Row, Col } from 'ant-design-vue';

export default {
  name: 'BaseAntForm',
  props: {
    fields: { type: Array, default: () => [] },
    labelInPlaceHolder: { type: Boolean, default: true }, // 将label拼接显示在placeholder中
  },
  render(h) {
    return h(FormModel, {}, [
      h(Row, {}, this.renderFieldList(h, this))
    ])
  },
  methods: {
    renderField(h, _vm, config) {
      console.log('renderField', config)
      switch (config.type) {
        case 'select':
          return h(Select, { props: { placeholder: `请选择${config.label}`, options: config.options } },)

        default:
          return h(Input, { props: { placeholder: `请输入${config.label}` } },)
      }
    },
    renderFieldList(h, _vm) {
      const { fields } = this;
      console.log(_vm, '------------renderFields')
      return fields.map(f => h(Col, { props: { span: f.span || 8 } }, [h(FormModel.Item, {
        props: { label: f.label, labelCol: { span: 6 }, wrapperCol: { span: 18 }, prop: f.prop }
      }, [this.renderField(h, _vm, f)])]))
    }
  },
}