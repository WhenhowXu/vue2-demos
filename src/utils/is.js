/**
 * 判断数据是否为一个有数据的数组数据
 * @param {*} value
 * @returns {boolean}
 */
export const isArrayHasData = (value) => Array.isArray(value) && value?.length > 0
