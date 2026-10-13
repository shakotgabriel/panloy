import { ImageResponse } from "next/og";

export const alt = "Panloy Group South Sudan";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#070f3a",
          color: "white",
          padding: 72,
        }}
      >
        <div
          style={{
            display: "flex",
            fontSize: 26,
            color: "#e8b81a",
            letterSpacing: 5,
            textTransform: "uppercase",
          }}
        >
          Panloy Group · South Sudan
        </div>
        <div style={{ display: "flex", flexDirection: "column", maxWidth: 980 }}>
          <div style={{ fontSize: 72, lineHeight: 1.05 }}>
            Local capability for a working future.
          </div>
          <div
            style={{
              marginTop: 28,
              fontSize: 28,
              color: "rgba(255,255,255,0.72)",
              lineHeight: 1.35,
            }}
          >
            Energy, engineering, manufacturing, and environmental services.
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
