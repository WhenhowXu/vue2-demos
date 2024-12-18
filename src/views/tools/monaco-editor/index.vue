<template>
  <div class="vd-page">
    <div class="vd-page_main">
      <CodeEditor
        v-model="code"
        width="1000"
      />
    </div>
  </div>
</template>
<script>
import CodeEditor from '@/components/CodeEditor'
export default {
  components: { CodeEditor },
  data() {
    return {
      code: '// Type away! \n'
    }
  }
}
</script>
