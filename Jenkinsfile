node {

    currentBuild.result = "SUCCESS"

    try {

        stage('Delete Repo Flor de Lotus'){
            sh 'ssh root@10.32.223.4 -p 5439 "rm -rf /opt/docker/florDeLotus/api"'
            sh 'ssh root@10.32.223.4 -p 5439 "rm -rf /opt/docker/florDeLotus/web"'
        }

        stage('Clone Repos Flor de Lotus Front e Back'){
           sh 'ssh root@10.32.223.4 -p 5439 "git clone --depth 1 --branch homo http://www.tools.ages.pucrs.br/Flor-De-Lotus/api.git /opt/docker/florDeLotus/api"'
           sh 'ssh root@10.32.223.4 -p 5439 "git clone --depth 1 --branch homo http://www.tools.ages.pucrs.br/Flor-De-Lotus/client.git /opt/docker/florDeLotus/web"'
        }

        stage('Install and Build Flor de Lotus Front React'){
            sh 'ssh root@10.32.223.4 -p 5439 "nvm use 10.15.3; cd /opt/docker/florDeLotus/web; npm install; npm run build"'
        }

        stage('Move web directory to API'){
            sh 'ssh root@10.32.223.4 -p 5439 "mv -f /opt/docker/florDeLotus/web/build /opt/docker/florDeLotus/api/build"'
        }

        stage('Down Images DB, Api and Web'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd /opt/docker/florDeLotus/api; docker-compose down; docker-compose -f docker-compose.yml down"'
        }

        stage('Build and Up Docker Image Api'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd /opt/docker/florDeLotus/api; docker-compose up --build -d"'
        }

        stage('Build and Up Docker Image Web'){
           sh 'ssh root@10.32.223.4 -p 5439 "cd /opt/docker/florDeLotus/api; docker-compose -f docker-compose-web.yml up --build -d"'
        }

        stage('Success'){
            mail body: 'project Flor de Lotus build successful in HML',
                     from: 'jenkins@ages.com',
                     replyTo: 'gregory.lagranha@acad.pucrs.br, cassio.trindade@pucrs.br, marcelo.bernardy@acad.pucrs.br',
                     subject: 'Success CI Flor de Lotus',
                     to: 'gregory.lagranha@acad.pucrs.br'
        }

    }
    catch (err) {

        currentBuild.result = "FAILURE"

            mail body: "project Flor de Lotus build error is here: ${env.BUILD_URL}" ,
            from: 'jenkins@ages.com',
            replyTo: 'gregory.lagranha@acad.pucrs.br, cassio.trindade@pucrs.br, marcelo.bernardy@acad.pucrs.br',
            subject: 'Error CI Flor de Lotus',
            to: 'gregory.lagranha@acad.pucrs.br'

        throw err
    }

}
