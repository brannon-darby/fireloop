#!/usr/bin/env bash

npm install -g now

./node_modules/.bin/now deploy --token=$NOW_TOKEN
./node_modules/.bin/now alias --token=$NOW_TOKEN
