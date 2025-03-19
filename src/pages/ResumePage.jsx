export default function ResumePage() {
  return (
    <div
      className="container-fluid text-white min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to bottom, #90ee90, #006400)", // Light green to dark green gradient
      }}
    >
      <h1>Check me out at my LinkedIn!</h1>
      <a
        href="https://www.linkedin.com/in/daniel-marlow-b05ba358"
        className="btn btn-primary mb-4"
        target="_blank"
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
      <h2>Proficiencies</h2>
      <ul className="text-start">
        <li>JavaScript</li>
        <li>React</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Node.js</li>
        <li>Jquery</li>
      </ul>
    </div>
  );
}