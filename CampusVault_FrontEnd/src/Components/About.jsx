import React from "react";

const About = () => (
  <div id="about" className="max-w-4xl mx-auto bg-[#232323] p-6 rounded-lg mt-10">
    <h2 className="text-3xl font-bold mb-4">About Campus Vault</h2>
    <p className="mb-4">
      Campus Vault is a dedicated platform for students to access and share academic resources such as question papers and notes.
    </p>
    <h3 className="text-2xl font-semibold mb-2">Features:</h3>
    <ul className="list-disc list-inside mb-4">
      <li>Extensive collection of question papers from various semesters and courses.</li>
      <li>Comprehensive notes covering key topics and concepts.</li>
      <li>User-friendly interface for easy navigation and resource discovery.</li>
      <li>Secure upload system for verified users to contribute resources.</li>
    </ul>
    <h3 className="text-2xl font-semibold mb-2">Contact Us:</h3>
    <p>
      Reach out at <a href="mailto:info@campusvault.com" className="text-blue-400 underline">info@campusvault.com</a>.
    </p>
  </div>
);

export default About;
