export default function Page() {
  return (
    <div style={{ padding: "2rem" }}>
      <h1>Guardians Digital Intake Form</h1>
      <iframe
        src="https://guardians-digital-new-client.paperform.co"
        width="100%"
        height="1200"
        style={{ border: "1px solid #ccc", borderRadius: "8px" }}
        allow="camera; microphone"
      />
    </div>
  );
}