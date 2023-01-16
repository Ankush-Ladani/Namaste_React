const Shimmer = () => {
  return (
    <div className="shimmer-container">
      {/* <div className="shimmer-search"></div> */}
      <div className="shimmer-resturants">
        {Array(15)
          .fill()
          .map((_, id) => (
            <div className="shimmer-card" key={id}></div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
