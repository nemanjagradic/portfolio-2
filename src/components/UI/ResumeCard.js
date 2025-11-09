const ResumeCard = ({
  age: { from, to },
  position,
  place,
  desc,
  borderClass,
}) => {
  return (
    <div className={`${borderClass} text-secondaryText relative py-6`}>
      <h3 className="border-accent mb-1 w-fit border px-1 py-0.5 text-xs">
        {from} - {to}
      </h3>
      <h1 className="text-primaryText text-lg font-semibold">{position}</h1>
      <span className="text-sm">{place}</span>
      <p className="mt-2.5 leading-7">{desc}</p>
    </div>
  );
};

export default ResumeCard;
