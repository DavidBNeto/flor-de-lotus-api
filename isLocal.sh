#!/usr/bin/env bash

rm -rf /opt/docker/fdl/api
rm -rf /opt/docker/fdl/web
git clone --depth 1 --branch develop http://www.tools.ages.pucrs.br/Flor-De-Lotus/api /opt/docker/fdl/api
git clone --depth 1 --branch develop http://www.tools.ages.pucrs.br/Flor-De-Lotus/client /opt/docker/fdl/web
nvm use 10.15.3
cd /opt/docker/fdl/web
npm install
npm run build

mv -f /opt/docker/fdl/web/build /opt/docker/fdl/api/

cd /opt/docker/fdl/api

docker-compose down
docker-compose -f docker-compose.yml down

docker-compose up --build -d
docker-compose -f docker-compose-web.yml up --build -d

