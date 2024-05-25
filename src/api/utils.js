export const generateApi = (data, delay = 500) => new Promise((resove, reject) => {
  const timer = setTimeout(() => {
    resove(data)
    clearTimeout(timer)
  }, delay)
})
