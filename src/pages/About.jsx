import React from "react";

function About() {
  return (
    <div className="min-h-screen p-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8" data-aos="fade-down">
          About Me
        </h2>

        <div
          className="bg-white rounded-lg shadow-lg p-8 mb-8"
          data-aos="fade-up"
        >
          <p className="text-lg text-gray-700 mb-6">
            I'm a MERN Stack Developer architecting full-cycle web applications.
            What started as a passion for designing intuitive interfaces grew
            into mastering the entire development spectrum—from crafting dynamic
            React frontends to engineering robust Node.js/Express APIs and
            optimizing MongoDB databases. I specialize in turning ideas into
            performant, full-stack solutions where pixel-perfect UI meets
            efficient server-side logic.
          </p>

          <p className="text-lg text-gray-700">
            I specialize in the MERN stack, building full-stack applications
            where React's component-driven UI excellence meets
            Node.js/Express.js backend robustness. My focus on user experience
            and accessibility extends to designing intuitive APIs and optimized
            MongoDB architectures, delivering cohesive systems that are as
            maintainable on the server side as they are delightful on the
            frontend.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div
            className="bg-white rounded-lg shadow-lg p-6"
            data-aos="fade-right"
          >
            <h3 className="text-xl font-bold mb-4">Education</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">
                  Bachelor of Science in Computer Science and Information
                  Techonology (BSc.CSIT)
                </h4>
                <p className="text-gray-600">Tribhuwan University</p>
                <p className="text-gray-500">2022 - 2026</p>
              </li>
            </ul>
          </div>

          <div
            className="bg-white rounded-lg shadow-lg p-6"
            data-aos="fade-left"
          >
            <h3 className="text-xl font-bold mb-4">Experience</h3>
            <ul className="space-y-4">
              <li>
                <h4 className="font-semibold">Full Stack Developer Intern</h4>
                <p className="text-gray-600">Stellar Tech Labs</p>
                <p className="text-gray-500">2025 to </p>
              </li>
              <li>
                {/*  <h4 className="font-semibold">Frontend Developer</h4>
                <p className="text-gray-600">Digital Agency XYZ</p>
                <p className="text-gray-500">2017 - 2019</p> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
