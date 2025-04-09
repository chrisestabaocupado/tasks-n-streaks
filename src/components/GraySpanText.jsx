const GraySpanText = ({ text }) => {
  return (
    <span className="text-right text-gray-400 hover:cursor-default hover:text-black transition-colors duration-300 ease-in-out">
      {text}
    </span>
  );
}

export { GraySpanText };