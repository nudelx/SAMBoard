import * as firebase from "firebase"

export const fetch_env_names = (cb) => {
  const db = firebase
    .database()
    .ref()
    .child("envs");

  db.on("value", snap => {
    let data = snap.val()
    cb(data)
  })
}
