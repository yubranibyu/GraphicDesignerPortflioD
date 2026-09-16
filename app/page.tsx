const projects = [
  {
    title: "Lumen",
    category: "Brand Identity",
    year: "2026",
    image: "/images/project-1.jpg",
  },
  {
    title: "Atelier",
    category: "Editorial Design",
    year: "2026",
    image: "/images/project-2.jpg",
  },
  {
    title: "Monochrome",
    category: "Art Direction",
    year: "2026",
    image: "/images/project-3.jpg",
  },
  {
    title: "Studio X",
    category: "Digital Design",
    year: "2026",
    image: "/images/project-4.jpg",
  },
];

export default function Home() {
  return (
    <main>
      {/* NAVIGATION */}
      <header className="fixed top-0 z-50 w-full px-6 py-6">
        <nav className="mx-auto flex max-w-7xl items-center justify-between">
          <a href="/" className="text-xl font-semibold">
            DESIGNER.
          </a>

          <div className="hidden gap-8 md:flex">
            <a href="#work" className="text-sm hover:opacity-60">
              Work
            </a>

            <a href="#about" className="text-sm hover:opacity-60">
              About
            </a>

            <a href="#services" className="text-sm hover:opacity-60">
              Services
            </a>

            <a href="#contact" className="text-sm hover:opacity-60">
              Contact
            </a>
          </div>
        </nav>
      </header>

      {/* HERO */}
      <section className="flex min-h-screen items-center px-6 py-32">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-6 text-sm uppercase tracking-[0.3em]">
            Graphic Designer
          </p>

          <h1 className="max-w-5xl text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl lg:text-9xl">
            Visual ideas
            <br />
            with purpose.
          </h1>

          <div className="mt-12 flex flex-col justify-between gap-8 md:flex-row md:items-end">
            <p className="max-w-md text-lg leading-relaxed text-neutral-600">
              Creating visual identities, digital experiences and creative
              concepts for brands with personality.
            </p>

            <a
              href="#work"
              className="w-fit border-b border-black pb-2 text-sm uppercase tracking-wider"
            >
              Explore my work →
            </a>
          </div>
        </div>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className="px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 flex items-end justify-between">
            <div>
              <p className="mb-3 text-sm uppercase tracking-[0.2em]">
                Portfolio
              </p>

              <h2 className="text-4xl font-semibold md:text-6xl">
                Selected work
              </h2>
            </div>

            <p className="hidden text-sm text-neutral-500 md:block">
              2024 — 2026
            </p>
          </div>

          <div className="grid gap-10 md:grid-cols-2">
            {projects.map((project, index) => (
              <article
                key={project.title}
                className={index % 2 === 1 ? "md:mt-24" : ""}
              >
                <div className="aspect-[4/3] overflow-hidden bg-neutral-200">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 hover:scale-105"
                  />
                </div>

                <div className="mt-4 flex items-start justify-between">
                  <div>
                    <h3 className="text-xl font-medium">{project.title}</h3>

                    <p className="mt-1 text-sm text-neutral-500">
                      {project.category}
                    </p>
                  </div>

                  <span className="text-sm text-neutral-500">
                    {project.year}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="px-6 py-32">
        <div className="mx-auto grid max-w-7xl gap-16 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.2em]">About</p>
          </div>

          <div>
            <h2 className="text-4xl font-semibold leading-tight md:text-6xl">
              Design is more than making things look good.
            </h2>

            <p className="mt-8 max-w-xl text-lg leading-relaxed text-neutral-600">
              I create visual identities and digital experiences that connect
              ideas, people and brands through thoughtful design.
            </p>

            <a
              href="#contact"
              className="mt-8 inline-block border-b border-black pb-2 text-sm uppercase tracking-wider"
            >
              Let's talk →
            </a>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="border-y px-6 py-24">
        <div className="mx-auto max-w-7xl">
          <p className="mb-16 text-sm uppercase tracking-[0.2em]">Services</p>

          <div className="divide-y border-t">
            <div className="flex items-center justify-between py-8">
              <h3 className="text-2xl md:text-4xl">Brand Identity</h3>
              <span>01</span>
            </div>

            <div className="flex items-center justify-between py-8">
              <h3 className="text-2xl md:text-4xl">Art Direction</h3>
              <span>02</span>
            </div>

            <div className="flex items-center justify-between py-8">
              <h3 className="text-2xl md:text-4xl">Editorial Design</h3>
              <span>03</span>
            </div>

            <div className="flex items-center justify-between py-8">
              <h3 className="text-2xl md:text-4xl">Digital Design</h3>
              <span>04</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-32">
        <div className="mx-auto max-w-7xl">
          <p className="mb-8 text-sm uppercase tracking-[0.2em]">Contact</p>

          <h2 className="max-w-5xl text-6xl font-bold leading-[0.9] tracking-tight md:text-8xl">
            Have a project
            <br />
            in mind?
          </h2>

          <a
            href="mailto:hello@example.com"
            className="mt-12 inline-block border-b-2 border-black pb-2 text-xl"
          >
            hello@example.com
          </a>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 text-sm md:flex-row">
          <p>DESIGNER.</p>

          <p>© 2026 All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
