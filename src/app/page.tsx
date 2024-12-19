import Asgaard from "@/components/Asgard";
import { BlogSection } from "@/components/blogsection/BlogPosts";
import Footertop from "@/components/FooterComponent";
import Hero from "@/components/Hero";
import SideTableSection from "@/components/tables/tables";
import TopPicks from "@/components/Toppics";



export default function Home() {
  return (
   <div>
    <Hero />
    <SideTableSection />
    <TopPicks />
    <Asgaard />
    <BlogSection />
    <Footertop />
   </div>
  );
}
