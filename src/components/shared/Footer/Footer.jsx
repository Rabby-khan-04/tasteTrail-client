import dineImg from "@/assets/image/footer/dine-image.png";
import { IoLocationSharp, IoCallOutline, IoMail } from "react-icons/io5";
import { FaInstagram, FaPinterest, FaYoutube } from "react-icons/fa6";
import { FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-almond">
      <div className="border-y border-black p-4">
        <h2 className="font-louize text-3xl xl:text-4xl text-center">
          TeasteTrail
        </h2>
      </div>
      <div className="border-b border-black grid grid-cols-8">
        <div className="col-span-3 lg:px-5 lg:py-4 xl:px-[3.14rem] xl:py-[1.4rem] text-black">
          <h2 className="text-4xl mb-3 font-louize_medium uppercase">
            About Our Kitchen
          </h2>
          <p className="font-maax_medium text-sm uppercase leading-relaxed">
            At TeastTrail, we bring you fresh, locally-sourced ingredients
            crafted into delicious meals. Our passion for quality and
            authenticity ensures every bite is an experience. Whether you{"'"}re
            dining in or ordering online, we promise great taste and wholesome
            goodness in every dish.
          </p>
        </div>
        <div className="col-span-2 border-x border-black self-center">
          <img src={dineImg} className="w-full" alt="" />
        </div>
        <div className="col-span-3 lg:px-5 lg:py-4 xl:px-[3.14rem] xl:py-[1.4rem]">
          <h2 className="text-4xl mb-3 font-louize_medium uppercase">
            Get in Touch
          </h2>
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <IoLocationSharp className="text-xl" />
              <p className="text-lg font-maax">
                Address: Magura sadar, Magura, Khulna
              </p>
            </div>
            <div className="flex items-center gap-2">
              <IoCallOutline className="text-xl" />
              <p className="text-lg font-maax">Phone: +8801647211326</p>
            </div>
            <div className="flex items-center gap-2">
              <IoMail className="text-xl" />
              <p className="text-lg font-maax">Email: ajrabbyk72@gmail.com </p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-b border-black py-4 lg:px-5 xl:px-[3.14rem] grid grid-cols-2">
        <div>
          <p className="text-lg font-maax_medium text-black">
            TeasteTrail <br />
            &copy; 2025
          </p>
        </div>
        <div className="justify-self-end flex items-center gap-2">
          <p className="text-lg font-maax_medium text-black uppercase">
            Follow Us On
          </p>
          <FaInstagram className="text-xl text-black transition-all duration-200 hover:text-primary" />
          <FaPinterest className="text-xl text-black transition-all duration-200 hover:text-primary" />
          <FaFacebookSquare className="text-xl text-black transition-all duration-200 hover:text-primary" />
          <FaYoutube className="text-xl text-black transition-all duration-200 hover:text-primary" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
