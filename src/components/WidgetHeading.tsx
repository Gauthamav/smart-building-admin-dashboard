

type WidgetHeadingProps = {
  heading: string;
};

const WidgetHeading = ({ heading }: WidgetHeadingProps) => {
  return <h2 className="font-medium text-[#006bd6]">{heading}</h2>;
};

export default WidgetHeading;
