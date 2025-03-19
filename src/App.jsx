import React from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import Profile from "./components/Profile";
import WorkProcess from "./components/WorkProcess";
import Portfolio from "./components/Portfolio";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import ProjectIdea from "./components/ProjectIdea";
import User from "./components/User";
import HappyClient from "./components/HappyClient";
import Footer from "./components/Footer";
import Testimonial from "./components/Testimonial";

const App = () => {
  return (
    <>
      <Navbar />
      <Banner />
      <Profile />
      <WorkProcess />
      <Portfolio />
      <ProjectIdea />
      <Blog />
      <User />
      <HappyClient />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
