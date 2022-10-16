# Hermit Client

A "create-react-app" based application stack that integrates various developer friendly tools like:

- Typescript
- Cypress
- React Hooks
- Apollo Client

<br>
In addition to that, the Hermit Client is also debuggable using VSCode's debugger, thanks to the launch configuration found at ```.vscode/launch.json```. In order to debug the app, first run `npm run start`, set a breakpoint, open the Debug pane (located on VScode's left sidebar), and run the `Launch Chrome against localhost` program.

Custom Auth System (self built)
Deployed with Heroku Pipelines
CI tests run in Github Actions
Debuggable in VSCode
Debug Test Runs (won’t collect coverage)
Roadmap: Get environment config from “/“ (base server) as opposed to hard coding “getHost”

<hr>
<img style="width: 200px" src="./public/shell.jpg">
<hr>

## Apollo

- Uses Apollo client to query a graph

## Auth

- [x] Includes a complete user authentication system based on JWTs.
- [x] Protected Routes with custom hooks

## Automated Deployments

- [x] Deployed with Github Actions to Github Pages
- [x] Deployed on merge to main

## Fully Tested

- [x] Tested with Cypress.js, 100% Coverage enforced.
      `npx nyc check-coverage --lines 100`

## Debug Instructions

    - run npm start
    - Add this:
    ```{
            "version": "0.2.0",
            "configurations": [
            {
                "type": "chrome",
                "request": "launch",
                "name": "Launch Chrome against localhost",
                "url": "http://localhost:3000",
                "webRoot": "${workspaceFolder}"
            }
            ]

    }```
    To ./vscode/launch.json
    - Click on green triangle in the Debug Pane
