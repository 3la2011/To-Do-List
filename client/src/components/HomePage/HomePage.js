// CSS
import "./HomePage.css";

// Redux
import { useSelector } from "react-redux";

// Components
import { Tasks } from "../Tasks/Tasks";
import { EditPage } from "../EditPage.js/EditPage";

export function HomePage() {
  const { isSelected } = useSelector((state) => state.tasks);
  return (
    <div className="HomePage">
      <h1>Home Page</h1>
      <Tasks />
      {isSelected ? <EditPage /> : ""}
    </div>
  );
}
