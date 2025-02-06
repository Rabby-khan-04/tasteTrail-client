import AboutSection from "@/components/Home/AboutSection/AboutSection";
import Banner from "@/components/Home/Banner/Banner";
import CTASection from "@/components/Home/CTASection/CTASection";
import ProductSection from "@/components/Home/ProductSection/ProductSection";
// import paperBgImg from "@/assets/image/background/bg-paper.jpg";

const Home = () => {
  return (
    <main
      // style={{ backgroundImage: `url(${paperBgImg})` }}
      // className="bg-cover bg-center bg-no-repeat"
      className="bg-almond"
    >
      <Banner />
      <AboutSection />
      <CTASection />
      <ProductSection />
    </main>
  );
};

export default Home;
