import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    style: {
      color: "blue",
    },
  },
  "Namaste Everyone!! from h1"
);

//   createElement is an object
const heading2 = React.createElement(
  "h2",
  {
    style: {
      color: "blue",
    },
  },
  "Namaste Everyone!! from h2"
);

//   console.log(heading2);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [heading1, heading2]
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);

// package-lock.json locks the version
// It helps in downloading all dependency where our server is running
// It keeps hash of version ( Means version which is running on my pc is same as version running on server or not) -> maintains integrity

// node_modules
// add this in git-ignore
// if you want to get ur node_modules again then run ->  npm install (for that you will need package.json and package-lock.json)
// Never Touch This:
// node_modules
// package.json and package-lock.json

// Never put it in gitIgnore

// In package.json we have two symbols:

// Syntac major.minor.patch for npm

// Patch is only a big fix.

// For updating all dependency to a latest version
// Simply change every dependency's version to *, then run npm update --save

// -D is for development which means we don't want it in production environment/global environment

// 1) ^ This will updates patch as well as minor version

// 2) ~ This will allow only patch to be update
