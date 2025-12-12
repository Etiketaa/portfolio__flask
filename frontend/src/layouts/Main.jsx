import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div data-theme={"light"} className="relative">
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default Main;
