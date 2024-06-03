<template>
  <div class="login-form-wrapper">
    <h3 class="login-form-title">登录</h3>
    <a-form-model v-bind="formItemLayout">
      <a-form-model-item>
        <a-input v-model="form.username" size="large" />
      </a-form-model-item>
      <a-form-model-item>
        <a-input-password size="large" v-model="form.password" />
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
import { login } from '@/api/login';
import { ACCESS_TOKEN, USER_INFO } from '@/constants/storage';
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
    handleSubmit(){
      login(this.form).then(data=>{
        localStorage.setItem(ACCESS_TOKEN, data?.token);
        localStorage.setItem(USER_INFO, data);
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
