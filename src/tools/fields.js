export const FIELDS = {
  deploys: ['user', 'branch', 'tag', 'updated', 'date'],
  installation: ['user', 'branch', 'tag', 'version', 'updated', 'date'],
  tests: ['date', 'updated', 'thread-1', 'thread-2', 'thread-3', 'thread-4']
}

export const SKIP_FIELDS = {
  deploys: { date: 1 },
  installation: { date: 1 },
  tests: {}
}

export const getFields = type => {
  return FIELDS[type] || null
}
