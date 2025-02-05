import OutlineButton from "@/components/shared/OutlineButton/OutlineButton";
import { LuSoup } from "react-icons/lu";
import { MdOutlineDining } from "react-icons/md";
import { MdOutlineTableBar } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { BsChat } from "react-icons/bs";
import Marquee from "react-fast-marquee";
import AboutPoint from "./AboutPoint";

const AboutSection = () => {
  const aboutPoints = [
    "Fresh, Locally-Sourced Ingredients",
    "No Artificial Preservatives",
    "100% Organic Produce",
    "Vegan & Vegetarian Options Available",
    "Gluten-Free Choices",
    "No Added Sugar",
    "Made Fresh Daily",
    "Sustainable & Eco-Friendly Packaging",
  ];

  const navigate = useNavigate();
  return (
    <>
      <section className="bg-kombu_green pt-40 pb-16">
        <div className="max-w-6xl mx-auto text-center space-y-12">
          <div className="text-8xl font-louize font-light text-center text-granny_smith_apple flex items-center flex-wrap justify-center gap-2">
            <span>A chef-crafted,</span> <LuSoup />{" "}
            <span>flavor-packed dining</span> <span>experience</span>{" "}
            <MdOutlineDining />
            <span>made</span> <span>with fresh, high-quality</span>{" "}
            <span>ingredients delivered to</span> <span>your table</span>{" "}
            <MdOutlineTableBar />
          </div>

          <OutlineButton
            text="Contact us"
            onClick={() => navigate("/contact")}
            className="mx-auto text-granny_smith_apple"
            Icon={BsChat}
          />
        </div>
      </section>
      <section>
        <div>
          <Marquee
            className="bg-granny_smith_apple py-5 border-b border-b-black"
            pauseOnHover={true}
          >
            {aboutPoints.map((point, idx) => (
              <AboutPoint key={idx} text={point} />
            ))}
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default AboutSection;
