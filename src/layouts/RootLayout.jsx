import { Outlet } from "react-router-dom";
import TopBar from "../components/Topbar.jsx";
import Header from "../components/Header";
import Footer from "../components/Footer";

function RootLayout() {
  return (
    <>
      <TopBar />
      <Header />
      <main className="h-full-screen"><Outlet /></main>
      <Footer />
    </>
  );
}

export default RootLayout;
