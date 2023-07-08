import React, { useState, useEffect } from "react";
import News from "./News";

const NewsList = () => {
const API_KEY_ENV = import.meta.env.VITE_API_KEY;
  const url = 
    `https://newsapi.org/v2/top-headlines?` +
    'category=sports&'+ "country=us&" +
    `apiKey=${API_KEY_ENV}`;

    console.log(API_KEY_ENV);

  const [dataSet, setDataSet] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setDataSet(data.articles);
        console.log(typeof(data.articles));

      } catch (error) {
        console.error("error fetch data", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="px-9">
      {
      dataSet.map((data, i) => (
        <News data={data} key={i}/>
      ))
      }
    </div>
  );
};

export default NewsList;
