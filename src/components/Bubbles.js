const Bubbles = () => {
  return (
    <ul className="absolute h-full w-full list-none overflow-hidden">
      <li className="absolute -bottom-1/4 right-1/4 h-40 w-40 animate-rotate-to-top-right rounded bg-[rgba(255,255,255,0.1)]"></li>
      <li className="absolute -top-1/4 left-1/2 h-28 w-28 animate-rotate-to-bottom rounded bg-[rgba(255,255,255,0.1)]"></li>
      <li className="absolute -right-1/2 top-36 h-60 w-60 animate-rotate-to-left rounded bg-[rgba(255,255,255,0.1)]"></li>
      <li className="absolute -left-1/4 bottom-0 h-32 w-32 animate-rotate-to-top-left rounded bg-[rgba(255,255,255,0.1)]"></li>
      <li className="absolute -bottom-1/2 h-72 w-72 animate-rotate-to-top rounded bg-[rgba(255,255,255,0.1)]"></li>
    </ul>
  );
};

export default Bubbles;
