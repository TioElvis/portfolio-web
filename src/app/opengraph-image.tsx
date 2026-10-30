import { ImageResponse } from "next/og";

export const alt = "Elvis Vera, backend developer and ethical hacker";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: 24,
          padding: 80,
          background: "#0d1117",
          color: "#e8e8e8",
          fontFamily: "monospace",
        }}>
        <div style={{ fontSize: 36, color: "#00c561" }}>~/tioelvis $ whoami</div>
        <div style={{ fontSize: 96, fontWeight: 700 }}>Elvis Vera</div>
        <div style={{ display: "flex", gap: 20, fontSize: 44 }}>
          <span style={{ color: "#ff4b4b" }}>Backend developer</span>
          <span style={{ color: "#8b949e" }}>&amp;</span>
          <span style={{ color: "#f4c430" }}>ethical hacker</span>
        </div>
      </div>
    ),
    size,
  );
}
