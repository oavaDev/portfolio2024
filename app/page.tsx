import AboutMe from "oava/components/AboutMe/AboutMe";
import Navbar from "oava/components/Navbar/Navbar";
import Experiences from "oava/components/Experience/Experiences";
import Contact from "oava/components/Contact/Contact";

export default function Home() {
  return (
      //Here with px-96 i'm declaring the total width of the page
    <main className="flex min-h-screen flex-col items-center sm:px-10 md:px-40 lg:px-44 px-2">
        <Navbar />
        <AboutMe />
        <Experiences/>
        <Contact />
    </main>
  );
}
