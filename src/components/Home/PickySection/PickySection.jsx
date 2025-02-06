import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";
import kitchenImg from "@/assets/image/home/kitchen-image.jpg";
import PickyAccordion from "./PickyAccordion";
const PickySection = () => {
  const aboutPoints = [
    {
      title: "No Artificial Preservatives",
      description:
        "Our food is free from artificial additives and preservatives, providing a natural and healthy experience.",
    },
    {
      title: "Vegan & Vegetarian Options Available",
      description:
        "Enjoy a variety of plant-based dishes crafted to satisfy both vegans and vegetarians.",
    },

    {
      title: "No Added Sugar",
      description:
        "Our dishes contain only natural sweetness, with no refined sugars or artificial sweeteners.",
    },
    {
      title: "Made Fresh Daily",
      description:
        "All our meals are prepared fresh every day to ensure the highest quality and taste.",
    },
    {
      title: "Sustainable & Eco-Friendly Packaging",
      description:
        "We use biodegradable and recyclable packaging to help reduce our environmental impact.",
    },
  ];

  return (
    <section className="py-32 bg-granny_smith_apple">
      <div className="container">
        <SectionTitle title="We're Picky" />

        <div className="grid grid-cols-2 gap-20 max-w-7xl mx-auto">
          <div>
            <img
              src={kitchenImg}
              className="w-full aspect-[5/6] object-cover object-center rounded-[80px]"
              alt=""
            />
          </div>

          <div className="space-y-4 self-center">
            {aboutPoints.map((point, idx) => (
              <PickyAccordion key={idx} point={point} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PickySection;
