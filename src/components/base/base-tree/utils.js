
/**
 * filterTreeData 在树结构根据关键字查找匹配关键字的数据项
 * @param {array} treeData 数据源
 * @param {function} matchMethods 匹配方法
 * @param {object} replaceFields 字段
 * @param {boolean} isFilterLeaf 是否筛选叶子节点
 */
const defaultMatchMethods = (record, keywords, fileterKey) => {
  return typeof record[fileterKey] === 'string' && record[fileterKey].includes(keywords)
}
export const filterTreeData = (treeData, keywords, { matchMethods = defaultMatchMethods, replaceFields = {}} = {}, isFilterLeaf = true) => {
  if (!(Array.isArray(treeData) && treeData.length)) {
    return []
  }
  replaceFields = Object.assign({ title: 'title', value: 'value', children: 'children' }, replaceFields)
  return keywords ? treeData.reduce((result, cur) => {
    const isMatch = matchMethods(cur, keywords, replaceFields.title)
    const isChildrenMatch = cur[replaceFields.children] ? filterTreeData(cur[replaceFields.children], keywords, {
      matchMethods,
      replaceFields,
      isFilterLeaf
    }) : void 0
    if (isMatch || isChildrenMatch && isChildrenMatch.length) {
      result.push({ ...cur, [replaceFields.children]: isChildrenMatch && isChildrenMatch.length > 0 ? isChildrenMatch : void 0 })
    }
    return result
  }, []) : treeData
}
