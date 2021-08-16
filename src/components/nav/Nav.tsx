import { useRouter } from "next/dist/client/router";
import requests from "utils/requests";
import NavItem from "./NavItem";

const Categories = () => {
  const router = useRouter();

  return (
    <nav className="relative">
      <div
        className="flex px-10 sm:px-20 text-2xl whitespace-nowrap 
        space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide"
      >
        {Object.entries(requests).map(([key, { title }]) => (
          <NavItem
            key={key}
            title={title}
            onClick={() => router.push(`/?genre=${key}`)}
          />
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12" />
    </nav>
  );
};

export default Categories;
