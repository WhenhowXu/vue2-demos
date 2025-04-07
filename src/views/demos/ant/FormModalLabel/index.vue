<template>
  <a-form-model>
    <a-row type="flex" :gutter="12">
      <a-col :span="8">
        <a-form-model-item label="用户名">
          <a-input placeholder="请输入用户名" />
        </a-form-model-item>
      </a-col>
      <a-col :span="8">
        <a-form-model-item label="性别性别">
          <a-input placeholder="请输入性别性别" />
        </a-form-model-item>
      </a-col>
    </a-row>
  </a-form-model>
</template>

<script>
export default {
  data() {
    return {
      formItemLayout: {
        labelCol: { span: 6 },
        wrapperCol: { span: 18 }
      }
    }
  }
}
</script>
<style lang="less" scoped>
::v-deep .ant-form-item {
  width: 100%;
  // background: red;
  display: flex;
  .ant-form-item-label{
    width: 100px;
  }
  .ant-form-item-control-wrapper{
    flex: 1;
  }
}
</style>
