import { useState } from "react";
import { BsTelephone } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaClock,
} from "react-icons/fa";

// Social links (reuse from footer)
const social = [
  {
    name: "Instagram",
    href: "https://instagram.com/yourbrand",
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9779857073266",
    icon: FaWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61583205579168",
    icon: FaFacebookF,
  },
];

// Contact info
const contactInfo = [
  {
    icon: FaMapMarkerAlt,
    text: "Shanti Path, Tilottama-5, Rupandehi, Nepal",
  },
  {
    icon: FaPhoneAlt,
    text: "+977 9857073266",
    href: "tel:+9779857073266",
  },
  {
    icon: BsTelephone,
    text: "+977 71561550",
    href: "tel:+97771561550",
  },
  {
    icon: FaEnvelope,
    text: "niceitsolutionpl@gmail.com",
    href: "mailto:niceitsolutionpl@gmail.com",
  },
  {
    icon: FaClock,
    text: "Opening Hours: Sun–Fri, 09:00 AM – 07:00 PM",
  },
];

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would integrate with your backend or form service
    console.log("Form submitted:", form);
    setSubmitted(true);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="relative bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-300 min-h-screen">
      {/* Faded background logo */}
      <img
        src="/logonit.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-contain opacity-5 pointer-events-none"
      />

      <div className="relative max-w-7xl mx-auto px-6 py-16">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-indigo-600 mb-4">
          Contact Us
        </h1>
        <p className="mb-12 text-gray-600 dark:text-gray-400 max-w-2xl">
          Have questions, feedback, or need support? Reach out to us using the form below or through our contact information.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows={6}
                required
                className="px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 resize-none"
              />
              <button
                type="submit"
                className="w-max bg-indigo-600 text-white px-6 py-3 rounded-full font-medium hover:bg-indigo-500 transition"
              >
                Send Message
              </button>
              {submitted && <p className="text-green-500 mt-2">Message sent! We will get back to you soon.</p>}
            </form>
          </div>

          {/* Contact Info + Socials */}
          <div className="flex flex-col gap-6">
            <h2 className="text-xl font-semibold mb-2">Our Contact Info</h2>
            <div className="flex flex-col gap-3 text-sm">
              {contactInfo.map((info, idx) => {
                const Icon = info.icon;
                return (
                  <div key={idx} className="flex items-center gap-2">
                    <Icon className="w-5 h-5 text-indigo-600" />
                    {info.href ? (
                      <a href={info.href} className="hover:underline">
                        {info.text}
                      </a>
                    ) : (
                      <span>{info.text}</span>
                    )}
                  </div>
                );
              })}
            </div>

            <h2 className="text-xl font-semibold mt-6 mb-2">Follow Us</h2>
            <div className="flex gap-3">
              {social.map((s) => {
                const Icon = s.icon;
                return (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200 hover:bg-indigo-600 hover:text-white transition flex items-center justify-center"
                  >
                    <Icon className="w-4 h-4" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
