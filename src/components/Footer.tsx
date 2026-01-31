
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

const social = [
  {
    name: "Instagram",
    href: "https://instagram.com/yourbrand",
    icon: FaInstagram,
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/9779857073266", // e.g. https://wa.me/977981XXXXXXX
    icon: FaWhatsapp,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/profile.php?id=61583205579168", // replace with your real page URL
    icon: FaFacebookF,
  }
];

const quickLinks = [
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
  { name: "Support", href: "/support" },
  { name: "Terms", href: "/terms" },
  { name: "Privacy", href: "/privacy" },
];

export default function Footer() {
      return (
        <footer className="relative w-full bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-gray-700 dark:text-gray-300">
          {/* Faded background logo */}
          <img
            src="/logonit.png"
            alt=""
            aria-hidden="true"
            className="absolute inset-0 w-full h-full object-contain opacity-10 pointer-events-none p-10"
          />
    
          <div className="relative max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand + description */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-indigo-600">Nice IT Solution</span>
                <span className="text-xl text-gray-400">.</span>
              </div>
              <p className="text-sm">
                Delivering reliable fiber connectivity, full-spectrum IT solutions, and modern web infrastructure to power businesses and homes.
              </p>
              <div className="flex gap-3">
                {social.map((s) => {
                  const Icon = s.icon;
                  return (
                    <a
                      key={s.name}
                      href={s.href}
                      aria-label={s.name}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-200 hover:bg-indigo-600 hover:text-white transition flex items-center justify-center"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>
    
            {/* Quick links */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
              <div className="flex flex-col gap-2">
                {quickLinks.slice(0, 3).map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    {l.name}
                  </a>
                ))}
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {quickLinks.slice(3).map((l) => (
                  <a
                    key={l.name}
                    href={l.href}
                    className="text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition"
                  >
                    {l.name}
                  </a>
                ))}
              </div>
            </div>
    
            {/* Contact Info */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Contact</h3>
              <div className="flex flex-col gap-3 text-sm">
                <div className="flex items-start gap-2">
                  <FaMapMarkerAlt className="mt-1 w-4 h-4 text-indigo-600" />
                  <div>Shanti Path, Tilottama-5, Rupandehi,Nepal</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaPhoneAlt className="w-4 h-4 text-indigo-600" />
                  <div>
                    <a href="tel:+9779857073266" className="hover:underline">
                      +977 9857073266
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <BsTelephone className="w-4 h-4 text-indigo-600" />
                  <div>
                    <a href="tel:+97771561550" className="hover:underline">
                      +977 71561550
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaEnvelope className="w-4 h-4 text-indigo-600" />
                  <div>
                    <a href="mailto:niceitsolutionpl@gmail.com" className="hover:underline">
                      niceitsolutionpl@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <FaClock className="w-4 h-4 text-indigo-600" />
                  <div>Opening Hours: Sun–Fri, 09:00 AM – 07:00 PM</div>
                </div>
              </div>
            </div>
    
            {/* Why Choose Us */}
            <div className="flex flex-col">
              <h3 className="text-lg font-semibold mb-3">Why Choose Us</h3>
              <p className="text-sm">
                Trusted by businesses for dependable infrastructure, proactive support,
                and scalable IT solutions tailored to Nepal’s growing digital needs.
              </p>
            </div>
          </div>
    
          {/* bottom bar */}
          <div className="border-t border-gray-200 dark:border-gray-700 mt-6">
            <div className="max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row justify-center items-center text-xs gap-4">
              <div>
                © {new Date().getFullYear()} Nice IT Solution. All rights reserved.
              </div>
            </div>
          </div>
        </footer>
      );
    }
    
