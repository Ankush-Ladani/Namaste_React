// 1. What is Microservice?
// When we build our application by combining small application which are running on diiferent ports.
// EX -> We made Frontend in React , Backend in MEN , Authentication in Golang , etc.
// Microservice will gave power of deployment individually when any change happen.
// So it will save our time and also cost of deployment.

// Adv ->
// 1. Agility
// 2. Flexible Scaling
// 3. Continuous Deployment
// 4. Highly maintainable and reliable
// 5. Technology flexibility

// Dis-Adv ->
// 1. Development Sprawl
// 2. Exponential infrastructure costs
// 3. Debugging challenges

// 2. What is Monolithic architecture?
// When we build our application in one environment then it is said to be a monolithic architecture.
// Dis-Adv -> When we have a very small or minor change in code then we have to deploy our whole app from scratch.

// Adv ->
// 1. Ease of deployment
// 2. Development
// 3. Performance
// 4. Simplified Testing
// 5. Easy debugging

// Dis-Adv ->
// 1. Slower Development Speed
// 2. Scalability
// 3. Reliablity
// 4. Barrier to technology adoption
// 5. Deployment ( Discussed above )

// 3. Why do we need useEffect Hook?
// The Effect Hook lets you perform side effects in function components:
// When we want to call an api which should be called once then we need to use this hook. By passing empty dependency array , we can tell browser that call this function after initial render.

// 4. What is Optional Chaining?
// If the object accessed or function called is undefined or null, it returns undefined instead of throwing an error.
// Optional Chaining is helpful when we have to dig down to objects in depth and also to avoid un-relatable o/p.

// 5. What is Shimmer-UI?
// Whenever we click on something , websites call api to fetch data and it takes sometime So for good UI experience we show them cards or anything which are un-filled before api-call and are appered as filled after some time.

// 6. What is difference between JS expression and JS statement?
// An expression is any valid unit of code that resolves to a value. A statement is a unit of code that performs an action.

// 7. What is Conditional Rendering?
// It allows us to show specific thing on a given condition.
// <div>
//     {isLoggedIn ? (
//       <button onClick={() => setIsLoggedIn(false)}>Logout</button>
//     ) : (
//       <button onClick={() => setIsLoggedIn(true)}>Login</button>
//     )}
// </div>

// 8. What is CORS?
// Cross Origin Resource Sharing
// It simply means that a website running on port 1234 can't make api call to other website which is running on other port number for security reasons.

// 9. WHat is async and await?
// async and await helps in asynchronous programming
// We use them when we fetch some data and also when we convert that data into json format.
// await will not be allowed to use if we haven't included async keyword first.
