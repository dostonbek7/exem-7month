import React from "react";

function About() {
  return (
    <section className="align-element py-20">
      <div className="flex flex-wrap gap-2 sm:gap-x-6 items-center justify-center">
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          We love
        </h1>
        <div className="stats bg-primary shadow">
          <div className="stat">
            <div className="stat-title text-primary-content text-4xl font-bold tracking-widest">
              comfy
            </div>
          </div>
        </div>
      </div>
      <p className="mt-6 text-lg leading-8 max-w-2xl mx-auto">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        illo velit ab odio consectetur ea quo esse accusantium consequatur quas
        molestias, quisquam vel qui excepturi nesciunt nulla nam dicta unde iste
        in! Harum labore et pariatur non sit nisi perspiciatis!
      </p>
    </section>
  );
}

export default About;
