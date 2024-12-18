<template>
  <MonacoEditor
    :language="language"
    :code="code"
    theme="vs"
    :editor-options="editorOptions"
    v-bind="$attrs"
    @mounted="onMounted"
    @codeChange="onCodeChange"
  />
</template>
<script>
import MonacoEditor from 'vue-monaco-editor'
export default {
  components: { MonacoEditor },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: { type: String, default: '' },
    theme: { type: String, default: 'vs' },
    options: { type: Object, default: () => ({}) },
    language: { type: String, default: 'javascript' }
  },
  data() {
    return {
      editor: null,
      code: ''
    }
  },
  computed: {
    editorOptions() {
      return { selectOnLineNumbers: false, ...this.options }
    }
  },
  watch: {
    value: {
      handler(val) {
        this.code = val
      },
      immediate: true
    }
  },
  methods: {
    onMounted(editor) {
      this.editor = editor
    },
    onCodeChange(editor) {
      const value = editor.getValue()
      this.$emit('change', value)
    }
  }
}
</script>
