# CREW APPLICATION

Simple application which represents dashboard with candidates.

### Running locally
`yarn install`

`yarn start`

App will be available on http://localhost:3000


### Running in docker
`docker build -t crew-app .`

`docker run -it --rm -p 5000:5000 --name crew-container crew-app`

App will be available on http://localhost:5000

# CYPRESS.IO E2E TESTING

Cypress e2e framework is integrated into the application project. 
The section will contain how to run test info

### Run cypress tests
Run following command and check results in cypress CI using generated URL after test suit execution
 
`node_modules\.bin\cypress run --record --key 9942e243-4a25-4765-8e72-62aa318a561e`

# TROUBLESHOOTING
How to fix possible or known issues

### Error on 'yarn install'
Update node version is accordance with requirements
