import ButtonSvg from "../assets/svg/ButtonSvg";

const Button = ({ className, href, onClick, children, px, cyan }) => {
  const classes = `button relative inline-flex items-center justify-center h-11 transition-colors hover:text-primary-100 ${
    px || "px-7"
  } ${cyan ? "text-dark-900" : "text-primary-300"} ${className || ""}`;

  const spanClasses = "relative z-10";

  const renderButton = () => (
    <button className={classes} onClick={onClick}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(cyan)}
    </button>
  );

  const renderLink = () => (
    <a href={href} className={classes}>
      <span className={spanClasses}>{children}</span>
      {ButtonSvg(cyan)}
    </a>
  );

  return href ? renderLink() : renderButton();
};

export default Button;
