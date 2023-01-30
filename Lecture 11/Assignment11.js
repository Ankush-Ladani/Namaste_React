// 1. What is prop drilling?
// When we want some data to a children from top or some parent component , then we can pass data using props by passing to all components till out original component which needs data.

// 2. What is lifting the state up?
// When we want a single parent element which can control all the child component , then we sholul initialize state in the parent component.

// 3. What is Context Provider and Context Consumer?
// Context Provider is a component which is used to change or manipulate default values of Global Context.
// Context Consumer is also a component which is used to get all values which are passed to Context Provider.

// 4. If you don’t pass a value to the provider does it take the default value?
// Yes , It will take default value of Context from the Global Context.
