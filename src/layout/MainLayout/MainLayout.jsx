import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import Navigation from "../../components/Navigation/Navigation";

const layoutStyle = {
  minHeight: "100dvh",
  display: "flex",
  flexDirection: "column",
};

const contentStyle = {
  flex: 1,
  width: "min(1100px, 100%)",
  margin: "0 auto",
  padding: "1rem",
};

const MainLayout = () => {
  return (
    <div style={layoutStyle}>
      <Header name="SHILO JR THE 3RD" />
      <Navigation />
      <main style={contentStyle}>
        <Outlet />
      </main>
      <Footer age={21} />
    </div>
  );
};

export default MainLayout;
