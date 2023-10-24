import { Route, Routes } from "react-router-dom";
import { MainScreen } from "./MainScreen";
import { StudentScreen } from "./StudentScreen";
import { NavBar, NotFound } from "./shared";
import { MentorScreen } from "./MentorScreen";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<MainScreen />} />
        <Route path="/mentor" element={<MentorScreen />} />
        <Route path="/student" element={<StudentScreen />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
