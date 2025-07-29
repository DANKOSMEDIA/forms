export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-white">
      <h1 className="text-2xl font-bold mb-4">New Client Questionnaire</h1>

      <iframe
        src="https://guardians-digital-new-client.paperform.co"
        title="New Client Questionnaire"
        width="100%"
        height="800"
        style={{
          border: "none",
          borderRadius: "12px",
          maxWidth: "1000px",
        }}
        allowFullScreen
      ></iframe>
    </div>
  );
}
