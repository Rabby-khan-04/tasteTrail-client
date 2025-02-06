import PropTypes from "prop-types";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const PickyAccordion = ({ point }) => {
  return (
    <Accordion
      type="single"
      className="bg-[#91c085] px-10 py-2 hover:bg-[#87B27B] transition-colors ease-out duration-300 rounded-3xl"
      collapsible
    >
      <AccordionItem value="item-1">
        <AccordionTrigger>{point.title}</AccordionTrigger>
        <AccordionContent>{point.description}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

PickyAccordion.propTypes = {
  point: PropTypes.object,
};

export default PickyAccordion;
