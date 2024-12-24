import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="p-4 max-w-2xl">
        <div className="mb-4">
          <p className="text-4xl font-bold">Jacob Cohen</p>
        </div>
        <div className="mb-4">
          <p>
            A results and process-oriented engineer with years of knowledge in
            product development cycles, application development, and network
            administration, leveraging a strong background in computer science
            to deliver high-quality software and hardware to a diverse set of
            clients.
          </p>
        </div>

        <a
          className="text-blue-600 border-b border-blue-600"
          href="/resume.pdf"
        >
          Resume
        </a>

        <div className="mt-4">
          <a
            className="text-blue-600 border-b border-blue-600"
            href="mailto:jacob@yakovliam.com"
          >
            Email me
          </a>
        </div>

        <div className="mt-4 border-t border-gray-300 pt-4 text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} Jacob Cohen</p>
        </div>
      </div>
    </div>
  );
};

export default App;
