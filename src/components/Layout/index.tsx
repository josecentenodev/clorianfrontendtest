import { ReactNode } from "react";
import NavBar from "../Navbar";
import { Toaster } from "@/components/ui/toaster";

interface PropsLayout {
  children?: ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  return (
    <>
      <NavBar />
      <div className="container">{children}</div>
      <Toaster />
    </>
  );
};

export default Layout;
