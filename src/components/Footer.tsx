// src/components/Footer.tsx
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-16 bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 lg:px-20 py-10 md:py-12">
        {/* Top row */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
          {/* Brand / tagline with logo */}
          <div className="flex items-start gap-4">
            <img
              src="/luke-porritt-logo.png"
              alt="Luke Porritt Golf logo"
              className="h-18 w-auto mt-1"
            />
            <div>
              <h3
                className="text-xl md:text-2xl font-semibold text-white mb-1"
                style={{
                  fontFamily:
                    "Montserrat, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
                }}
              >
                Luke Porritt Golf
              </h3>
              <p className="text-sm text-gray-400 max-w-md">
                Private coaching, on-course strategy and performance training
                for golfers of all levels in the Albury / Wodonga region.
              </p>
            </div>
          </div>

          {/* Contact details */}
          <div className="space-y-2 text-sm">
            <p className="font-semibold text-gray-200 uppercase tracking-wide text-xs">
              Contact
            </p>
            <a
              href="tel:+61428585389"
              className="block text-gray-300 hover:text-brand-400 transition-colors"
            >
              +61&nbsp;428&nbsp;585&nbsp;389
            </a>
            <a
              href="mailto:lukeporritt@pgamember.org.au"
              className="block text-gray-300 hover:text-brand-400 transition-colors break-all md:break-normal"
            >
              lukeporritt@pgamember.org.au
            </a>
          </div>

          {/* Connect */}
          <div className="space-y-3">
            <p className="font-semibold text-gray-200 uppercase tracking-wide text-xs">
              Connect
            </p>

            <div className="flex items-center gap-3">
              {/* Facebook */}
              <a
                href="https://www.facebook.com/lukeporrittgolf"
                target="_blank"
                rel="noreferrer"
                aria-label="Luke Porritt Golf on Facebook"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-brand-500 hover:border-brand-400 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M13.5 22v-7h2.5a1 1 0 0 0 .99-.87l.38-3a1 1 0 0 0-.99-1.13H13.5V7.5c0-.83.67-1.5 1.5-1.5h1.5a1 1 0 0 0 1-1V3.06a1 1 0 0 0-1.06-1C15.46 2.13 14.36 2 13.5 2 11.02 2 9 3.79 9 6.5V10H7a1 1 0 0 0-1 .88l-.38 3a1 1 0 0 0 .99 1.12H9.1v7h4.4Z" />
                </svg>
              </a>

              {/* Square booking icon */}
              <a
                href="https://luke-porritt.square.site/"
                target="_blank"
                rel="noreferrer"
                aria-label="Book online via Square"
                className="inline-flex items-center justify-center h-10 w-10 rounded-full bg-white/5 border border-white/10 hover:bg-brand-500 hover:border-brand-400 hover:text-white transition-colors"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-5 w-5"
                  aria-hidden="true"
                >
                  <rect
                    x="3.5"
                    y="3.5"
                    width="17"
                    height="17"
                    rx="4"
                    ry="4"
                    className="fill-transparent"
                    stroke="currentColor"
                    strokeWidth="2"
                  />
                  <rect
                    x="9"
                    y="9"
                    width="6"
                    height="6"
                    rx="1.5"
                    ry="1.5"
                    className="fill-current"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-8 pt-6 border-t border-white/5 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-gray-500">
          <p>© {year} Luke Porritt Golf. All rights reserved.</p>
          <p className="text-gray-500">
            Site by{" "}
            <span className="text-gray-300">
              Empty Method - Mitchell Thomas
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
