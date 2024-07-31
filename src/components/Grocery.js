import { useEffect } from "react";

const Grocery = () => {
    const updateres = async () => {
        try{
          const resp = await fetch("https://www.swiggy.com/dapi/restaurants/list/update");
          const newjson = await resp.json();
          console.log(newjson);
        } catch (error) {
          console.log("Error Occured", error);
        }
      }
     updateres();

     
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch( "https://www.swiggy.com/api/seo/getListing?lat=22.30080&lng=73.20430&isDineoutCollection=false" );
      const json = await response.json();
      console.log(json);
    } catch (error) {
      console.error("Error fetching Update data:", error);
    }
  };
    return (
        <>
        <h1> This is Grocery Page.</h1>
        <h2> This Page is loading using lazy loading, so it will be loaded saperately.</h2>
        </>
    );
};

export default Grocery;