import Head from "next/head";
import { useRouter } from "next/router";

export default function ComingSoon() {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Coming Soon — The Day News Global</title>
        <meta
          name="description"
          content="This edition of The Day News Global is coming soon. Stay tuned!"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="cs-bg">
        {/* Decorative rings */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            border: "1px solid rgba(79, 142, 247, 0.07)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            width: "800px",
            height: "800px",
            borderRadius: "50%",
            border: "1px solid rgba(79, 142, 247, 0.04)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
          }}
        />

        {/* Main watermark text */}
        <div style={{ position: "relative", zIndex: 1, userSelect: "none" }}>
          {/* Big watermark */}
          <div
            aria-hidden="true"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) rotate(-25deg)",
              fontSize: "clamp(5rem, 20vw, 14rem)",
              fontWeight: 900,
              color: "rgba(255, 255, 255, 0.03)",
              whiteSpace: "nowrap",
              letterSpacing: "0.04em",
              pointerEvents: "none",
              fontFamily: "'Outfit', sans-serif",
            }}
          >
            COMING SOON
          </div>

          {/* Badge */}
          <div
            style={{
              display: "inline-block",
              background: "rgba(79, 142, 247, 0.12)",
              border: "1px solid rgba(79, 142, 247, 0.3)",
              borderRadius: "50px",
              padding: "6px 20px",
              fontSize: "0.72rem",
              fontWeight: 600,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "#4f8ef7",
              marginBottom: "28px",
            }}
          >
            Stay Tuned
          </div>

          {/* Heading */}
          <h1
            style={{
              fontSize: "clamp(2.5rem, 8vw, 5rem)",
              fontWeight: 800,
              lineHeight: 1.05,
              marginBottom: "12px",
              background:
                "linear-gradient(135deg, #f0f4ff 0%, #c0caee 50%, #4f8ef7 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              letterSpacing: "-0.02em",
            }}
          >
            Coming Soon
          </h1>

          {/* Subtitle */}
          <p
            style={{
              fontSize: "1.05rem",
              color: "var(--text-secondary)",
              maxWidth: "420px",
              margin: "0 auto 48px",
              lineHeight: 1.7,
            }}
          >
            We&apos;re building something great for this edition.{" "}
            <br />
            Check back soon!
          </p>

          {/* Divider */}
          <div
            style={{
              width: "60px",
              height: "3px",
              background:
                "linear-gradient(90deg, var(--accent-blue), transparent)",
              borderRadius: "2px",
              margin: "0 auto 48px",
            }}
          />

          {/* Back button */}
          <button
            id="back-to-home-btn"
            onClick={() => router.push("/")}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "14px 32px",
              background: "rgba(79, 142, 247, 0.15)",
              border: "1px solid rgba(79, 142, 247, 0.35)",
              borderRadius: "50px",
              color: "#4f8ef7",
              fontSize: "0.9rem",
              fontWeight: 600,
              fontFamily: "'Outfit', sans-serif",
              letterSpacing: "0.04em",
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(79, 142, 247, 0.25)";
              e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.6)";
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow =
                "0 8px 25px rgba(79, 142, 247, 0.25)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "rgba(79, 142, 247, 0.15)";
              e.currentTarget.style.borderColor = "rgba(79, 142, 247, 0.35)";
              e.currentTarget.style.transform = "";
              e.currentTarget.style.boxShadow = "";
            }}
          >
            ← Back to Home
          </button>
        </div>
      </div>
    </>
  );
}
