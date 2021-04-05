#!/bin/bash

# if [[ -d dist ]]
# then
#     echo "removing dist directory"
#     rm -rf dist
# fi

mkdir public

mkdir -p static/img
mkdir -p static/js
mkdir -p static/css
mkdir -p static/video
# mkdir -p static/fonts

cp -rvf front/img/* static/img/
cp -rvf front/video/* static/video/
cp -rvf front/css/css/* static/css/
cp -rvf front/vendor/* static/js/
# cp -rvf front/tools/* static/js/
# cp -rvf front/fonts/* static/fonts/