# Hermit Client

A template for creating Hermit apps with React and Typescript.

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
