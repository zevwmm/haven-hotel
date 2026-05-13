export default function Footer() {
  const navLinks = [
    { href: "#rooms", label: "Rooms" },
    { href: "#experience", label: "Experience" },
    { href: "#dining", label: "Dining" },
    { href: "#reserve", label: "Reserve" },
  ];

  return (
    <footer className="border-t border-[#EDE8E2] py-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <span className="font-serif text-[#1A1714] text-sm tracking-[0.3em] uppercase">
            HAVEN
          </span>

          {/* Nav links */}
          <div className="flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#9C958C] text-xs font-sans tracking-wide hover:text-[#1A1714] transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social + copyright */}
          <div className="flex items-center gap-5">
            {/* Instagram SVG */}
            <a
              href="#"
              className="text-[#9C958C] hover:text-[#8B7355] transition-colors duration-200"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
              </svg>
            </a>

            <span className="text-[#9C958C] font-sans text-xs">
              © 2026 HAVEN. All rights reserved.
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
