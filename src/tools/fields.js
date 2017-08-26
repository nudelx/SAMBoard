export const FIELDS = {
  deploys: ['user', 'date', 'branch', 'tag', 'updated'],
  installation: ['user', 'date', 'branch', 'tag', 'version', 'updated'],
  tests: ['date', 'updated', 'thread-1', 'thread-2', 'thread-3', 'thread-4']
}

export const getFields = type => {
  return FIELDS[type] || null
}
