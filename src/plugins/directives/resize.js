export default {
  bind(el, binding) {
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const width = entry.contentRect.width
        const height = entry.contentRect.height
        typeof binding.value === 'function' && binding.value({ width, height })
      }
    })
    resizeObserver.observe(el)
    // 保存observer以便后续移除
    el.__resizeObserver__ = resizeObserver
  },
  unbind(el) {
    // 如果已经存在，则移除观察器
    if (el.__resizeObserver__) {
      el.__resizeObserver__.unobserve(el)
    }
  }
}
