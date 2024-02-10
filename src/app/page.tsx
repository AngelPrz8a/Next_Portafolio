import Nav from "app/sections/Nav/page";
import About from "app/sections/About/page";
import Studies from "app/sections/Studies/page";
import Courses from "app/sections/Courses/page";
import Footer from "app/sections/Footer/page";
import Header from "app/sections/Header/page";

export default function Home() {
  return (
    <>
      <Header/>
      <Nav/>
      <About/>
      <Studies/>
      <Courses/>
      <Footer/>
    </>
  );
}
