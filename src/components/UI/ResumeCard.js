const ResumeCard = ({
  age: { from, to },
  position,
  place,
  desc,
  borderClass,
}) => {
  return (
    <div className={`${borderClass} relative py-6 text-lightBlack`}>
      <h3 className="mb-1 w-fit border border-green px-1 py-0.5 text-xs">
        {from} - {to}
      </h3>
      <h1 className="text-lg font-semibold text-black">{position}</h1>
      <span className="text-sm">{place}</span>
      <p className="mt-2.5 leading-7">{desc}</p>
    </div>
  );
};

export default ResumeCard;
