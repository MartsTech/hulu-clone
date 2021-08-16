import {
  BadgeCheckIcon,
  CollectionIcon,
  HomeIcon,
  LightningBoltIcon,
  SearchIcon,
  UserIcon,
} from "@heroicons/react/outline";
import HeaderNavItem from "./HeaderNavItem";

const HeaderNav = () => {
  return (
    <div className="flex flex-grow justify-evenly max-w-2xl">
      <HeaderNavItem title="Home" Icon={HomeIcon} />
      <HeaderNavItem title="Trending" Icon={LightningBoltIcon} />
      <HeaderNavItem title="Verified" Icon={BadgeCheckIcon} />
      <HeaderNavItem title="Collections" Icon={CollectionIcon} />
      <HeaderNavItem title="Search" Icon={SearchIcon} />
      <HeaderNavItem title="Account" Icon={UserIcon} />
    </div>
  );
};

export default HeaderNav;
