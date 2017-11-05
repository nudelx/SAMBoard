#!/usr/bin/env bash
git checkout master
git pull 
git checkout gh-pages
git merge master
rm -rf static/
yarn build
cp -r build/* .
sed  's/\="\//\="\.\//g' index.html > index1.html
cat index1.html > index.html
rm index1.html
sed  's/n.p\+"static\/media\//"\.\/static\/media\//g' static/js/*.js > static/js/t.js
file=$(ls static/js/*.js | grep main)
cat  static/js/t.js >  $file
rm static/js/t.js
git add .
git commit -am "new deploy $(date)"
git push
git checkout master 
