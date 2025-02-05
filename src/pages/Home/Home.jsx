import AboutSection from "@/components/Home/AboutSection/AboutSection";
import Banner from "@/components/Home/Banner/Banner";
import CTASection from "@/components/Home/CTASection/CTASection";
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
    </main>
  );
};

export default Home;
