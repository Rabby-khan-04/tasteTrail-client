import { useState } from "react";
import CTAPoint from "./CTAPoint";
import OutlineButton from "@/components/shared/OutlineButton/OutlineButton";
import { LuMoveRight } from "react-icons/lu";
import { useNavigate } from "react-router-dom";

const CTASection = () => {
  const [bgColor, setBgColor] = useState("#ffffff");
  const navigate = useNavigate();

  const ctaPoints = [
    {
      text: "Nourish Your Body Naturally",
      color: "#ffffff",
      benefit:
        "Enjoy meals made from fresh, organic ingredients that promote overall well-being.",
    },
    {
      text: "Boost Energy with Fresh Ingredients",
      color: "#efd093",
      benefit:
        "Our nutrient-rich meals help you stay active and energized throughout the day.",
    },
    {
      text: "Enjoy Guilt-Free Indulgence",
      color: "#fbb887",
      benefit:
        "Delicious, health-conscious options that let you indulge without compromising on nutrition.",
    },
  ];

  return (
    <section
      className="py-28 transition-all duration-300"
      style={{ backgroundColor: `${bgColor}` }}
    >
      <div className="container">
        <h2 className="text-base text-primary font-maax_medium text-center uppercase mb-8">
          Wholesome Dining
        </h2>

        <div className="max-w-6xl mx-auto">
          {ctaPoints.map((point, idx) => (
            <CTAPoint
              key={idx}
              text={point.text}
              color={point.color}
              setBgColor={setBgColor}
            />
          ))}
        </div>

        <div className="flex items-center justify-center mt-16">
          <OutlineButton
            Icon={LuMoveRight}
            text="Get Started"
            className="text-primary"
            onClick={() => navigate("/shop")}
          />
        </div>
      </div>
    </section>
  );
};

export default CTASection;
