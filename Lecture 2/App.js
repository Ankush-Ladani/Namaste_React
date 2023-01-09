import React from "react";
import ReactDOM from "react-dom/client";

const heading1 = React.createElement(
  "h1",
  {
    key: "h1",
    style: {
      color: "blue",
    },
  },
  "Namaste Everyone!! from h1"
);

// createElement is an object
const heading2 = React.createElement(
  "h2",
  {
    style: {
      color: "blue",
    },
    key: "h2",
  },
  "Namaste Everyone!! from h2"
);

const heading3 = <h3 key="h3">Namaste From heading3</h3>; // React Element written using JSX

const header = (
  <div key="header">
    <h1>Header</h1>
    <ul>
      <li>Home</li>
      <li>About Us</li>
      <li>Contact Us</li>
    </ul>
  </div>
);

// Components are basically a normal JS function returning JSX.

// If we dont have babel then JSX won't be able to execute.

// Keys are used for saving time in re-rendering UI.

const FooterComponent = () => {
  return (
    <div>
      <footer>
        <h1>Footer</h1>
      </footer>
    </div>
  );
};

const FooterComponent2 = () => (
  <div>
    <footer>
      <h1>Footer2</h1>
    </footer>
  </div>
);

//   console.log(heading2);

const container = React.createElement(
  "div",
  {
    id: "container",
  },
  [header, heading1, heading2, heading3]
);

const container2 = (
  <div>
    {header}
    {heading1}
    <FooterComponent />
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(container);
root.render(container2);

// root.render(<FooterComponent />);
// root.render(<FooterComponent2 />);

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
