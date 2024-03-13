import { ReactNode } from "react";
import NavBar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import Footer from "../Footer";

interface PropsLayout {
  children?: ReactNode;
}

const Layout = ({ children }: PropsLayout) => {
  return (
    <>
      <NavBar />
      <div className="container">{children}</div>
      <Footer />
      <Toaster />
    </>
  );
};

export default Layout;
