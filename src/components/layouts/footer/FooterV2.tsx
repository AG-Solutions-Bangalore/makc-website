import { Link } from "react-router-dom";
import BrandLogo from "@/components/common/BrandLogo";
import { getImageUrl } from "@/utils/image";


export default function FooterV2() {
  return (
    <footer className="bg-black text-white border-t border-white/10 pt-20 pb-12 relative z-20">
      <div className="max-w-7xl mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left Column: Brand + Tagline + Widgets (lg:col-span-5) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <Link to="/">
                <BrandLogo className="h-11 w-auto mb-6" />
              </Link>
              <p className="text-xl sm:text-2xl font-sans text-white font-medium max-w-md leading-relaxed mb-10">
                We transform your vision into{" "}
                <span className="text-emerald-500 font-semibold">
                  intelligently connected living
                </span>{" "}
                spaces.
              </p>
            </div>
            
            {/* Follow Us / Location Widgets */}
            <div className="grid grid-cols-2 gap-4 max-w-sm mt-auto">
              <div>
                <span className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider block mb-3 select-none">
                  Follow Us On Instagram
                </span>
                <div className="rounded-2xl bg-neutral-900 border border-white/5 aspect-[4/3] flex items-center justify-center group overflow-hidden cursor-pointer hover:border-emerald-500/20 transition-all duration-300">
                  <span className="text-white/40 text-xs group-hover:text-emerald-400 transition-colors">@makcautomations</span>
                </div>
              </div>
              <div>
                <span className="text-white/40 text-[10px] sm:text-xs font-bold uppercase tracking-wider block mb-3 select-none">
                  Our Location
                </span>
                <div className="rounded-2xl bg-neutral-900 border border-white/5 aspect-[4/3] flex items-center justify-center group overflow-hidden cursor-pointer hover:border-emerald-500/20 transition-all duration-300">
                  <span className="text-white/40 text-xs group-hover:text-emerald-400 transition-colors">Bangalore, IN</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Menu + Others + Gallery (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col justify-between gap-12">
            
            {/* Top row: Menu and Others/Contact */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              
              {/* Menu */}
              <div>
                <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest block mb-6 select-none">
                  Menu
                </span>
                <ul className="flex flex-col gap-4">
                  {[
                    { label: "Home", path: "/" },
                    { label: "About Us", path: "/why-us" },
                    { label: "Automation", path: "/automation" },
                    { label: "Gallery", path: "/gallery" },
                    { label: "Contact Us", path: "/contact" }
                  ].map((link, idx) => (
                    <li key={idx}>
                      <Link 
                        to={link.path} 
                        className="font-serif text-2xl font-bold hover:text-emerald-500 transition-colors duration-250 block"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Others and Contact */}
              <div className="flex flex-col justify-between h-full gap-8">
                
                {/* Others */}
                <div>
                  <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest block mb-6 select-none">
                    Others
                  </span>
                  <ul className="flex flex-col gap-4">
                    {[
                      { label: "Terms and Conditions", path: "/#terms" },
                      { label: "Privacy and Policy", path: "/#privacy" }
                    ].map((link, idx) => (
                      <li key={idx}>
                        <Link 
                          to={link.path} 
                          className="font-serif text-2xl font-bold hover:text-emerald-500 transition-colors duration-250 block"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Contact */}
                <div>
                  <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest block mb-4 select-none">
                    Contact
                  </span>
                  <div className="flex flex-col gap-2">
                    <a 
                      href="tel:+919324226077" 
                      className="font-serif text-2xl font-bold hover:text-emerald-500 transition-colors duration-250 block"
                    >
                      +91-9324226077
                    </a>
                    <a 
                      href="mailto:info@makcautomations.com" 
                      className="font-serif text-2xl font-bold hover:text-emerald-500 transition-colors duration-250 block break-all"
                    >
                      info@makcautomations.com
                    </a>
                  </div>
                </div>

              </div>

            </div>

            {/* Bottom Row: Gallery */}
            <div>
              <span className="text-white/40 text-[11px] font-bold uppercase tracking-widest block mb-6 select-none">
                Gallery
              </span>
              <div className="grid grid-cols-3 gap-4">
                {[
                  getImageUrl("Touch panels.webp"),
                  getImageUrl("electric automation.webp"),
                  getImageUrl("Scheduling.webp")
                ].map((img, idx) => (
                  <div key={idx} className="rounded-2xl overflow-hidden border border-white/10 aspect-[4/3] relative group shadow-md bg-neutral-900">
                    <img 
                      src={img} 
                      alt="Footer Gallery Item" 
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/10 transition-opacity duration-300 group-hover:opacity-0" />
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Divider */}
        <div className="h-px bg-white/10 my-10 lg:my-12" />

        {/* Bottom copyright info */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
          <p className="text-xs text-white/40 font-mono">
            Copyright &copy; 2019 – 2024 MAKc Automation & Solutions LLP. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
