import { DefaultSeoProps } from "next-seo";

export const baseUrl = "https://hulu-clone-martstech.vercel.app";

export const defaultSEO: DefaultSeoProps = {
  title: "Hulu Clone",
  description:
    "Watch TV shows and movies online. Stream TV episodes on your favorite devices. Start your free trial now. Cancel anytime.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Hulu Clone",
    images: [
      {
        url: `${baseUrl}/meta/og-image.png`,
        alt: "Hulu Clone",
      },
    ],
  },
};
