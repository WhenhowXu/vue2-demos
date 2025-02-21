function highlightHandler(el, binding) {
  const keyword = binding.value
  const regex = new RegExp(`(${keyword})`, 'gi')
  el.innerHTML = el.textContent.replace(regex, '<span class="vd-highlight">$1</span>')
}
export default {
  inserted: highlightHandler,
  update: highlightHandler
}
