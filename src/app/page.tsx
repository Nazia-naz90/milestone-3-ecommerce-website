import Hero from "./components/hero";
import Editors from "./components/editorPick";
import FeatureProduct from "./components/featureProduct";
import FeaturedPost from "./components/featuredPost";
import Header from "./components/navbar";
import Footer from "./components/footerFirst";



export default function Home() {
  return (
    <div>
     <Header/>
     <Hero/>
     <Editors/>
     <FeatureProduct/>
     <FeaturedPost/>
     <Footer/>
    </div>
    

       );
}
