import { testState } from './constants'

export const parseThreadField = function(threadsObject) {
  if (!threadsObject || typeof threadsObject === 'string') return testState.RUN
  const newObj = {}
  Object.keys(threadsObject).map(
    f => (newObj[`thread-${f.replace(/[^0-9]/g, '')}`] = threadsObject[f])
  )
  return newObj
}
