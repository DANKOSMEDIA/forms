import { useEffect } from "react";

export default function Page() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://paperform.co/__embed.min.js";
    script.defer = true;
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Guardians Digital Intake Form</h1>
      <button
        data-paperform-id="guardians-digital-new-client"
        style={{
          padding: "10px 20px",
          backgroundColor: "#2E7D32",
          color: "#fff",
          border: "none",
          borderRadius: "5px"
        }}
      >
        Launch Form
      </button>
    </div>
  );
}
