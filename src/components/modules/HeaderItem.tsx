import { SVGProps } from "react";

interface HeaderItemProps {
  title: string;
  Icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
}

const HeaderItem: React.FC<HeaderItemProps> = ({ title, Icon }) => {
  return (
    <div
      className="group flex flex-col items-center cursor-pointer w-12 sm:w-20
    hover:text-white"
    >
      <Icon className="h-8 mb-1 group-hover:animate-bounce" />
      <p className="tracking-widest opacity-0 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default HeaderItem;
