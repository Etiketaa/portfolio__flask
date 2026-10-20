import { Outlet } from "react-router-dom";
import ScrollToTop from "../components/common/scrollToTop/ScrollToTop";

const Main = () => {
  return (
    <div className="relative bg-canvas text-ink min-h-screen">
      <Outlet />
      <ScrollToTop />
    </div>
  );
};

export default Main;