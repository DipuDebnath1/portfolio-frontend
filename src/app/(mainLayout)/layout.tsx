import { ReactNode } from "react";
import Sidebar from "../componets/shared/Sidebar";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex min-h-screen max-w-screen-2xl mx-auto">
      <div className="lg:w-1/4">
        <Sidebar />
      </div>
      <div className="lg:w-3/4">{children}</div>
    </div>
  );
};

export default Layout;
