export const parseThreadField = function(browsers) {
  if (!browsers) return
  const newObj = {}
  Object.keys(browsers).forEach(browser => {
      let total = 0
      let failed = 0
      newObj[browser] = {}
      Object.keys(browsers[browser]).forEach(thread => {
          const threadData = browsers[browser][thread]
          total = total + parseInt(threadData.total, 0)
          failed = failed + parseInt(threadData.failed, 0)
        }
      )

      newObj[browser].total = total
      newObj[browser].failed = failed
    }
  )
  return newObj
}
