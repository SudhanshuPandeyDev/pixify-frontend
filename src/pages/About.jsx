import React from "react";

const About = () => {
  return (
    <section className="bg-gradient-to-r from-gray-50 to-gray-100 py-12 px-6 sm:px-20 mt-12">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">About Pixify</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          Welcome to <span className="font-semibold text-gray-800">Pixify</span>
          , your go-to platform for sharing and managing beautiful images. We
          believe that every photo tells a story, and our mission is to provide
          an innovative space where creativity meets simplicity.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {/* Vision Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/63901/pexels-photo-63901.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Vision"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Vision
          </h3>
          <p className="text-gray-700">
            To inspire creativity and innovation through visually stunning
            imagery while making photo management seamless and accessible for
            everyone.
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/934062/pexels-photo-934062.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Mission"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Mission
          </h3>
          <p className="text-gray-700">
            To empower photographers and creators with tools that allow them to
            share, showcase, and monetize their work effortlessly.
          </p>
        </div>

        {/* Values Card */}
        <div className="bg-white shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300">
          <img
            src="https://images.pexels.com/photos/572056/pexels-photo-572056.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Values"
            className="w-full h-48 object-cover rounded-t-lg mb-4"
          />
          <h3 className="text-2xl font-semibold text-gray-800 mb-2">
            Our Values
          </h3>
          <p className="text-gray-700">
            At Pixify, we value creativity, collaboration, and community. We’re
            committed to fostering a space where everyone feels inspired.
          </p>
        </div>
      </div>

      <div className="mt-12 text-center">
        <h3 className="text-3xl font-bold text-gray-800 mb-4">
          Join Our Journey
        </h3>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Whether you’re a professional photographer, a creative enthusiast, or
          simply someone who loves beautiful pictures, Pixify is here for you.
          Join us in celebrating the art of photography and creating a world of
          visual storytelling.
        </p>
        <a
          href="https://www.linkedin.com/in/sudhanshu-pandey-a28992231/"
          target="_blank"
          className="mt-6 inline-block px-6 py-3 text-white bg-blue-600 hover:bg-blue-700 rounded-lg shadow transition-all duration-300"
        >
          Get in Touch
        </a>
      </div>
    </section>
  );
};

export default About;
