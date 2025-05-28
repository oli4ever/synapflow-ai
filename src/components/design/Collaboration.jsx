import { curve1, curve2 } from "../../assets";

export const RightCurve = () => {
  return (
    <div
      className="absolute top-1/2 left-full w-[10.125rem] mt-2 ml-10 pointer-events-none"
      style={{
        zIndex: 10,
        filter: "brightness(2.5) contrast(0.2)",
      }}
    >
      <img
        src={curve2}
        width={162}
        height={76}
        alt="Curve 2"
        style={{
          opacity: 1,
        }}
      />
    </div>
  );
};

export const LeftCurve = () => {
  return (
    <div
      className="absolute top-1/2 right-full w-[32.625rem] mt-2 mr-10 pointer-events-none"
      style={{
        zIndex: 10,
        filter: "brightness(2.5) contrast(0.2)",
      }}
    >
      <img
        src={curve1}
        width={522}
        height={182}
        alt="Curve 1"
        style={{
          opacity: 1,
        }}
      />
    </div>
  );
};
