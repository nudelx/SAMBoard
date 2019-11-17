global.localStorage = {getItem: () => {}, setItem: () =>{}}
global.JSON = {parse: () => {}, stringify: () =>{}}
const firebase = {
  initializeApp:() => firebase,
  auth :() => firebase,
  signInAnonymously :() => firebase,
  catch: () => firebase,
  database: () => firebase,
  ref: () => ({child:() => ({on:()=>{}})})
}
export const initializeApp= () => firebase
export const auth =() => firebase
export const signInAnonymously = () => firebase
export const database = () => firebase
