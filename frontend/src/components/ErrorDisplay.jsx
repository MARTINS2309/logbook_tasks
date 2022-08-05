import Button from "react-bootstrap/Button";

export default function ErrorDisplay({ error, demo }) {
  return (
    <div className="ErrorDisplay">
      <p>Error: {error.message}</p>
      <p>Press the button above to try again</p>
      {demo ? (
        <div className="Demo">
          <p>Would you like to use local demo data instead? </p>
          <Button variant="outline-primary" onClick={demo}>
            Demo data
          </Button>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}
