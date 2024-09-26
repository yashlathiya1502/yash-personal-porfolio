import emailjs from "emailjs-com";
import React, { useEffect, useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY || "");
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSending(true);
    setSuccess(null);
    setError(null);

    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID || "",
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "",
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setSuccess("Your message has been sent successfully!");
        setSending(false);
      })
      .catch(() => {
        setError(
          "There was an error sending your message. Please try again later."
        );
        setSending(false);
      });
  };

  return (
    <div className="flex flex-col lg:flex-row  p-8 lg:p-16">
      {/* Left Side: Thank You Message */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 flex items-center justify-center">
        <div className="text-center p-8 ">
          <h2 className="text-2xl font-bold mb-4 text-gray-800">
            Thank You for Reaching Out!
          </h2>
          <p className="text-lg mb-6 text-gray-600">
            I appreciate your message and will get back to you as soon as
            possible. Your inquiry is important to me, and I'm looking forward
            to connecting with you.
          </p>
          <p className="text-lg font-medium text-blue-600">
            yashlathiya.dev@gmail.com
          </p>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-1/2 flex flex-col justify-center">
        <h1 className="text-4xl font-extrabold mb-6 text-gray-900">
          Contact Us
        </h1>
        {/* <p className="text-lg mb-8 text-gray-600">
        If you have any questions or need assistance, please fill out the form
        below to get in touch with us.
      </p> */}

        <div className="bg-white p-8 rounded-lg shadow-xl">
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-6">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-2"
            >
              Email
            </label>
            <p className="text-lg font-medium text-gray-900">
            yashlathiya.dev@gmail.com
            </p>
          </div> */}

            <div className="mb-6 flex flex-col gap-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full py-2 px-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="message"
                  rows={6}
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              disabled={sending}
            >
              {sending ? "Sending..." : "Submit"}
            </button>

            {success && <p className="mt-4 text-green-600">{success}</p>}
            {error && <p className="mt-4 text-red-600">{error}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
