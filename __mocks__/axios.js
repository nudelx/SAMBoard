global.localStorage = {getItem: () => {}, setItem: () =>{}}
global.JSON = {parse: () => {}, stringify: () =>{}}
const axios = {
  get:() => Promise.resolve({data: {Items: []}})
}

export default axios
