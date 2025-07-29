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
      <div data-paperform-id="guardians-digital-new-client"></div>
    </div>
  );
}
