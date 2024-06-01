<template>
  <div class="login-form-wrapper">
    <h3 class="login-form-title">VUE2 DMEOS</h3>
    <a-form-model v-bind="formItemLayout">
      <a-form-model-item label="用户名">
        <a-input v-model="form.name" />
      </a-form-model-item>
      <a-form-model-item label="密码">
        <a-input-password v-model="form.password" />
      </a-form-model-item>
      <a-form-model-item label=" " :colon="false">
        <a-button type="primary" style="width: 100%">
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
export default {
  name: 'LoginForm',
  data() {
    return {
      formItemLayout: Object.freeze({
        labelCol: { span: 5 },
        wrapperCol: { span: 18 }
      }),
      buttonItemLayout: Object.freeze({
        wrapperCol: { span: 14, offset: 5 }
      }),
      form: { name: 'admin', password: '123456' }
    }
  }
}
</script>

<style lang="less" scoped>
@import '@/style/varible.less';
.login-form-wrapper{
  position: absolute;
  width: 360px;
  border: 1 solid #ccc;
  border-radius: 4px;
  background-color: #fff;
  top: 50%;
  transform: translateY(-50%);
  right: 15%;
  .login-form-title{
    background-color: @theme;
    border-radius: 4px 4px 0 0;
    height: 48px;
    line-height: 48px;
    color: #fff;
    padding: 0 24px;
  }
}
</style>
