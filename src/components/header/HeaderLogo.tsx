import { useRouter } from "next/dist/client/router";
import Image from "next/image";

const HeaderLogo = () => {
  const router = useRouter();

  return (
    <Image
      className="cursor-pointer"
      src="/images/logo.png"
      objectFit="contain"
      width={200}
      height={100}
      alt="logo"
      onClick={() => router.push("/")}
    />
  );
};

export default HeaderLogo;
