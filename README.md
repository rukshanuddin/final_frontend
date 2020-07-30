# The Block

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
![block](/src/resources/block.svg)

## Project FAQ

### What is The Block? - Main Concept

The Block is a application which organizes information found in the [BALOCK](http://bit.ly/flatiron-student-resources), an unofficial resource at Flatiron School that is an amazing spreadsheet composed of links to various resources regarding software development and tech in general. This project aims to display that information in an easy to navigate format. Clients do not have to register to view links, but can register if they wish to leave comments.

You can clone this repo to test the client side on your local machine ass well as the server side repo, [The Block - Backend](https://github.com/rukshanuddin/final_backend), to test the client side of the application.

### How It Works

After navigating to the root page, users will be presented with a menu on the left to check out the Topics/Links available. They can read more about the project and also have the option of Signup/Login.

After creating an account, the user will be able to leave/delete comments on links.

### The Problem that is Solved

The original document from which this project is based is a Google spreadsheet, that can be difficult to navigate and slow to load at times. This presents that information in an easy-to-navigate format and gives people the added option of leaving comments.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Installing

This projects is setup taking into consideration that the [API](https://github.com/rukshanuddin/final_backend) is already running on [localhost](http://localhost:3000/) port 3000. Directions are available in the [README file of that repo](https://github.com/rukshanuddin/final_backend/blob/master/README.md). Please download the API and start the server before the following steps.

1. Clone this project
2. Navigate to directory and from the terminal, run

    ```shell
    npm install
    ```

3. After package installation is complete, run

    ```shell
    npm start
    ```

4. Check to see if it is working by opening **[localhost:3001](http://localhost:3001/)**(or whichever port you specified) in your browser.

## Project Checklist

[Checklist available here](https://github.com/rukshanuddin/final_frontend/blob/master/CHECKLIST.md)

## Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [react-router](https://reactrouter.com/) - Collection of navigational components that compose declaratively with your application.
* [connected-react-router](https://github.com/supasate/connected-react-router) -A Redux binding for React Router v4.
* [redux](https://redux.js.org/) - JavaScript library for managing application state
* [react-redux](https://react-redux.js.org/) - Official React bindings for Redux
* [redux-thunk](https://github.com/reduxjs/redux-thunk) - Middleware that allows you to write action creators that return a function instead of an action.
* [@material-ui/core](https://material-ui.com/) - React components for faster and easier web development.
* [@material-ui/icons](https://material-ui.com/components/material-icons/) - Google [Material icons](https://material.io/resources/icons/) packaged as a set of React components.

## Contributing

Issues and pull requests are welcome at [https://github.com/rukshanuddin/final_frontend](https://github.com/rukshanuddin/final_frontend). This project as well as all other content on my GitHub are intended to be safe, welcoming, and open for collaboration.

Users are expected to adhere to the [Contributor Covenant code of conduct](https://www.contributor-covenant.org/version/1/4/code-of-conduct)

## Authors

* **Rukshan Uddin** - *Initial work* - [GitHub/rukshanuddin](https://github.com/rukshanuddin) - [Personal Site](https://awesomeweb.design)

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
