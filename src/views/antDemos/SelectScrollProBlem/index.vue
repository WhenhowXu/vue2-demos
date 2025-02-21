<template>
  <div>
    <a-select :options="options" style="width: 260px" />
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [
        Array.from({ length: 100 }).map((_, index) => ({
          label: `选项${index}`,
          value: index
        }))
      ]
    }
  },
  methods: {
    onChange(value) {
      console.log(value)
    }
  }
}
</script>
