import axios from "axios";
import React, { useEffect, useState } from "react";

const TodoPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/todos").then((res) => {
      setData(res.data);
      setIsLoading(false);
    });
  }, []);

  if (isLoading) {
    return <>loading...</>;
  }

  return <>{data?.map((data) => data.title)}</>;
};

export default TodoPage;
