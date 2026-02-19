export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Apex Meridian",
  url: "https://apex-meridian-web.vercel.app",
  logo: "https://apex-meridian-web.vercel.app/assets/common/logo.png",
  description:
    "Apex Meridian is a leading M&A transaction advisory firm specializing in corporate transformation and growth strategy.",
  sameAs: [
    // Add your social media URLs here
    // "https://www.linkedin.com/company/apex-meridian",
    // "https://twitter.com/apex-meridian",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "Customer Service",
    email: "contact@apex-meridian.com",
    // phone: "+1-XXX-XXX-XXXX",
    // availableLanguage: ["en"],
  },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Apex Meridian",
  image: "https://apex-meridian-web.vercel.app/assets/common/logo.png",
  description:
    "Strategic advisory services for M&A transactions, corporate transformation, and growth strategy.",
  url: "https://apex-meridian-web.vercel.app",
  telephone: "",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "",
    addressRegion: "",
    postalCode: "",
    addressCountry: "US",
  },
};

export const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Apex Meridian Services",
  url: "https://apex-meridian-web.vercel.app",
  serviceArea: {
    "@type": "Country",
    name: "United States",
  },
  areaServed: "US",
  makesOffer: [
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "M&A Transaction Advisory",
        description:
          "Navigate complex deals with precision and maximize value creation.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Corporate Transformation",
        description:
          "Reimagine operations to unlock sustainable competitive advantage.",
      },
    },
    {
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: "Growth Strategy",
        description:
          "Identify and capture your next horizon of profitable growth.",
      },
    },
  ],
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What services does Apex Meridian provide?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "We offer M&A Transaction Advisory, Corporate Transformation, and Growth Strategy consulting services tailored to private equity firms, corporate innovation teams, and growth-focused CEOs.",
      },
    },
    {
      "@type": "Question",
      name: "Who are Apex Meridian's clients?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Our clients include private equity firms, corporate innovation teams, and growth-focused CEOs seeking strategic advisory services.",
      },
    },
  ],
};
