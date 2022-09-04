#!/usr/bin/env bash

set -x
dir=/opt/docker/florDeLotus

# build client
cd $dir/client
pwd
nvm use 8.9.3
rm -rf /opt/docker/florDeLotus/api/build


npm install
npm run build
ls $dir/client/build/
mv -f /opt/docker/florDeLotus/client/build /opt/docker/florDeLotus/api/build
cd $dir/api
ls -la $dir/api/build




