import AsgaardSofa from "@/components/Asgard";
import { BlogSection } from "@/components/blogsection/BlogPosts";
import Footertop from "@/components/footertop";
import Hero from "@/components/Hero";
import SideTableSection from "@/components/tables/tables";
import TopPicks from "@/components/Toppics";


export default function Home() {
  return (
   <div>
    <Hero />
    <SideTableSection />
    <TopPicks />
    <AsgaardSofa />
    <BlogSection />
    <Footertop />
   </div>
  );
}
