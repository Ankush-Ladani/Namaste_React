const Shimmer = () => {
  
    return (
        <div className="flex flex-wrap mt-8">
          {Array(50)
            .fill()
            .map((_, id) => (
              <div key={id}>
                <div className="bg-slate-200 shimmer-card">
                  <div className="w-50 h-52 mb-2 bg-slate-300"></div>
                  <p className="w-50 bg-slate-300 mt-2 h-10"></p>
                  <p className="w-50 bg-slate-300 mt-8"></p>
                </div>
              </div>
            ))}
        </div>
    );
  };
  
  export default Shimmer;
  