import { InfinitySpin } from "react-loader-spinner";

const Spinner = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-almond">
      <InfinitySpin
        visible={true}
        width="500"
        color="#195908"
        ariaLabel="infinity-spin-loading"
      />
    </section>
  );
};

export default Spinner;
