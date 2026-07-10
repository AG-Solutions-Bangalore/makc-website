import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Marquee from "react-fast-marquee";
import SectionLabel from "@/components/common/SectionLabel";

gsap.registerPlugin(ScrollTrigger);

const vendorLogos = [
  "/images/Home/OurVendors/Purvankara-r75hcj6hihl3qt4j8kwnpnjuvgfqi26lahegyrvsh4.png",
  "/images/Home/OurVendors/mack-logo-2-q9968w9h0yfiksmy4ilvn4ix9nf7pbuov25bf4t9ew.jpeg",
  "/images/Home/OurVendors/mack-logo-5-q9968y55emi380k7tjf4s41ugf5y4q25jbgadoqh2g.jpeg",
  "/images/Home/OurVendors/vendor-09-q974bbff28xhqcq8vj94u9kiyw0738khxguhzx5u5k.jpeg",
  "/images/Home/OurVendors/vendor-08-q974bahkvew7eqrm10ui9rt2di4tvjgrlc70in78bs.jpeg",
  "/images/Home/OurVendors/vendor-05-q974b9jqokux34sz6ifvpa1ls49gnud197jj1d8mi0.jpeg",
  "/images/Home/OurVendors/client-04-q973yadybx3esxnjyeias1xijm81e9ufszb7iuhaeg.jpeg",
  "/images/Home/OurVendors/mack-01-q997m27khzqfuj8019odk7vvu73dbe19aekm35wxyg.png",
  "/images/Home/OurVendors/mack-logo-12-q99691wi5yn8iger7l1n233otynezih2vu28askwdk.jpeg",
  "/images/Home/OurVendors/2_20250611_192055_0001-r76p9u20xs9peq72jlv1w493i8eer2ucd7a0np9qso.png",
  "/images/Home/OurVendors/images-2-r75hzqt0a7d0g5eqp43zsaomz011kzbytdd4lrgstk.png",
  "/images/Home/OurVendors/vendor-03-q974b7o2awscfwvphhmmkaiolciq8g5kky8k2tbeug.jpeg",
  "/images/Home/OurVendors/vendor-01-q974b6q842r24ax2mz7zzsr7zynd0r1u8tl2ljct0o.jpeg",
  "/images/Home/OurVendors/partner5-q90buvlcaxshx7ux9hv650xxs094gvflbc1vwtnu20.png",
  "/images/Home/OurVendors/partner16-q90buaww4l06tsoym8xdm65spj31rj5hwhp7cqihuw.png",
  "/images/Home/OurVendors/partner18-q90bwlmou05f7hct78ojplaczfrckw9vjv3xl33unc.png",
  "/images/Home/OurVendors/download-1-r73rzip035m2thuabq0dx3a10cdsxojw8vqqsn7je0.png",
  "/images/Home/OurVendors/images-r73rwykthe3z7pk39m6y4qiuskztzce787t5rj04bs.png",
  "/images/Home/OurVendors/foxtech.avif",
  "/images/Home/OurVendors/images-1-r75hhhrtl0dl0px49q3rvehfqnzh4jvlb1cq5cizmw.png",
  "/images/Home/OurVendors/tp-q998dh63u19ih3edy4anaatvkryrtkvf23kfzp9kh4.png",
  "/images/Home/OurVendors/mack-logo-6-q9968z2zlgjdjmiuo1trcltb1t1bcf5vvg3ruyp2w8.jpeg",
];

export default function OurVendorsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const getVendorAlt = (src: string) => {
    if (src.includes("vendor-01")) return "Smart Home Automation Technology Partner";
    if (src.includes("vendor-03")) return "Home Automation Equipment Partner";
    if (src.includes("client-04")) return "Residential Home Automation Project";
    if (src.includes("download")) return "Smart Home Automation Device";
    return "MAKc Automation Partner";
  };

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        sectionRef.current!.querySelectorAll(".vendors-header"),
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 85%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#050505] section-padding border-t border-white/5 overflow-hidden"
    >
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage: `radial-gradient(rgba(255,255,255,0.8) 1px, transparent 1px)`,
          backgroundSize: "32px 32px",
        }}
      />

      <div className="max-w-[1600px] mx-auto">
        <div className="text-center mb-16 lg:mb-24">
          <div className="vendors-header">
            <SectionLabel text="TRUSTED TECHNOLOGY PARTNERS" />
          </div>
          <h2 className="vendors-header heading-display text-h2 text-white mt-4">
            Our Vendors
          </h2>
          <p className="vendors-header text-body text-white/50 font-body max-w-2xl mx-auto mt-6 leading-relaxed">
            We collaborate with globally recognized automation and smart living
            brands to deliver reliable, future-ready experiences.
          </p>
        </div>

        <div className="relative">
          {/* First row - scrolls left */}
          <div className="mb-8">
            <Marquee
              gradient
              gradientColor="rgb(5,5,5)"
              gradientWidth={80}
              speed={40}
              pauseOnHover
              className="py-4"
            >
              {vendorLogos.map((src, index) => (
                <div
                  key={`row1-${index}`}
                  className="group flex items-center justify-center mx-6 md:mx-8"
                >
                  <div className="relative">
                    <img
                      src={src}
                      alt={getVendorAlt(src)}
                      className="h-10 md:h-12 w-auto max-w-[140px] object-contain grayscale brightness-[1.8] contrast-[0.7] opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -inset-4 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent blur-xl pointer-events-none" />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>

          {/* Second row - scrolls right */}
          <div>
            <Marquee
              gradient
              gradientColor="rgb(5,5,5)"
              gradientWidth={80}
              speed={40}
              pauseOnHover
              direction="right"
              className="py-4"
            >
              {vendorLogos.map((src, index) => (
                <div
                  key={`row2-${index}`}
                  className="group flex items-center justify-center mx-6 md:mx-8"
                >
                  <div className="relative">
                    <img
                      src={src}
                      alt={getVendorAlt(src)}
                      className="h-10 md:h-12 w-auto max-w-[140px] object-contain grayscale brightness-[1.8] contrast-[0.7] opacity-60 group-hover:opacity-100 group-hover:grayscale-0 group-hover:brightness-100 group-hover:contrast-100 transition-all duration-500 ease-out"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 -inset-4 bg-gradient-to-r from-transparent via-white/[0.03] to-transparent blur-xl pointer-events-none" />
                  </div>
                </div>
              ))}
            </Marquee>
          </div>
        </div>
      </div>
    </section>
  );
}
