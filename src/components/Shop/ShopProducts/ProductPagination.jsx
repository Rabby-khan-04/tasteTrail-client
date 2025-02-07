import PropTypes from "prop-types";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const ProductPagination = ({ pages, currentPage, setCurrentPage }) => {
  const handlePrevious = () => {
    if (currentPage <= 0) {
      return;
    } else {
      setCurrentPage((prev) => prev - 1);
    }
  };
  const handleNext = () => {
    if (currentPage === pages.length - 1) {
      return;
    } else {
      setCurrentPage((prev) => prev + 1);
    }
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem onClick={handlePrevious}>
          <PaginationPrevious className="cursor-pointer" />
        </PaginationItem>
        {pages.map((page, idx) => (
          <PaginationItem key={idx} onClick={() => setCurrentPage(page)}>
            <PaginationLink
              isActive={currentPage === page ? true : false}
              className="cursor-pointer"
            >
              {page + 1}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem onClick={handleNext}>
          <PaginationNext className="cursor-pointer" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

ProductPagination.propTypes = {
  pages: PropTypes.array.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default ProductPagination;
