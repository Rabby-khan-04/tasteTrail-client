import cookingVid from "@/assets/video/cooking.mp4";
const ShopBanner = () => {
  return (
    <section className="px-12 pb-12">
      <div className="grid grid-cols-5 bg-granny_smith_apple rounded-[50px]">
        <div className="col-span-2 self-center p-8">
          <h2 className="text-[40px] font-louize_medium text-primary mb-4">
            Taste the Best, Love Every Bite
          </h2>
          <p className="text-base font-maax text-primary mb-3">
            Made with fresh, high-quality ingredients, our dishes are crafted to
            bring out the best flavors. Whether you{"'"}re craving something
            hearty or light, our selection has something for everyone.
          </p>
          <p className="text-base font-maax text-primary mb-3">
            Enjoy a delicious experience with every order. From quick bites to
            full meals, we ensure quality, taste, and satisfaction in every
            dish. Shop now and treat yourself to something special!
          </p>
        </div>
        <div className="col-span-3 p-8">
          <video
            src={cookingVid}
            autoPlay={true}
            loop={true}
            className="rounded-[50px]"
          ></video>
        </div>
      </div>
    </section>
  );
};

export default ShopBanner;
