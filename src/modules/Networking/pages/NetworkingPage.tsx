import { 
  Wifi, 
  Layers, 
  Cable, 
  Search, 
  PenTool, 
  CheckCircle2, 
  Wrench, 
  Sparkles 
} from "lucide-react";

// Import shared common components
import SolutionHero from "@/components/common/SolutionHero";
import TrendingCarousel from "@/components/common/TrendingCarousel";
import ConnectBanner from "@/components/common/ConnectBanner";

// Import images
import serviceNetworkingImg from "@/assets/images/home_v2/service_networking.png";
import whyChooseUsImg from "@/assets/images/home_v2/why_choose_us.png";
import projectApartmentsImg from "@/assets/images/home_v2/project_apartments.png";
import projectFarmhousesImg from "@/assets/images/home_v2/project_farmhouses.png";
import projectPenthousesImg from "@/assets/images/home_v2/project_penthouses.png";
import projectCommercialImg from "@/assets/images/home_v2/project_commercial.png";

export default function NetworkingPage() {
  
  const mainFeatures = [
    {
      title: "Wireless and Wired",
      desc: "Experience effective, high-speed connectivity with our Home WiFi Extender technology, comprehending your networking requirements and goals.",
      icon: Wifi,
    },
    {
      title: "Routing and Switching",
      desc: "Our network solutions are tailored to suit your infrastructure and needs, whether you prefer a wired or home WiFi Extender-enabled setup. We plan your entire network channel on an appropriate scale.",
      icon: Layers,
    },
    {
      title: "Structured Cabling",
      desc: "Build a simplified and proper networking infrastructure using Home WiFi Extender technology or wired fiber or copper wire connectivity.",
      icon: Cable,
    },
  ];

  const processFeatures = [
    {
      title: "Consultancy",
      desc: "We deeply understand your need to deliver the right and satisfactory solution with our networking services, including the Best Wi-Fi extender options.",
      icon: Search,
    },
    {
      title: "Planning & Design",
      desc: "Based on your needs and the outcomes of our consultancy, we meticulously plan and design a networking sketch that serves as the blueprint for implementing the solution, including Mesh Wireless Network solutions.",
      icon: PenTool,
    },
    {
      title: "Implementation",
      desc: "Our expertise lies in quick, reliable, and accurate execution. We bring your network plan to life based on our meticulous planning and deliver it on time.",
      icon: CheckCircle2,
    },
    {
      title: "Repairs/AMC",
      desc: "We offer regular follow-ups to maintain your network system and ensure it stays up-to-date. If needed, we can swiftly handle repairs to keep your workflow uninterrupted.",
      icon: Wrench,
    },
  ];

  const trendingNetworking = [
    {
      id: "nt-2",
      name: "nt-2 Extender",
      tag: "Dual-Band Wi-Fi Extender",
      img: projectApartmentsImg,
      desc: "High-performance wall-plug wireless range extender designed to boost gigabit Wi-Fi coverage across dead zones.",
    },
    {
      id: "nt-4",
      name: "nt-4 Switch",
      tag: "8-Port PoE Switch Panel",
      img: projectFarmhousesImg,
      desc: "Compact managed switch delivering Power over Ethernet (PoE) to access points, security cameras, and wall interfaces.",
    },
    {
      id: "nt-5",
      name: "nt-5 Ceiling AP",
      tag: "AC1200 Ceiling Access Point",
      img: projectPenthousesImg,
      desc: "A sleek ceiling-mount wireless access point designed to build seamless, high-capacity mesh WiFi systems.",
    },
    {
      id: "nt-7",
      name: "nt-7 Patch Cord",
      tag: "High-Speed SFTP Cat6 Cable",
      img: projectCommercialImg,
      desc: "Double-shielded high-speed copper networking patch cable for interference-free gigabit data transmission.",
    },
  ];

  return (
    <div className="pt-24 lg:pt-32 pb-16 min-h-screen bg-bg-main text-text-main overflow-hidden transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* REUSABLE HERO SECTION */}
        <SolutionHero 
          badgeText="#1 Choice for Home Automation"
          badgeIcon={Wifi}
          headingNormal="Smart Networking"
          headingHighlighted="Solutions"
          subtitle="A smart home or office is only as good as its network. With professionally designed networking solutions in Bangalore, MAKc Automation ensures strong, secure, and uninterrupted connectivity across every corner of your space. Designed for homes, villas, apartments, offices, and commercial spaces."
          imageSrc={serviceNetworkingImg}
          imageTag="Mesh Wi-Fi Access Points"
          imageTitle="High-Speed Mesh Network"
          imageDesc="Experience zero dead zones and seamless gigabit speeds across all levels."
          formTitle="Request Network Survey"
          formSubtitle="Plan a seamless mesh Wi-Fi network layout with our network engineers."
          formButtonText="Optimize Connection"
          formToastMessage="Network consultation requested. Our connection specialist will call you shortly."
        />

        {/* WIRELESS & WIRED FEATURES SECTION (3 CARDS) */}
        <section className="border-t border-border-main/50 pt-20 mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Core Connectivity</span>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main">Wired & Wireless Architecture</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {mainFeatures.map((feat, index) => {
              const IconComponent = feat.icon;
              return (
                <div key={index} className="bg-bg-surface border border-border-main p-8 rounded-3xl flex flex-col justify-between transition-all hover:-translate-y-1 shadow-md group">
                  <div>
                    {/* Clean Rounded-Full Icon wrapper with Apple Shine */}
                    <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue mb-6 group-hover:scale-105 transition-transform duration-300 apple-border-shine">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-xl font-serif font-bold text-text-main mb-3">{feat.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* CONSULTANCY & IMPLEMENTATION GRID (4 CARDS) */}
        <section className="mb-24">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-accent-blue text-xs font-bold uppercase tracking-widest block mb-3">Process Workflow</span>
            <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main">From Blueprint to Delivery</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processFeatures.map((feat, index) => {
              const IconComponent = feat.icon;
              return (
                <div key={index} className="bg-bg-surface border border-border-main p-6 sm:p-8 rounded-3xl flex flex-col justify-between transition-all hover:-translate-y-1 shadow-md group">
                  <div>
                    {/* Clean Rounded-Full Icon wrapper with Apple Shine */}
                    <div className="w-12 h-12 rounded-full border border-border-main bg-bg-main flex items-center justify-center text-accent-blue mb-6 group-hover:scale-105 transition-transform duration-300 apple-border-shine">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-text-main mb-2.5">{feat.title}</h3>
                    <p className="text-xs text-text-muted leading-relaxed">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ALIGN YOUR NETWORKING SOLUTIONS */}
        <section className="bg-bg-surface/30 border-y border-border-main/50 py-20 mb-24 -mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full border border-border-main bg-accent-blue/10 flex items-center justify-center text-accent-blue apple-border-shine">
                  <Sparkles className="w-5 h-5" />
                </div>
                <span className="text-accent-blue text-xs font-bold uppercase tracking-widest">Enterprise Integration</span>
              </div>
              <h2 className="text-4xl font-serif font-bold tracking-tight text-text-main leading-tight">
                Align Your Networking Solutions as Required
              </h2>
              <div className="space-y-4 text-sm text-text-muted leading-relaxed">
                <p>
                  MAKc Automation and Solution is one of the best Home Wi-Fi extender and Networking Service Providers in Bangalore. We specialize in delivering the most preferred and out-of-the-box networking system integration, including the top IT Infrastructure Partners. Our solutions are designed to simplify complex connectivity needs, aligning your networking solutions with your business goals and objectives. We ensure cost-effective and convenient services that comply with the requirements of any industry.
                </p>
                <p>
                  MAKc Automation and Solution offers a comprehensive solution for networking services, where we deploy, operate, manage, optimize, and, most importantly, integrate it seamlessly with virtualization. Our planning and process methodologies are designed to enhance the productivity of work performances while reducing operational costs. Furthermore, we prioritize real-time business intelligence, making us the go-to choice as the Best wifi extender and networking solution provider in Bangalore.
                </p>
              </div>
            </div>

            {/* Visual Panel Cabling */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl overflow-hidden border border-border-main aspect-square bg-bg-surface relative group">
                <img 
                  src={whyChooseUsImg} 
                  alt="Structured rack cabling interface" 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-750"
                />
                <div className="absolute inset-0 bg-black/25" />
              </div>
            </div>

          </div>
        </section>

        {/* REUSABLE TRENDING CAROUSEL */}
        <TrendingCarousel 
          title="Trending connectivity components"
          brandLabel="MAKc Connect"
          products={trendingNetworking}
        />

        {/* REUSABLE BANNER CTA */}
        <ConnectBanner 
          title="Connect With Us"
          description="Our connectivity specialists are ready to audit your property network requirements. Contact us via phone or email for customized estimates."
        />

      </div>
    </div>
  );
}
