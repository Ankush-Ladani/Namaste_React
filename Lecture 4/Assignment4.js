// 1. Is JSX mandatory for React?
// No JSX is not mandatory for React, we can use createElement API instead.
// But we are using JSX because it's saves our time , help us to write clean code and also code which can be easy to debug.

// 2. Is ES6 mandatory for React?
// No it's also optional but we are using because many new feature help us in writing less and maintainable code. And also major chages in JS were introduced in ES6 version so , they are very useful for developers.

// 3. {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX
// {TitleComponent} -> This is simply a React Element which will be returning a jsx.
// {<TitleComponent />} -> This is a functional component which will be returning a bunch of elements wrapped under single parent.
// {<TitleComponent><TitleComponent/>} -> This is same as above.

// 4. How can I write comments in JSX?
//  /* Comment.... */

// 5. What is <React.Fragment></React.Fragment> and <></> ?
// Since we know that JSX allows only one single parent , so we define div for that and enclose all our other components inside it. But if we dont want extra div then we can use <></> or <React.Fragment></React.Fragment>. It will not make extra div in DOM.
// But dis-advantage is that you will not be able to props in Fragment.

// 6. What is Virtual DOM?
// Virtual DOM is the representation or copy of original DOM.

// 7. What is Reconciliation in React?
// Reconciliation is the process by which react updates the Browser DOM.
// It used :-
// i) Virtual DOM -> Explain in brief
// ii) Diffing Algorithm -> same here
// Diff algo uses BFS.
// Two diff type of element will produce diff. tree.
// Two same type of element will be differentiated using // *"KEY" prop.
// Explain why we use key also.

// 8. What is React Fiber?
// React Fiber is a concept of ReactJS that is used to render a system faster and smoother.Fiber focuses on animations and responsiveness. It has the ability to split work into chunks and prioritize tasks. We can pause work and come back to it later. We can also reuse previously completed work or maybe abort it if it is not needed. As opposed to the old React reconciler, it is asynchronous.

// Old reconciler: Stack -> Example of as we type in backend will fetch data ( We can observe delay )

// * Fiber is a just plain javascript object with some properties

// React first processes those fibers, those units of work and we end with something called finishwork(). Afterward, it commits this work resulting in visible changes in the DOM.

// Render phase -> Asynchronous Phase
// Commit phase -> Synchronous Phase

// The first one is called the current tree and the second one is called workInProgress tree

// 9. Why we need keys in React? When do we need keys in React?
// To make rendering faster and also to differentiate elements of same type.
// We need keys when we have elements of same type.

// 10. Can we use index as keys in React?
// Yes, of course but it is not a good Practice , instead you can use id as a key.
// no Key <<<<<<<< index as Key <<<< unique key

// 11. What is props in React? Ways to
// props stands for properties which are basically parameters or arguments in a function.
// Practical example in Lecture-3 Folder

// 12. What is a Config Driven UI ?
