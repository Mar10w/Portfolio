export default function Footer() {
    return (
      <footer
        className="text-center py-3"
        style={{
          position: "fixed",
          bottom: 0,
          width: "100%",
          backgroundColor: "transparent", // Clear background
          color: "white",
        }}
      >
        <a
          href="https://github.com/Mar10w"
          target="_blank"
          rel="noopener noreferrer"
          className="me-3 text-decoration-none text-white"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/daniel-marlow-b05ba358"
          target="_blank"
          rel="noopener noreferrer"
          className="text-decoration-none text-white"
        >
          LinkedIn
        </a>
      </footer>
    );
  }