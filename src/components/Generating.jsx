import { loading } from "../assets";

const Generating = ({ className }) => {
  return (
    <div
      className={`flex items-center h-[3.9rem] px-6 bg-secondary-800/80 rounded-[2rem] ${
        className || ""
      } text-base`}
    >
      <img className="w-5 h-5 mr-4" src={loading} alt="Loading" />
      Unlocking AI's potential
    </div>
  );
};

export default Generating;
