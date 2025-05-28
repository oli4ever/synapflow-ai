import { SynapFlowSymbol, check } from "../assets";
import { collabApps, collabContent, collabText } from "../constants";
import Button from "./Button";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Collaboration = () => {
  return (
    <Section crosses>
      <div className="container lg:flex">
        <div className="max-w-[25rem]">
          <h2 className="h2 mb-4 md:mb-8 whitespace-nowrap">
            Think Together, Work Smarter <br /> AI-Driven Collaboration
          </h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {collabContent.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-dark-300">{item.text}</p>
                )}
              </li>
            ))}
          </ul>

          <Button>Experience It Now</Button>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-6">
          <p className="body-2 mb-10 text-dark-300 whitespace-nowrap md:mb-16 lg:mb-32 lg:w-[22rem] lg:mx-auto">
            {collabText}
          </p>

          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-dark-700 rounded-full -translate-x-1/2 scale:75 md:scale-100">
            <div className="flex w-60 aspect-square m-auto border border-dark-700 rounded-full">
              <div className="w-[6rem] aspect-square m-auto p-[0.2rem] bg-conic-gradient rounded-full">
                <div className="flex items-center justify-center w-full h-full bg-dark-900 rounded-full">
                  <img
                    className="mt-4"
                    src={SynapFlowSymbol}
                    width={55}
                    height={70}
                    alt="SynapFlow"
                  />
                </div>
              </div>
            </div>

            <ul>
              {collabApps.map((app, index) => {
                const angle = index * 45;
                return (
                  <li
                    key={app.id}
                    className="absolute top-0 left-1/2 -ml-[1.6rem]"
                    style={{
                      height: "calc(100% - 10.5rem)",
                      transform: `rotate(${angle}deg)`,
                      transformOrigin: "bottom",
                    }}
                  >
                    <div
                      className={`relative flex w-[3.2rem] h-[3.2rem] bg-dark-800  border border-dark-500 rounded-xl`}
                      style={{
                        transform: `rotate(-${angle}deg)`, // Counter-rotate to keep icons upright
                        marginTop: "-1.4rem", // Center the icon on the circle's edge
                      }}
                    >
                      <img
                        className="m-auto"
                        src={app.icon}
                        width={app.width}
                        height={app.height}
                        alt={app.title}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Collaboration;
