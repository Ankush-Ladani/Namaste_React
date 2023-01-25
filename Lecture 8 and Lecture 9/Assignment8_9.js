// 1. How do you create Nested Routes react-router-dom cofiguration
// By intoroducing a route inside children of children.

// Ex. /login/market
// Then we will first build /login path under home in children array and Outlet will contain all children routes.
// Then we will introduce another children array in which we define path like market and we define outlet in the parent which is Login Component.

// 2. What is the order of life cycle method calls in Class Based Components

// This order is for only a single component and not nested components

// First constructor will be created
// Then render method will be called
// Then componentDidMount method will be called
// Then componentWillUpdate will be called
// And finally componentWillUnmount will be called

// 3. Why do we use componentDidMount?
// The componentDidMount() method allows us to execute the React code when the component is already placed in the DOM (Document Object Model). This method is called during the Mounting phase of the React Life-cycle i.e after the component is rendered.

// 4. Why do we use componentWillUnmount? Show with example
// We have to use this method for performance optimization.
// For Ex. We have created a Interval function which will fetch data on specific page after specific time. In this cases if we will not use this method then due to SPA architecture , it will be called again and again on other pages too and after some time it will heavily loaded and slow down our page.

// In these type of cases we should clear that Interval in this method.

// 5. (Research) Why do we use super(props) in constructor?
// https://www.turing.com/kb/beginners-guide-to-super-and-super-props-in-react -> Link
// Super() function is to call the constructor of the parent class. It is used when we need to access a few variables in the parent class.
// super() is used to call the parent constructor, whereas, super(props) would pass the props to the parent constructor.
// * React assigns props on the instance right after calling the component constructor.

// 6. (Research) Why can't we have the callback function of useEffect async?

// https://www.designcise.com/web/tutorial/why-cant-react-useeffect-callback-be-async

// because:
// 1. async functions implicitly return a promise, and;
// 2. useEffect expects its callback to either return nothing or a clean-up function

// Therefore, to use async/await inside the useEffect hook, you can do either of the following:
// Create a Self-Invoking Anonymous Function;
// Create a Nested Named Function.

// ? Assignment 9

// 1. When and why do we need lazy()?
// We use lazy loading only when we have large size files in our app.If our app size is bigger then if we load all data at same time then it will slow down perfomance of our website. For this issue , we use lazy loading which means we will load only that things which are needed at the time.
// For example , we have restaurant info we should not render all things in first render -> will slow down our web app.
// for that we can use lazy loading and we will load when user clicks on specific restaurant.

// 2. What is Suspense ( to cause to stop temporarily ) ?

// It is a component which can be imported from react.
// So when we implement lazy loading -> it took sometime to download js file for that specific component.
// basically react suspense loading -> for that we use Suspense component -> which have fallback as a props which is when this loading is in progress

// 3. Why we got this error : A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition? How does suspense fix this error?

// There are sometimes when component under suspense takes sometime to render, but we also don't want to show loader or the fallback component then we can tell react to show the old component only and render the new one when its ready using startTransition method.

// Transitions are a new concurrent feature introduced in React 18. They allow you to mark updates as transitions, which tells React that they can be interrupted and avoid going back to Suspense fallbacks for already visible content.

// 4. Advantages and disadvantages of using this code splitting pattern?

// Code splitting is one of the most compelling features of webpack. This feature allows you to split your code into various bundles which can then be loaded on demand or in parallel. It can be used to achieve smaller bundles and control resource load prioritization which, if used correctly, can have a major impact on load time.

// Dis-Advantages
// The only drawback about code splitting is that you can only use it in client side rendering.
