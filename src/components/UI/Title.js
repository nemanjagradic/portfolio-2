const Title = (props) => {
  return (
    <h3 className="fading-border-to-r text-primaryText before:from-accent relative w-full pb-5 pl-16 text-xl font-semibold tracking-wide before:absolute before:left-0 before:top-[15px] before:h-[2px] before:w-[52px] before:bg-gradient-to-r before:to-transparent before:content-['']">
      {props.children}
    </h3>
  );
};

export default Title;
