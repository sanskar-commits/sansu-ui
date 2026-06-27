import "../../styles/layout.css";

import { Header } from "./Header";
import { Sidebar } from "./Sidebar";
import { Content } from "./Content";
import { Footer } from "./Footer";

export function Layout() {
  return (
    <div className="layout">
      <Header />

      <div className="layout__body">
        <Sidebar />

        <main className="layout__content">
          <Content />
        </main>
      </div>

      <Footer />
    </div>
  );
}