import { useRouter } from "next/router";
import { FC, ReactNode } from "react";
import { Navbar } from "./navbar";
import { Footer } from "./footer";

interface ILayoutProps {
    children: ReactNode;
  }
  
  export const Layout: FC<ILayoutProps> = ({ children }) => {
    const router = useRouter();
    return (
      <>
        <Navbar />
        {children}
        <Footer />
      </>
    );
  };
  