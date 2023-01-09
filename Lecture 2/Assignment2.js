// What is `NPM`?
// NPM doesnt have specific full form but normally we call it node package manager because It is a command-line used to install different packages/codes written by some other developers

// What is `Parcel/Webpack`? Why do we need it?
// Parcel is a Beast.
// Parcel is used for bundling many things in one package.
// Parcel is used for this many things :-

// MINIFY -> JS( TERSER ) , CSS( Lightningcss ) , HTML(htmlnano)
// Cleaning of our code
// PORT number management
// HMR ( hot module replacemnt )
// Caching
// Compatible with other browsers (Browserlists)
// Image Optimization
// File Watcher Algorithm
// differentiate between dev and production
// Consistent hashing algorithms

// - What is `.parcel-cache`
// It actually caches our code and minimize it's size and stores information about your project when parcel builds it, so that when it rebuilds, it doesn't have to re-parse and re-analyze everything from scratch.

// What is `npx` ?
// npm execute this file/command.
// Ex - npx parcel build index.html

// What is difference between `dependencies` vs `devDependencies`
// Dependencies which helps in debugging and can show errors while development are known as devDependencies.
// The dependencies which are  helpful for both for development and production are categorised in dependencies.

// - What is Hot Module Replacement?
// It helps in reloading our web page automatically when we change somethings into our code. -> Saves Time a lot.

// - List down your favourite 5 superpowers of Parcel and describe any 3 of them in your own words.
// BrowserLists -> It helps in compatibility of our website in different brosers.
// HMR -> Answered above
//

// What is `.gitignore`? What should we add and not add into it?
// It is a file which consist names of files or folders which we dont want to push into git.
// We should add .parcel-cache , node_modules , .env , etc folders and others files into it.

// What is the difference between `package.json` and `package-lock.json`
// Are neccessary when we have to generate node_modules folder -> npm init
// package.json doesn't tell you much about dependency in brief
// package-lock.json -> locks the version according to our need. (~ and ^ concept)

// - Why should I not modify `package-lock.json`?
// It can cause a problem with version.
// Ex - If version in package-lock.json and package.json are not same then your web-app will not work.

// What is `node_modules` ? Is it a good idea to push that on git?
// It is a folder which handles transitive dependency of different packages.
// It is not a good idea as it is of very large size and also it can be generated using npm init command.

// What is the `dist` folder?

// What is Tree Shaking?
// Tree shaking is a term commonly used within a JavaScript context to describe the removal of dead code.

// What is `browserlists`
// Answered above

// ^ -> will update patch and minor version
// ~ -> will only update patch
