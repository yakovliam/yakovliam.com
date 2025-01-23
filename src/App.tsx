import "./index.css";

const App = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen w-full">
      <div className="absolute h-full w-full bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]"></div>

      <div className="lg:p-4 lg:max-w-2xl p-16 w-full z-10">
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

        <div className="flex flex-col gap-2">
          <SimpleLink href="/resume.pdf" title="Resume" />

          <SimpleLink href="mailto:jacob@yakovliam.com" title="Email me" />

          <SimpleLink href="https://github.com/yakovliam" title="GitHub" />
        </div>
        <div className="mt-4 p-4 border-t border-gray-300 flex justify-between items-center gap-4 flex-col lg:flex-row">
          <div className="text-sm text-gray-500 text-nowrap">
            <p>&copy; {new Date().getFullYear()} Jacob Cohen</p>
          </div>

          <a
            target="_blank"
            href="https://github.com/yakovliam/yakovliam.com"
            className="text-blue-600 border-b border-blue-600 text-sm text-nowrap"
          >
            This website's source code
          </a>
        </div>
      </div>
    </div>
  );
};

type SimpleLinkProps = {
  href: string;
  title: string;
};

const SimpleLink = ({ href, title }: SimpleLinkProps) => {
  return (
    <div className="w-min text-nowrap">
      <a
        className="text-blue-600 border-b border-blue-600"
        href={href}
        target="_blank"
      >
        {title}
      </a>
    </div>
  );
};

export default App;
