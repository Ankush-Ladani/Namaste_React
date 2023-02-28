const Shimmer = () => {
  
    return (
      <div className="">
        <div className="flex ml-6 flex-wrap w-auto mt-8">
          {Array(50)
            .fill()
            .map((_, id) => (
              <>
              
                <div className="shimmer-card" key={id}></div>
                <p className="w-26"></p>
                <p className="w-40"></p>
              </>
            ))}
        </div>
      </div>
    );
  };
  
  export default Shimmer;
  