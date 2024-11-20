import AboutMe from "../componets/about/About";
import Banner from "../componets/banner/Banner";
import BlogsComponents from "@/app/componets/blog/BlogsComponents";
import Contact from "../componets/contact/Contact";
import ProjectShowcase from "../componets/project/ProjectShowcase";

export default function Home() {
  return (
    <>
      <Banner />
      <AboutMe />
      <ProjectShowcase />
      <BlogsComponents />
      <Contact />
    </>
  );
}
