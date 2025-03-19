export default function HomePage() {
  return (
    <div
      className="container-fluid text-white min-vh-100 d-flex flex-column justify-content-center align-items-center"
      style={{
        background: "linear-gradient(to bottom, #add8e6, #00008b)", // Light blue to dark blue gradient
      }}
    >
      <h1 className="text-center">Welcome to My Portfolio</h1>
      <p className="text-center">
        Hello! I'm Dan Marlow, a beginning web developer. Explore my portfolio to learn more about my projects, skills, and how to contact me.
      </p>
    </div>
  );
}