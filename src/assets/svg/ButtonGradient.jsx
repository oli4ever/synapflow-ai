const ButtonGradient = ({
  leftColor = "#89F9E8",
  rightColor = "#FACB7B",
  topColor = "#D87CEE",
  bottomColor = "#9099FC",
}) => {
  return (
    <svg className="block" width={0} height={0}>
      <defs>
        {/* Left side gradient */}
        <linearGradient id="btn-left" x1="50%" x2="50%" y1="0%" y2="100%">
          <stop offset="0%" stopColor={leftColor} />
          <stop offset="100%" stopColor={rightColor} />
        </linearGradient>

        {/* Top gradient */}
        <linearGradient id="btn-top" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor={topColor} />
          <stop offset="100%" stopColor={rightColor} />
        </linearGradient>

        {/* Bottom gradient */}
        <linearGradient id="btn-bottom" x1="100%" x2="0%" y1="50%" y2="50%">
          <stop offset="0%" stopColor={bottomColor} />
          <stop offset="100%" stopColor={leftColor} />
        </linearGradient>

        {/* Right side gradient */}
        <linearGradient
          id="btn-right"
          x1="14.635%"
          x2="14.635%"
          y1="0%"
          y2="100%"
        >
          <stop offset="0%" stopColor={bottomColor} />
          <stop offset="100%" stopColor={topColor} />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default ButtonGradient;
