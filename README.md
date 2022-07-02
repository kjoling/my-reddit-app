# About the App

This is a project based off of a Codecademy assignment utilizing the undocumented Reddit JSON API:

<https://github.com/reddit-archive/reddit/wiki/JSON>

The app allows you to filter by selected subreddits, loads the home page by default, and allow you to search the filtered posts for specific topics.

The application functions on both Desktop and Moblie view with a dropdown menu on the Mobile version of the application.

This app is live on the following site:

<https://keeans-reddit-app.netlify.app/>

Using Lighthouse, the following scores were assigned to this project:

Performance - 52
Accessibility - 100
Best Practices - 75
SEO - 92

Performance ratings are due to lack of 'Properly sized images, serve images in next-gen format, and image elements do not have explicit width and height'.

The img element is rendered via a Material UI component called "CardMedia", which uses the sx prop to set the img size. It has been set to 50% height and width, but this is not reflected in the test.

## Future Work

Writing end to end tests as well as unit tests with Jest.

## Getting Started with Create React App and Redux

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), using the [Redux](https://redux.js.org/) and [Redux Toolkit](https://redux-toolkit.js.org/) template.

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
