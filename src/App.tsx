import { Routes, Route } from "react-router-dom";

import { Signup, Signin } from "./pages";
import "./styles/global.scss";

function App() {
  return (
    <Routes>
      {/* 칠드론이 업서서 바로닫아 /  */}
      <Route path="/signup" element={<Signup />} />
      <Route path="/signin" element={<Signin />} />
    </Routes>
  );
}

export default App;
