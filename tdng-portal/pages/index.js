import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";

const countries = [
  {
    id: "sri-lanka",
    name: "Sri Lanka",
    flag: "/flag-sri-lanka.png",
    href: "https://thedaynewsglobal.lk/",
    external: true,
    accent: "#c8a84b",
    glow: "rgba(200, 168, 75, 0.3)",
  },
  {
    id: "japan",
    name: "Japan",
    flag: "/flag-japan.png",
    href: "/coming-soon",
    external: false,
    accent: "#e63946",
    glow: "rgba(230, 57, 70, 0.3)",
  },
  {
    id: "australia",
    name: "Australia",
    flag: "/flag-australia.png",
    href: "/coming-soon",
    external: false,
    accent: "#4f8ef7",
    glow: "rgba(79, 142, 247, 0.3)",
  },
  {
    id: "usa",
    name: "USA",
    flag: "/flag-usa.png",
    href: "/coming-soon",
    external: false,
    accent: "#b22234",
    glow: "rgba(178, 34, 52, 0.3)",
  },
  {
    id: "england",
    name: "England",
    flag: "/flag-england.png",
    href: "/coming-soon",
    external: false,
    accent: "#cf142b",
    glow: "rgba(207, 20, 43, 0.3)",
  },
];

export default function Home() {
  const router = useRouter();

  const handleClick = (country) => {
    if (country.external) {
      window.open(country.href, "_blank", "noopener,noreferrer");
    } else {
      router.push(country.href);
    }
  };

  return (
    <>
      <Head>
        <title>The Day News</title>
        <meta
          name="description"
          content="The Day News Global — your gateway to world news from Sri Lanka, Japan, Australia, USA, and England."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          padding: "60px 24px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Hero heading */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <p
            style={{
              fontSize: "1rem",
              fontWeight: 600,
              letterSpacing: "0.25em",
              textTransform: "uppercase",
              color: "var(--accent-blue)",
              marginBottom: "16px",
              opacity: 0.85,
            }}
          >
            World Edition
          </p>
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              fontWeight: 800,
              lineHeight: 1.1,
              background:
                "linear-gradient(135deg, #f0f4ff 0%, #8892b0 60%, #4f8ef7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              marginBottom: "16px",
            }}
          >
            The Day News Global
          </h1>
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "480px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Select your edition to explore the latest stories from around the world.
          </p>
        </div>

        {/* Country Cards Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "24px",
            width: "100%",
            maxWidth: "1100px",
          }}
        >
          {countries.map((country) => (
            <button
              key={country.id}
              id={`country-card-${country.id}`}
              onClick={() => handleClick(country)}
              className="glass-card"
              style={{
                cursor: "pointer",
                border: "none",
                background: "var(--bg-card)",
                padding: "40px 24px 32px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "20px",
                width: "100%",
                textAlign: "center",
                outline: "none",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 60px rgba(0,0,0,0.4), 0 0 40px ${country.glow}`;
                e.currentTarget.style.borderColor = country.accent + "55";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "";
                e.currentTarget.style.borderColor = "";
              }}
            >
              {/* Flag image */}
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  flexShrink: 0,
                  border: `2px solid ${country.accent}44`,
                  boxShadow: `0 0 20px ${country.glow}`,
                  position: "relative",
                }}
              >
                <Image
                  src={country.flag}
                  alt={`${country.name} flag`}
                  fill
                  style={{ objectFit: "cover" }}
                  className="flag-glow"
                />
              </div>

              {/* Country name */}
              <div>
                <h2
                  style={{
                    fontSize: "1.25rem",
                    fontWeight: 700,
                    color: "var(--text-primary)",
                    marginBottom: "6px",
                    letterSpacing: "0.02em",
                  }}
                >
                  {country.name}
                </h2>
                <span
                  style={{
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: country.accent,
                    opacity: 0.8,
                  }}
                >
                  {country.external ? "Visit Now →" : "Coming Soon"}
                </span>
              </div>
            </button>
          ))}
        </div>

        {/* Footer note */}
        <p
          style={{
            marginTop: "64px",
            fontSize: "0.78rem",
            color: "var(--text-secondary)",
            opacity: 0.5,
            letterSpacing: "0.05em",
          }}
        >
          © {new Date().getFullYear()} The Day News Global. All rights reserved.
        </p>
      </main>
    </>
  );
}
