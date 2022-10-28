# :sos: Frontend Huella positiva

## How to run the project

The back-end needs to be running for requests and forms to work as expected. This is an optional step.

### How to run the back-end application

Updated instructions on how to run the back-end can be found in [the back-end's own repository](https://github.com/ayudadigital/huelladigital-backend).

### How to run the front-end application

The only dependency needed is [NodeJS](https://nodejs.org/en/).

To run the project for the first time, you have to run two scripts:
```bash
npm install
npm run start
```

If the previous steps complete successfully, the view will be available on [http://localhost:3000](http://localhost:3000).


## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm test:e2e`
Launches the cypress with test end to end runner in the interactive watch mode.<br />
See more information about [cypress](https://docs.cypress.io/guides/overview/why-cypress.html)

### `npm run new:fc`

Create a new functional component in the specified path, inside a directory with the specified component name.<br />
You can add the arguments `name` and `path` to not use the interactive cli.

### `npm run new:hook`

Create a new hook abstraction inside `hooks` directory with the specified hook name.<br />
**Remember** to use the prefix `use`.

### `npm run storybook`

Run storybook to display all the .stories.tsx.<br />
Open [http://localhost:9001](http://localhost:9001) to view it in the browser.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified, and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.
