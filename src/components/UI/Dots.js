const Dots = ({ percentage }) => {
  const dotCount = 10;

  const greenDots = Math.round((percentage / 100) * dotCount);

  const dots = [];
  for (let index = 0; index < dotCount; index++) {
    dots.push(
      <span
        key={index}
        className={`h-3.5 w-3.5 rounded-full ${
          index < greenDots ? "bg-green" : "bg-gray-300"
        }`}
      ></span>,
    );
  }

  return (
    <div className="relative flex items-center justify-between">{dots}</div>
  );
};

export default Dots;
