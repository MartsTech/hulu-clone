import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderItem from "@module/HeaderItem";
import Image from "next/image";
import { useRouter } from "next/router";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({}) => {
  const router = useRouter();

  return (
    <header className="flex flex-col sm:flex-row m-5 justify-between items-center h-auto">
      <div className="flex flex-grow justify-evenly max-w-2xl">
        <HeaderItem title="HOME" Icon={HomeIcon} />
        <HeaderItem title="TRENDING" Icon={LightningBoltIcon} />
        <HeaderItem title="VERIFIED" Icon={BadgeCheckIcon} />
        <HeaderItem title="COLLECTIONS" Icon={CollectionIcon} />
        <HeaderItem title="SEARCH" Icon={SearchIcon} />
        <HeaderItem title="ACCOUNT" Icon={UserIcon} />
      </div>
      <Image
        className="object-contain cursor-pointer"
        src="https://press.hulu.com/wp-content/uploads/2020/02/hulu-white.png"
        width={200}
        height={100}
        alt="Logo"
        onClick={() => router.push("/")}
      />
    </header>
  );
};

export default Header;
