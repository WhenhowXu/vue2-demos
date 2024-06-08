<template>
  <div class="login-form-wrapper">
    <h3 class="login-form-title">登录</h3>
    <a-form-model v-bind="formItemLayout">
      <a-form-model-item>
        <a-input v-model="form.username" size="large" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input-password v-model="form.password" size="large" />
      </a-form-model-item>
      <a-form-model-item>
        <a-button type="primary" size="large" style="width: 100%" @click="handleSubmit">
          登录
        </a-button>
      </a-form-model-item>
    </a-form-model>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'LoginForm',
  data() {
    return {
      formItemLayout: Object.freeze({
        wrapperCol: { span: 20, offset: 2 }
      }),
      buttonItemLayout: Object.freeze({
        wrapperCol: { span: 14, offset: 5 }
      }),
      form: { username: 'admin', password: '123456' }
    }
  },
  methods: {
    ...mapActions('login', ['login']),
    handleSubmit() {
      this.login(this.form).then(() => {
        this.$router.push('/')
      })
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
    border-radius: 4px 4px 0 0;
    font-size: 20px;
    line-height: 48px;
    font-weight: bold;
    padding: 12px 24px;
  }
}
</style>
