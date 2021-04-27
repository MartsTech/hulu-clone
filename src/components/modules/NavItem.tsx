interface NavItemProps {
  title: string;
  onClick: () => Promise<boolean>;
}
const NavItem: React.FC<NavItemProps> = ({ title, onClick }) => {
  return (
    <h2
      className="cursor-pointer transition duration-100 transform hover:scale-125
    hover:text-white active:text-red-500 last:pr-24"
      onClick={onClick}
    >
      {title}
    </h2>
  );
};

export default NavItem;
