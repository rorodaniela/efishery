import { Bottombar, Header, Sidebar } from "..";
import "./styles.scss";

export default function Layout({ children }) {
  return (
    <>
      <div id="desktop">
        <Sidebar children={children} />
      </div>
      <div id="mobile">
        <Header />
        <div className="content">{children}</div>
        <Bottombar children={children} />
      </div>
    </>
  );
}
