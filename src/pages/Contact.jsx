import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import toast from "react-hot-toast";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const showToast = () => {
    if (!name || !email || !message) {
      toast.error("Please fill all required fields");
      return; // Exit early to prevent sending the message
    }

    toast.success("Message Sent");
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section className="bg-gray-100 py-12 px-6 sm:px-20 mt-12">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">Contact Us</h2>
        <p className="text-lg text-gray-700 leading-relaxed">
          We'd love to hear from you! Whether you have a question, feedback, or
          want to collaborate, feel free to reach out.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl mx-auto">
        {/* Contact Form */}
        <div className="bg-white shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Send Us a Message
          </h3>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-1"
                htmlFor="name"
              >
                Your Name
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-1"
                htmlFor="email"
              >
                Your Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-medium mb-1"
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                id="message"
                rows="4"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Write your message here..."
              ></textarea>
            </div>
            <button
              type="button"
              onClick={showToast}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow hover:bg-blue-700 transition-all duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Social Links */}
        <div className="flex flex-col justify-center items-center bg-blue-50 shadow-lg rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Connect With Us
          </h3>
          <p className="text-gray-700 text-center mb-6">
            Follow us on our social platforms and stay updated with the latest
            news, tips, and features.
          </p>
          <div className="flex space-x-5">
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sudhanshu-pandey-a28992231/" // Replace with your LinkedIn profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-800 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl" />
            </a>
            {/* Twitter */}
            <a
              href="https://x.com/sudhanshu_p_20?mx=2" // Replace with your Twitter profile link
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-600 transition-all duration-300"
            >
              <FontAwesomeIcon icon={faXTwitter} className="text-3xl" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
