<h1 align="center">Hermit Client</h1>
<p align="center">
    <img style="width: 400px" src="./public/shell.jpg">
    <p style="font-size: 12px" align="center" > Hermit is seen here chilling at the Biscayne Bay in Miami, FL.</p>
</p>
<hr>

A "create-react-app" based application stack that integrates various developer friendly tools like:

- Typescript
- Cypress
- React Hooks
- Apollo Client
  <br>

## Run locally

To run locally, set the desired config using the `.env` file at the root. Use the `.env.sample` as a guide.
You can develop against the deployed staging environment, or run a local Hermit Server, in which case you would have to set `REACT_APP_HERMIT_HOST=http://localhost:4000` (or whatever port Hermit Server is listening to).

## Typescript + Apollo

All data types that Hermit Client consumes are auto generated server-side using [graphql codegen](https://www.the-guild.dev/graphql/codegen). That means that you can type all queries and mutations like so:

```js
    useQuery<SomeType>(...)
    useMutation<MutationResult, MutationVariables>(...);
```

Where `SomeType`, `MutationResult`, and `MutationVariables` are types imported from `src/types.d.ts`. These types are currently being synced manually, but the process is simple. Simply copy the generated types from Hermit Server, found [here](https://github.com/svegalopez/hermit-server/blob/main/src/hermit/services/apollo/gql-types.d.ts) and paste them at `src/types.d.ts`. If a feature is being developed at the same time (server logic does not exist prior) then communication between developers is needed in order to sync the types. Just remember to sync them after the server code has been deployed to staging.

## Debugging

In addition to that, the Hermit Client is also debuggable using VSCode's debugger, thanks to the launch configuration found at `.vscode/launch.json`. In order to debug the app, first run `npm run start`, set a breakpoint, open the Debug pane, and run the `Launch Chrome against localhost` program.

## Auth

Hermit Client implements a custom auth system using a combination of JWTs and cookies.
The main idea is this, a client logs in by providing email and password. The Hermit Server will respond with a JWT and a `Set-Cookie` header, setting a cookie in the browser with a session id. The token is stored in memory and can be used to authenticate requests as long as the page is not reloaded. If the page is reloaded, then Hermit Client requests a new token by sending the stored cookie. The token is available everywhere in the application thanks to react's `Context` pattern. Most of the logic can be found at `src/hooks/useAuth`.

The session is stored in the database as opposed to being in-memory server side. However, due to most requests using a JWT, this will not be a big performance hit, as we only need to query the DB when the client is exchanging a cookie for a token, and this only happens once when the app is being initialized. The benefit of storing the session in the DB is that Hermit Server remains stateless, and can be scaled horizontally without issues.

## Integration Tests

All integration tests will run against Hermit Server's staging environment.
Github Actions is configured to run integration tests when a PR is opened against the `main` branch.
The configuration is located at `.github/workflows/test.yml`. Itegration tests are found at `cypress/e2e`. The integration tests steps is configured to enforce test coverage, currently set at 50%, but the idea is to achieve 100% code coverage in the future.

To run tests locally, first start the dev server in test mode:

```
npm run start:test
```

This will instrument the code in order for cypress to collect code coverage. Then run:

```
npx cypress open
```

And you will use Cypress' dashboard in order to run tests.
The code coverage report can be found at `coverage/lcov-report/index.html`. Open it in a browser and voila!

## Deployment

Deployed with Heroku Pipelines. When code is pushed to the `main` branch, the application is deployed to a [staging environment](https://staging.hermit.cloud/). The application in the staging env can be promoted to production with the simple click of a button in the Heroku pipelines dashboard. The Procfile at the root of the project declares a `web` process in Heroku that will serve the static files that are produced by the `npm run build` step.

## Roadmap

Currently, environment configuration is calculated at runtime based on the url.
The next feature on the roadmap is to get rid of the `src/utils/getHost` function and instead get all the configuration paramenters via a call to the express base server `/`.
