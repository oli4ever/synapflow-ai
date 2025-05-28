import TagLine from "./Tagline";

const Heading = ({ className, title, text, tag }) => {
  return (
    <div
      className={`${className} max-w-[50rem] mx-auto mb-12 whitespace-nowrap lg:mb-20 md:text-center`}
    >
      {tag && <TagLine className="mb-4 md:justify-center">{tag}</TagLine>}
      {title && <h2 className="h2 max-sm:text-[18px]">{title}</h2>}
      {text && (
        <p className="body-2 max-sm:text-[12px] mt-4 text-dark-400">{text}</p>
      )}
    </div>
  );
};

export default Heading;
