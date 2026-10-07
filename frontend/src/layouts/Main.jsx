import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div className="relative bg-canvas text-content min-h-screen">
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default Main;