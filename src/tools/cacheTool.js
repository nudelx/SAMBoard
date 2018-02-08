const LOCAL_CASHE_KEY = 'sam-hub'

export const saveLocalCache = (object) => {
  localStorage.setItem(LOCAL_CASHE_KEY,  JSON.stringify(object) )
}

export const loadLocalCashe = () => {
  return JSON.parse(localStorage.getItem(LOCAL_CASHE_KEY)) || null
}
