// What is JSX?
// JSX allows us to write html like code along with javascript.

// Superpowers of JSX
// jsx allows ->
// 1. write javascript along with html like code.
// 2. We can define react element easily without using createElement API ( But JSX also use createElement behind the scenes )
// 3. We can define styles as an object and can pass it as props

// Role of type attribute in script tag.
// It is useful when we want to import or export something from normal JS file , we have to define type attribute becoz normal JS file wont allow to use keywords like import or export.
// Options -> module , importmap

// {TitleComponent} vs {<TitleComponent />} vs {<TitleComponent><TitleComponent/>}
// {TitleComponent} -> This is simply a React Element which will be returning a jsx.
// {<TitleComponent />} -> This is a functional component which will be returning a bunch of elements wrapped under single parent.
// {<TitleComponent><TitleComponent/>} -> This is same as above.
