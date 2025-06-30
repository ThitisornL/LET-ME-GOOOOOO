import React, { useEffect, useState } from "react";

function Api() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((item) => {
        setData(item.products);
      });
  }, []);
  return (
    <div>
      {data.map((e,i) => {
        return(
        <>
        <p>{e.title}</p>
        <img src={e.images[0]} />
        </>
      )
})}
    </div>
  );
}

export default Api;
