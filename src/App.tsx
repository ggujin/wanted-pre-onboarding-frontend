import { Routes, Route } from "react-router-dom";
import { AuthRoute } from "./components/AuthRoute";
import { PrivateRoute } from "./components/PrivateRoute";

import { Signup, Signin, TodoPage } from "./pages";
import "./styles/global.scss";

function App() {
  return (
    <Routes>
      {/* 칠드론이 업서서 바로닫아 /  */}
      <AuthRoute path="/signup" element={<Signup />} />
      <AuthRoute path="/signin" element={<Signin />} />
      <PrivateRoute path="/todo" element={<TodoPage />} />
    </Routes>
  );
}

export default App;
