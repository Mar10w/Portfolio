export default function AboutPage() {
  return (
    <div
      className="container-fluid text-white min-vh-100 pt-4"
      style={{
        background: "linear-gradient(to bottom, #dda0dd, #4b0082)", // Light purple to dark purple gradient
      }}
    >
      <h1 className="text-center">About Me</h1>
      <p className="text-center">
        Hello! I'm Dan Marlow, a budding web developer who is building single-page applications using React. I love creating beautiful and functional web applications that provide a great user experience. I have training in JavaScript, HTML, CSS, and various modern web development frameworks and libraries. I'm always eager to learn new technologies and improve my skills.
      </p>
    </div>
  );
}