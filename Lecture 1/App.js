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
