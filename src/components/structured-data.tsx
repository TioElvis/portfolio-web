import { SITE, SITE_URL } from "@/lib/site";

// Lets search engines show the person and their profiles in results
const DATA = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": `${SITE_URL}/#person`,
      name: SITE.author,
      alternateName: SITE.name,
      url: SITE_URL,
      image: `${SITE_URL}/evera.png`,
      jobTitle: SITE.jobTitle,
      email: `mailto:${SITE.email}`,
      birthPlace: { "@type": "Place", name: "Caracas, Venezuela" },
      knowsAbout: [
        "Backend development",
        "Node.js",
        "NestJS",
        "Next.js",
        "PostgreSQL",
        "Cybersecurity",
        "Penetration testing",
      ],
      sameAs: [SITE.github, SITE.linkedin, SITE.youtube],
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: SITE.name,
      description: SITE.description,
      inLanguage: "en",
      publisher: { "@id": `${SITE_URL}/#person` },
    },
  ],
};

export function StructuredData() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(DATA).replace(/</g, "\\u003c"),
      }}
    />
  );
}
