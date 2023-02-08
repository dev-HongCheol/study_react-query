import "./App.css";
import { Link, Route, Routes } from "react-router-dom";
import HomePage from "./components/Home.page";
import TodoPage from "./components/Todo.page";
import UserPage from "./components/User.page";

function App() {
  return (
    <div className="App">
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">HOME</Link>
            </li>
            <li>
              <Link to="/todo">Todo</Link>
            </li>
            <li>
              <Link to="/users">users</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Routes>
        <Route path="/">
          <Route path="home" element={<HomePage />} />
          <Route path="todo" element={<TodoPage />} />
          <Route path="users" element={<UserPage />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
