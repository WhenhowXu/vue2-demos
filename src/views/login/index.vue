<template>
  <div class="login-page">
    <login-form />
    <vue-particles
      color="#ffffff"
      :particle-opacity="0.7"
      lines-color="#ffffff"
      :particles-number="80"
      shape-type="circle"
      :particle-size="5"
      :lines-width="2"
      :line-linked="true"
      :line-opacity="0.4"
      :lines-distance="150"
      :move-speed="3"
      :hover-effect="true"
      hover-mode="grab"
      :click-effect="true"
      click-mode="push"
    />
  </div>
</template>

<script>
import LoginForm from './LoginForm.vue'

export default {
  name: 'Login',
  components: { LoginForm }
}
</script>
<style lang="less" scoped>
.login-page{
  position: relative;
  height: 100vh;
  background: lightblue;
}
</style>
