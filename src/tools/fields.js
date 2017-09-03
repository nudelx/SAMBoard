const generalFields = ['user', 'date', 'branch', 'tag']
export const FIELDS = {
  deploys: generalFields.concat(['updated']),
  installation: generalFields.concat(['version', 'updated']),
  // tests: generalFields.concat(['updated', 'thread-1', 'thread-2', 'thread-3', 'thread-4', 'thread-5', 'thread-6', 'thread-7', 'thread-8'])
  tests: ['updated', 'thread-1', 'thread-2', 'thread-3', 'thread-4', 'thread-5', 'thread-6', 'thread-7', 'thread-8']
}

export const getFields = type => {
  return FIELDS[type] || null
}
