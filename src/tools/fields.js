const Fealds = {
  deploys: ['user', 'branch', 'tag', 'updated', 'date'],
  installation: ['user', 'branch', 'tag', 'version', 'updated', 'date'],
  tests: [
    'date',
    'updated',
    't-1',
    't-2',
    't-3',
    't-4',
    't-5',
    't-6',
    't-7',
    't-8'
  ]
}


const getFieldsOrder = (type) => {
  return Fealds[type] || null
}

export Fealds
export getFieldsOrder
