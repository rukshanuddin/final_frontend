# Requirements Checklist

1. The code is written in ES6 as much as possible

   * [x] True

2. create-react-app was used to create your React app

   * [x] True

3. There are 2 container components

   * [x] True
  
    Container/Class components

    ---

   1. AllLinks
   2. Comments
   3. LinkShow
   4. TopicList
   5. TopicShow
   6. Login
   7. Logout
   8. CommentForm
   9. SignUpComponent
   10. Bar

4. There are 5 stateless components

   * [x] True

    Stateless/Functional components

    ---

   1. About
   2. CommentCard
   3. Home
   4. LinkItem
   5. LinkList
   6. NotFound
   7. Title
   8. TopicItem
   9. Sidebar
   10. AuthBar

5. There are 3 routes

   * [x] True
  
    Routes

    ---

   1. "/" - Home
   2. "/topics" - TopicsList
   3. "/topics/:id" - TopicShow
   4. "/links" - AllLinks
   5. "/links/:id" - LinkShow
   6. "/about" - About
   7. "/signup" - Signup
   8. "/login" - Login
   9. "/logout" - Logout
   10. "/*" - 404 to NotFound

6. react-router is being used with proper RESTful routing

   * [x] True

    *I am using react-router, react-router-dom and connected-react-router to handle all my routing.*
  
7. Use Redux middleware to respond to and modify state change

   * [x] True

    *Using redux with redux-thunk middleware.*

8. Make use of async actions and redux-thunk middleware to send data to and receive data from a server

   * [x] True

    *Using thunk to handle fetch data requests.*
  
9. Use of Rails API backend to persist data for the application

   * [x] True
  
    1. **Users** - persist to database
    2. **Comments** - persist to database

10. Uses fetch() within actions to GET and POST data from your API - do not use jQuery methods

    * [x] True

    *All requests to API are handled by fetch().*

11. Good understanding of the react/redux state flow

    * [x] True

    1. Action dispatched.
    2. Redux store will pass the current state tree and the action to the reducer function it was given.
    3. The root reducer can combine the output of multiple reducers into a single state tree. Useful for having separate reducers, i.e. (users, topics, links, link, comments, topic).
    4. Redux store saves the complete state tree returned by the root reducer.

12. Your client-side application should handle the display of data with minimal data manipulation

    * [x] True

    *Client renders components from data fed from API, it doesn't mutate that data.*
  
13. Good understanding of state and props in React

    * [x] True

14. Your application should have some minimal styling

    * [x] True

    *uUsed @material-ui/core and @material-ui/icons for styling, in addition to some CSS.*

15. Knowledge of async JS with Promises

    * [x] True

    A Promise in an object that, effectively *promises* that a result will be returned in the future. There is no telling when it will be returned, but it will execute the code provided in the case there is a successful result or a failure.

    It allows developers to be able to respond to results being returned, whenever that may be. It allows the code to continue executing while awaiting the response.

    The most common promise that developers encounter are promises returned from a Web API.

    Basic Usage.

    1. When a *promise* is created, it is considered *pending*. It will stay *pending* until it is *returned*.
    2. When it is *returned* it is considered *resolved*.

       * Successful promises are considered *fulfilled*. They return a value that can be accessed by chaining a ```.then()``` block to the end of the promise chain. Each ```.then()``` will contain the previous promise's return value. ```.then()``` will let you execute code based on that value.
       * Unsuccessful promises are considered *rejected* It returns a *reason*, an error message explaining why the promise was rejected. These *reasons* can be accessed by chaining a ```.catch()``` block to the end of the promise chain. ```.catch()``` will let you execute code when a promise is rejected and can be based on the *reason* that is given.
