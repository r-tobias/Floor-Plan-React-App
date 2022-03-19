# Floor Plan React App
In the Intro to Functional Components lesson, you saw the following React basics:

* How to define components as functions
* How to return a function component's UI defined using JSX
* How to pass props to components
* How to access the properties on props within a component

The minimum requirements are a deliverable.
## Minimum Requirements
1. Define each component in its own file. The naming convention to use for a component's file is UpperCamelCase also known as Pascal Case, for example, a <CodeSandbox> component's file would be named CodeSandbox.js (CodeSandbox.jsx also works).
2. Export each component from its module. 
3. Define the following components as functions and code them such that they fulfill their responsibilities:
With the minimum requirements complete, the output should resemble:
![minumum requirement](mockup.JPG)

* Hints
If a component accepts a prop, that prop must be passed to it by the component that renders it, in other words, parent components pass props to their children components.
## Bonus
Style the components to make the output look like a floor plan:
* Hints
    * Use className and/or id on React Elements (div, p, span, etc.) to apply CSS styling using CSS rules in the styles.css module.
    * Styling the <FloorPlan> component as a CSS Grid is a great way to layout its children (grid items).
    * Use props being passed in to generate a unique id on an element that can be used to target that element for custom styling. For example:
     div className='bedroom' id={`bed-${props.bedNum}`}>
    Would result in this Bedroom> having a wrapping div> like:
     div class="bedroom" id="bed-2">
    if it was rendered as:
     Bedroom bedNum={2} />

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
