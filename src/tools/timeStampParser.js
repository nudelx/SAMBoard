export const buildTimeStr = (timestamp) => {
  var delta = new Date().getTime() / 1000 - timestamp
  var days = Math.floor(delta / 86400)
  delta -= days * 86400
  var hrs = Math.floor(delta / 3600) % 24
  delta -= hrs * 3600
  var mnts = Math.floor(delta / 60) % 60
  delta -= mnts * 60
  var secs = Math.floor(delta % 60)
  return `${days ? `${days}d` : ''} ${hrs ? `${hrs}h` : ''} ${mnts
    ? `${mnts}m`
    : ''} ${secs ? `${secs}s` : ''} ago`
}
