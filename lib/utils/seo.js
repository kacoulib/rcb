import config from "@config/config.json";

// Get the base URL for production
export const getBaseUrl = () => {
  // Use environment variable if available, otherwise use production URL
  return (
    process.env.NEXT_PUBLIC_SITE_URL ||
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "https://rcb-95000.vercel.app")
  );
};

// Generate full base URL
export const getFullBaseUrl = () => {
  const baseUrl = getBaseUrl();
  return config.site.base_url === "/"
    ? baseUrl
    : config.site.base_url.startsWith("http")
      ? config.site.base_url
      : `${baseUrl}${config.site.base_url}`;
};

// Generate comprehensive SEO metadata
export const generateSeoMetadata = ({
  title,
  description,
  keywords = [],
  path = "",
  image,
  type = "website",
}) => {
  const fullBaseUrl = getFullBaseUrl();
  const pageUrl = path ? `${fullBaseUrl}${path}` : fullBaseUrl;
  const imageUrl = image || config.metadata.meta_image || `${fullBaseUrl}/images/logo.png`;
  const fullTitle = title.includes("RCB95") ? title : `${title} | ${config.site.title}`;

  // Default keywords for RCB
  const defaultKeywords = [
    "RCB95",
    "Rahilou Cergy Boxe",
    "boxe anglaise",
    "boxe Cergy",
    "club de boxe",
    "boxe Éragny",
    "boxe 95",
  ];

  const allKeywords = [...defaultKeywords, ...keywords];

  return {
    title: fullTitle,
    description: description || config.metadata.meta_description,
    keywords: allKeywords,
    authors: [{ name: config.metadata.meta_author }],
    openGraph: {
      title: fullTitle,
      description: description || config.metadata.meta_description,
      url: pageUrl,
      siteName: config.site.title,
      locale: "fr_FR",
      type: type,
      images: [
        {
          url: imageUrl,
          width: 1200,
          height: 630,
          alt: fullTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: description || config.metadata.meta_description,
      images: [imageUrl],
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
};

