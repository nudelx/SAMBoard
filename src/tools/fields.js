export const FIELDS = {
  deploys: ['user', 'branch', 'tag', 'updated', 'date'],
  installation: ['user', 'branch', 'tag', 'version', 'updated', 'date'],
  tests: ['date', 'updated']
}

export const SKIP_FIELDS = {
  deploys: { date: 1 },
  installation: { date: 1, branch: 1, tag: 1 },
  tests: {}
}

export const getFields = type => {
  return FIELDS[type] || null
}
