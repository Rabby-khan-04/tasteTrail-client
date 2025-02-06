const ShopTitle = () => {
  return (
    <section className="py-28 ">
      <div className="max-w-2xl mx-auto text-center space-y-4">
        <h1 className="text-7xl font-louize_medium text-primary">
          Tasty Treats,
          <br /> Pure Joy
        </h1>
        <p className="text-base font-maax text-black">
          Savor fresh flavors and delicious bites, crafted to satisfy every
          craving. Good food, great mood—
          <a
            href="#products"
            className="transition-all duration-200 hover:text-primary italic underline font-maax_medium inline-block"
          >
            order now!
          </a>
        </p>
      </div>
    </section>
  );
};

export default ShopTitle;
