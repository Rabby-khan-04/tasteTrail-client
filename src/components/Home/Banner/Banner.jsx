import { motion, useScroll, useTransform } from "framer-motion";
import bannerImg from "@/assets/image/Banner/home-banner.jpg";
import OutlineButton from "@/components/shared/OutlineButton/OutlineButton";
import { useNavigate } from "react-router-dom";
import { RiShoppingBasket2Fill } from "react-icons/ri";
import { useEffect, useState } from "react";

const Banner = () => {
  const [headerHeight, setHeaderHeight] = useState(0);
  const navigate = useNavigate();
  const { scrollYProgress } = useScroll();

  const imagTranslate = useTransform(
    scrollYProgress,
    [0.01, 0.03],
    ["280px", "0px"]
  );
  const imagScale = useTransform(scrollYProgress, [0.01, 0.03], [0.7, 1]);
  const imageBorderRadious = useTransform(
    scrollYProgress,
    [0.01, 0.03],
    ["300px", "0px"]
  );

  const textTranslate = useTransform(
    scrollYProgress,
    [0.01, 0.02],
    ["60px", "300px"]
  );
  const textColor = useTransform(
    scrollYProgress,
    [0.01, 0.04],
    ["#195908", "#ffffff"]
  );

  const overlayOpacity = useTransform(scrollYProgress, [0.01, 0.05], [0, 0.4]);

  useEffect(() => {
    const height = document.getElementById("header");
    setHeaderHeight(height.offsetHeight);
  }, []);

  return (
    <section className="relative">
      <div className="absolute inset-0 z-10">
        <motion.div
          style={{ translateY: textTranslate, color: textColor }}
          className={`max-w-2xl mx-auto text-center space-y-5 sticky  transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]`}
        >
          <h1 className="text-8xl font-louize leading-none">
            Bringing Flavor to Your Doorstep
          </h1>
          <motion.div style={{ color: textColor }}>
            <OutlineButton
              text="Shop Now"
              onClick={() => navigate("/shop")}
              className="mx-auto"
              Icon={RiShoppingBasket2Fill}
            />
          </motion.div>
        </motion.div>
      </div>

      <div className={`sticky top-[${headerHeight}px]`}>
        <div className="w-full overflow-hidden">
          <div className="relative w-full h-screen">
            <div className="absolute inset-0 overflow-hidden">
              <motion.div
                className="absolute inset-0 overflow-hidden transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
                style={{
                  translateY: imagTranslate,
                  scale: imagScale,
                  borderTopLeftRadius: imageBorderRadious,
                  borderTopRightRadius: imageBorderRadious,
                }}
              >
                <img src={bannerImg} className="w-full inline-block" alt="" />
                <motion.div
                  style={{ opacity: overlayOpacity }}
                  className="absolute inset-0 w-full h-full bg-black transition-all duration-300 ease-[cubic-bezier(.4,0,.2,1)]"
                ></motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
