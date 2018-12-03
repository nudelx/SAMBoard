const LOCAL_CACHE_KEY = 'sam-hub'

export const saveLocalCache = object => {
  localStorage.setItem(LOCAL_CACHE_KEY, JSON.stringify(object))
}

export const loadLocalCache = () => {
  return JSON.parse(localStorage.getItem(LOCAL_CACHE_KEY)) || null
}
