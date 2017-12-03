const { spawn } = require('child_process');
var fs = require('fs')
var path = require('path')
var fullPath = path.join(__dirname, 'src/') + 'vesrion_data.json'
var userInput = ''

var readInput = function() {
  console.log('Please add a description for new version:')
  var stdin = process.openStdin()
  stdin.addListener('data', function(d) {
    userInput = d.toString().trim()
    stdin.end()
    writeFile()
  })
}

var writeFile = function() {
  var readStream = fs.readFileSync(fullPath, 'utf8')
  var jsonContent = JSON.parse(readStream)
  jsonContent.version = `${new Date().getTime()}`
  jsonContent.description = userInput

  fs.writeFile(fullPath, JSON.stringify(jsonContent), 'utf8', function() {
    console.log('New version created')
    console.log('-----------------------------------')
    console.log(jsonContent)
  })
}


readInput()
