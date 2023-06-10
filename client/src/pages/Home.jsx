"use client";

import { useEffect, useState } from "react";
import RootLayout from "./layouts/RootLayout";
import { Card } from "../components";

const Home = () => {
  const [completedTodos, setCompletedTodos] = useState([]);
  const [incompletedTodos, setIncompletedTodos] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("http://localhost:3001/api/v1/todo/");
        const data = await res.json();
        return data;
      } catch (error) {
        return error;
      }
    };

    fetchTodos()
      .then((data) => {
        const completed = data.filter((item) => item.completed === true);
        const incomplete = data.filter((item) => item.completed === false);
        setCompletedTodos([...completedTodos, ...completed]);
        setIncompletedTodos([...incompletedTodos, ...incomplete]);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  console.log(incompletedTodos);

  return (
    <RootLayout>
      <div className="container-fluid col-11 mt-4">
        <div className="row row-cols-2">
          <div className="col">
            {incompletedTodos.map((todo, index) => {
              return (
                <Card
                  title={todo.name}
                  status={todo.completed}
                  description={todo.description}
                  dateOfCreation={todo.created_at}
                  key={todo.id}
                />
              );
            })}
          </div>
          <div className="col">
            {completedTodos.map((todo, index) => {
              return (
                <Card
                  title={todo.name}
                  status={todo.completed}
                  description={todo.description}
                  dateOfCreation={todo.created_at}
                  key={todo.id}
                />
              );
            })}
          </div>
        </div>
      </div>
    </RootLayout>
  );
};
export default Home;
