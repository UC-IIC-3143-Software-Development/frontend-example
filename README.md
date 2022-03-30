# Frontend Example

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
Also this project uses React 17.


## Installation

1. `npm install`
2. `npm start`

If you want to use the mock server then use `npm run start:mock`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run start:mock`

**Note: this will intercept all api calls**

With this command you will start the `msw` mock server and all the calls to a APIs is going to use the mocks defined in the `/src/mock` path. 
