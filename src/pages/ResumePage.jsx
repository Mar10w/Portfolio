export default function ResumePage() {
    return (
      <div className="container pt-4">
        <h1>Resume</h1>
        <a href="/path/to/your/resume.pdf" className="btn btn-primary" download>
          Download Resume
        </a>
        <h2>Proficiencies</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Node.js</li>
          <li>Jquery</li>
          {/*proficiencies*/}
        </ul>
      </div>
    );
  }