import { useState } from "react";
import RootLayout from "./layouts/RootLayout";

const postData = async (data) => {
  try {
    const postEntry = await fetch("http://localhost:3001/api/v1/todo/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return postEntry;
  } catch (error) {
    return error;
  }
};

const AddTodo = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [errors, setErrors] = useState("");

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleDescription = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const posted = await postData({ name: title, description });
  };

  return (
    <RootLayout>
      <div className="container-fluid col-7 mt-4">
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              className="form-control"
              name="Title"
              placeholder="Enter title"
              onChange={handleTitle}
            />
          </div>
          <div className="mb-3">
            <textarea
              className="form-control"
              name="Description"
              placeholder="Enter Details..."
              rows={5}
              onChange={handleDescription}
            />
          </div>
          {<p className="text-danger">Error Content</p>}
          <button type="submit">Add Todo</button>
        </form>
      </div>
    </RootLayout>
  );
};
export default AddTodo;
