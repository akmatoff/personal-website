import { PropsWithChildren } from "react";
import Navbar from "../Navbar/Navbar";
import Wrapper from "./Wrapper";

function Layout(props: PropsWithChildren) {
  return (
    <div>
      <Navbar />
      <Wrapper>{props.children}</Wrapper>
    </div>
  );
}

export default Layout;
