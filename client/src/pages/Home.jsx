import { useEffect, useState } from "react";
import RootLayout from "./layouts/RootLayout";
import { Card } from "../components";

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [incompletedTodos, setIncompletedTodos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/v1/todo/")
      .then((data) => data.json())
      .then((items) => {
        const filteredCompleted = [
          ...items.filter((item) => item.completed === true),
        ];
        const filteredIncomplete = [
          ...items.filter((item) => item.completed === false),
        ];
        setTodos([...items]);
        setCompletedTodos([...filteredCompleted]);
        setIncompletedTodos([...filteredIncomplete]);
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <RootLayout>
      <button
        className="btn btn-lg btn-warning"
        onClick={() => {
          setTodos([...todos.reverse()]);
        }}
      >
        Sort
      </button>

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
