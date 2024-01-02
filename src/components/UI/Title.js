const Title = (props) => {
  return (
    <h3 className="fading-border-to-r relative w-full pb-5 pl-16 text-xl font-semibold tracking-wide text-darkerBlack before:absolute before:left-0 before:top-[15px] before:h-[2px] before:w-[52px] before:bg-gradient-to-r before:from-green before:to-transparent before:content-['']">
      {props.children}
    </h3>
  );
};

export default Title;
