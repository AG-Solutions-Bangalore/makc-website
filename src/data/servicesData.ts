export interface FAQItem {
  question: string;
  answer: string;
}

export interface Subsection {
  id: string;
  heading: string;
  body: string;
  image?: string;
  features?: string[];
}

export interface ServiceData {
  slug: string;
  title: string;
  highlightedWord: string;
  subtitle: string;
  sidebarLinks: string[];
  subsections: Subsection[];
  faqs: FAQItem[];
}

export const servicesData: ServiceData[] = [
  {
    slug: '/industrial-automation',
    title: 'INDUSTRIAL AUTOMATION',
    highlightedWord: 'AUTOMATION',
    subtitle: 'End-to-end industrial automation solutions designed to optimize manufacturing processes, increase productivity, and reduce operational costs across diverse industrial sectors.',
    sidebarLinks: ['Overview', 'Process Optimization', 'System Integration', 'Benefits'],
    subsections: [
      {
        id: 'overview',
        heading: 'OVERVIEW',
        body: 'Industrial automation is the backbone of modern manufacturing. At Makc Automations, we deliver comprehensive automation solutions that streamline production workflows, reduce human error, and maximize equipment utilization. Our team of certified engineers has extensive experience across multiple industries including oil & gas, manufacturing, water treatment, and energy.',
        image: '/assets/industrial-automation-overview.jpg',
      },
      {
        id: 'process-optimization',
        heading: 'PROCESS OPTIMIZATION',
        body: 'Our process optimization services identify bottlenecks, eliminate waste, and improve throughput in your manufacturing operations. Using advanced analytics and simulation tools, we model your processes and implement data-driven improvements that deliver measurable results.',
        features: [
          'Lean manufacturing implementation',
          'Six Sigma process improvement',
          'OEE (Overall Equipment Effectiveness) optimization',
          'Production scheduling optimization',
          'Quality control system integration',
          'Energy efficiency improvements',
        ],
      },
      {
        id: 'system-integration',
        heading: 'SYSTEM INTEGRATION',
        body: 'We specialize in integrating disparate systems into unified automation architectures. From legacy equipment retrofits to greenfield installations, our integration expertise ensures seamless communication between all components of your automation ecosystem.',
        image: '/assets/system-integration.jpg',
      },
      {
        id: 'benefits',
        heading: 'BENEFITS',
        body: 'Our industrial automation solutions deliver tangible business outcomes:',
        features: [
          'Up to 40% increase in productivity',
          '60% reduction in unplanned downtime',
          '25% decrease in operational costs',
          'Enhanced product quality and consistency',
          'Improved workplace safety',
          'Scalable architecture for future growth',
        ],
      },
    ],
    faqs: [
      { question: 'WHAT INDUSTRIES DO YOU SPECIALIZE IN?', answer: 'We specialize in oil & gas, manufacturing, water & wastewater treatment, energy & utilities, food & beverage, and chemical & pharmaceutical industries. Our team has deep domain expertise across all these sectors.' },
      { question: 'HOW LONG DOES A TYPICAL AUTOMATION PROJECT TAKE?', answer: 'Project timelines vary based on scope and complexity. A typical PLC programming project takes 4-8 weeks, while a full DCS implementation may take 6-12 months. We provide detailed timelines during the proposal phase.' },
      { question: 'DO YOU PROVIDE ONGOING SUPPORT AFTER COMMISSIONING?', answer: 'Yes, we offer comprehensive maintenance contracts including 24/7 emergency support, preventive maintenance visits, software updates, and system optimization services.' },
      { question: 'WHAT PLC PLATFORMS DO YOU WORK WITH?', answer: 'We are certified in all major platforms including Siemens S7, Allen-Bradley ControlLogix/CompactLogix, Schneider Electric Modicon, Mitsubishi MELSEC, and Omron Sysmac.' },
      { question: 'CAN YOU INTEGRATE WITH EXISTING SYSTEMS?', answer: 'Absolutely. System integration is one of our core competencies. We have extensive experience integrating new automation with legacy systems using gateway technologies and protocol converters.' },
    ],
  },
  {
    slug: '/plc-scada',
    title: 'PLC & SCADA',
    highlightedWord: 'SCADA',
    subtitle: 'Expert PLC programming, SCADA system development, and HMI design for seamless control and monitoring of industrial processes with real-time data visualization.',
    sidebarLinks: ['PLC Programming', 'SCADA Development', 'HMI Design', 'Commissioning'],
    subsections: [
      {
        id: 'plc-programming',
        heading: 'PLC PROGRAMMING',
        body: 'Our certified PLC programmers are proficient in all major industrial platforms including Siemens S7 (TIA Portal, STEP 7), Allen-Bradley (Studio 5000, RSLogix), Schneider Electric (EcoStruxure, Unity Pro), and Mitsubishi (GX Works). We develop robust, well-documented control logic following IEC 61131-3 standards with structured programming methodologies.',
        features: [
          'Ladder Logic (LD) development',
          'Structured Text (ST) programming',
          'Function Block Diagram (FBD)',
          'Sequential Function Chart (SFC)',
          'Safety PLC programming (SIL-rated)',
          'Multi-platform migration and upgrades',
        ],
      },
      {
        id: 'scada-development',
        heading: 'SCADA DEVELOPMENT',
        body: 'We design and implement SCADA systems that provide complete visibility and control over your industrial processes. Our SCADA solutions integrate real-time data acquisition, alarm management, historical trending, and reporting into a unified platform accessible from control rooms and mobile devices.',
        image: '/assets/scada-development.jpg',
      },
      {
        id: 'hmi-design',
        heading: 'HMI DESIGN',
        body: 'Our HMI design philosophy prioritizes operator efficiency and situational awareness. We create intuitive, responsive interfaces that present critical information clearly and enable rapid response to process deviations. All designs follow ISA-101 standards for optimal usability.',
        features: [
          'Context-sensitive navigation',
          'Alarm prioritization and filtering',
          'Real-time process visualization',
          'Historical data trending',
          'Multi-language support',
          'Responsive design for various screen sizes',
        ],
      },
      {
        id: 'commissioning',
        heading: 'COMMISSIONING & SUPPORT',
        body: 'Our commissioning process ensures that every system we deliver performs to specification from day one. We provide comprehensive Factory Acceptance Testing (FAT), Site Acceptance Testing (SAT), operator training, and ongoing technical support.',
      },
    ],
    faqs: [
      { question: 'WHAT PROGRAMMING LANGUAGES DO YOU USE?', answer: 'We follow IEC 61131-3 standards and use all five languages: Ladder Diagram (LD), Structured Text (ST), Function Block Diagram (FBD), Sequential Function Chart (SFC), and Instruction List (IL). Language selection depends on application requirements.' },
      { question: 'DO YOU DEVELOP CUSTOM SCADA SOLUTIONS?', answer: 'Yes, we develop custom SCADA applications using platforms like Wonderware System Platform, WinCC, FactoryTalk View, and Ignition. We can also develop custom web-based dashboards for remote monitoring.' },
      { question: 'WHAT IS YOUR APPROACH TO HMI DESIGN?', answer: 'We follow ISA-101 standards and a user-centered design process. This includes operator interviews, task analysis, iterative prototyping, and usability testing to ensure optimal operator performance.' },
      { question: 'CAN YOU MIGRATE LEGACY SYSTEMS?', answer: 'Yes, we have extensive experience migrating legacy systems to modern platforms. We follow a phased approach to minimize downtime and ensure a smooth transition.' },
      { question: 'WHAT DOCUMENTATION DO YOU PROVIDE?', answer: 'We provide comprehensive documentation including functional design specifications, detailed design documents, test procedures, commissioning reports, operator manuals, and as-built drawings.' },
    ],
  },
  {
    slug: '/control-systems',
    title: 'CONTROL SYSTEMS',
    highlightedWord: 'SYSTEMS',
    subtitle: 'Complete control system design and integration from concept to commissioning, including DCS, PLC, and hybrid control architectures for complex industrial applications.',
    sidebarLinks: ['System Design', 'DCS Solutions', 'Safety Systems', 'Documentation'],
    subsections: [
      {
        id: 'system-design',
        heading: 'CONTROL SYSTEM DESIGN',
        body: 'We engineer control systems that form the intelligence layer of industrial automation. From single-loop controllers to distributed control systems managing thousands of I/O points, our designs prioritize reliability, maintainability, and scalability. Every design undergoes rigorous peer review and follows industry best practices.',
        image: '/assets/control-system-design.jpg',
      },
      {
        id: 'dcs-solutions',
        heading: 'DCS SOLUTIONS',
        body: 'Our Distributed Control System expertise covers leading platforms including ABB Ability, Siemens PCS 7, Honeywell Experion, and Yokogawa CENTUM. We design DCS architectures that provide centralized control with distributed intelligence, ensuring high availability and fault tolerance.',
        features: [
          'Redundant controller configurations',
          'Advanced process control (APC) integration',
          'Batch management and recipe control',
          'Asset management integration',
          'Cybersecurity hardening',
          'Lifecycle support and upgrades',
        ],
      },
      {
        id: 'safety-systems',
        heading: 'SAFETY SYSTEMS',
        body: 'Safety is paramount in industrial automation. We design and implement Safety Instrumented Systems (SIS) compliant with IEC 61508 and IEC 61511 standards. Our safety solutions include SIL verification, safety requirement specifications, and proof testing procedures.',
        features: [
          'SIL 1 through SIL 3 system design',
          'Safety requirement specification (SRS)',
          'Cause & effect matrix development',
          'Safety PLC programming',
          'Proof testing procedures',
          'Safety lifecycle management',
        ],
      },
      {
        id: 'documentation',
        heading: 'DOCUMENTATION',
        body: 'Comprehensive documentation is essential for system maintainability. We deliver complete documentation packages including functional design specifications, detailed design documents, I/O lists, cable schedules, commissioning procedures, and operator manuals.',
      },
    ],
    faqs: [
      { question: 'WHAT CONTROL SYSTEM PLATFORMS DO YOU SUPPORT?', answer: 'We support all major DCS platforms including ABB Ability, Siemens PCS 7, Honeywell Experion, and Yokogawa CENTUM. For PLC-based systems, we work with Siemens, Allen-Bradley, Schneider, and Mitsubishi.' },
      { question: 'HOW DO YOU ENSURE SYSTEM RELIABILITY?', answer: 'We implement redundant architectures, comprehensive testing protocols, fault-tolerant designs, and thorough commissioning procedures. All systems undergo FAT and SAT before handover.' },
      { question: 'WHAT SAFETY STANDARDS DO YOU FOLLOW?', answer: 'We follow IEC 61508 and IEC 61511 for safety instrumented systems, IEC 62443 for cybersecurity, and industry-specific standards as required.' },
      { question: 'DO YOU OFFER TRAINING SERVICES?', answer: 'Yes, we provide comprehensive training programs for operators, maintenance personnel, and engineers. Training can be conducted on-site or at our facility in Dubai Silicon Oasis.' },
      { question: 'WHAT IS YOUR DESIGN METHODOLOGY?', answer: 'We follow a structured V-model approach: requirements analysis, functional design, detailed design, implementation, testing, commissioning, and handover. Each phase has defined deliverables and review gates.' },
    ],
  },
  {
    slug: '/electrical-systems',
    title: 'ELECTRICAL SYSTEMS',
    highlightedWord: 'SYSTEMS',
    subtitle: 'Comprehensive electrical system design, installation, and safety compliance ensuring reliable power distribution and protection for industrial facilities.',
    sidebarLinks: ['Electrical Design', 'Safety Compliance', 'Power Distribution', 'Installation'],
    subsections: [
      {
        id: 'electrical-design',
        heading: 'ELECTRICAL SYSTEM DESIGN',
        body: 'Our electrical engineering team designs power distribution systems, motor control centers, and instrumentation networks that form the physical infrastructure of automation systems. We ensure all designs comply with local electrical codes (DEWA, ADDC) and international standards (IEC, NEC).',
        image: '/assets/electrical-design.jpg',
      },
      {
        id: 'safety-compliance',
        heading: 'SAFETY COMPLIANCE',
        body: 'Electrical safety is non-negotiable in industrial environments. We implement comprehensive safety measures including arc flash analysis, short circuit studies, protective device coordination, and grounding system design to ensure personnel safety and equipment protection.',
        features: [
          'Arc flash hazard analysis',
          'Short circuit and coordination studies',
          'Grounding system design',
          'Electrical safety audits',
          'NFPA 70E compliance',
          'Lockout/tagout procedure development',
        ],
      },
      {
        id: 'power-distribution',
        heading: 'POWER DISTRIBUTION',
        body: 'We design reliable power distribution systems from utility connection to final loads. Our designs incorporate redundancy, power quality management, and energy monitoring to ensure uninterrupted operations and optimal energy efficiency.',
      },
      {
        id: 'installation',
        heading: 'INSTALLATION & COMMISSIONING',
        body: 'Our field services team executes electrical installations with precision and safety. We manage cable routing, termination, testing, and commissioning to deliver systems that perform reliably in harsh industrial environments.',
        image: '/assets/electrical-installation.jpg',
      },
    ],
    faqs: [
      { question: 'WHAT ELECTRICAL CODES DO YOU FOLLOW?', answer: 'We design in accordance with IEC standards, NEC (NFPA 70), NFPA 70E, and local UAE electrical regulations (DEWA, ADDC requirements). All designs are reviewed for code compliance.' },
      { question: 'DO YOU PERFORM ARC FLASH STUDIES?', answer: 'Yes, arc flash hazard analysis is a standard part of our electrical safety services. We provide incident energy calculations, arc flash boundary determination, and PPE requirements for all electrical equipment.' },
      { question: 'CAN YOU DESIGN EXPLOSION-PROOF SYSTEMS?', answer: 'Yes, we have extensive experience designing electrical systems for hazardous areas (ATEX/IECEx zones). This includes explosion-proof enclosures, intrinsically safe circuits, and pressurized systems.' },
      { question: 'WHAT TYPES OF MOTOR CONTROL DO YOU DESIGN?', answer: 'We design across the full spectrum: direct-on-line starters, soft starters, variable frequency drives (VFD), servo drives, and high-voltage motor control centers (MCC).' },
      { question: 'DO YOU PROVIDE AS-BUILT DOCUMENTATION?', answer: 'Yes, comprehensive as-built documentation including single-line diagrams, panel layouts, cable schedules, termination diagrams, and testing certificates is provided for every project.' },
    ],
  },
  {
    slug: '/industrial-networking',
    title: 'INDUSTRIAL NETWORKING',
    highlightedWord: 'NETWORKING',
    subtitle: 'Secure industrial network design and implementation with robust cybersecurity measures to protect critical infrastructure from emerging digital threats.',
    sidebarLinks: ['Network Design', 'Cybersecurity', 'Protocols', 'Maintenance'],
    subsections: [
      {
        id: 'network-design',
        heading: 'NETWORK DESIGN',
        body: 'Industrial networks form the nervous system of modern automation. We design robust network architectures using industrial Ethernet, PROFINET, EtherNet/IP, and other fieldbus protocols. Our designs ensure deterministic communication, real-time performance, and seamless integration between OT and IT systems.',
        features: [
          'Industrial Ethernet architecture',
          'PROFINET/ EtherNet/IP design',
          'Network segmentation and VLAN configuration',
          'Redundant network topologies',
          'Wireless industrial networks',
          'OT/IT convergence solutions',
        ],
      },
      {
        id: 'cybersecurity',
        heading: 'INDUSTRIAL CYBERSECURITY',
        body: 'Protecting critical infrastructure from cyber threats is essential. We implement defense-in-depth cybersecurity strategies following IEC 62443 and NIST CSF frameworks. Our solutions include network segmentation, intrusion detection, access control, and security monitoring.',
        image: '/assets/industrial-cybersecurity.jpg',
      },
      {
        id: 'protocols',
        heading: 'INDUSTRIAL PROTOCOLS',
        body: 'We are proficient in all major industrial communication protocols and can design multi-protocol gateway solutions for seamless interoperability between different vendor systems.',
        features: [
          'Modbus TCP/RTU',
          'PROFIBUS/PROFINET',
          'EtherNet/IP and DeviceNet',
          'OPC UA/DA',
          'MQTT and REST APIs',
          'Serial communications (RS-232/485)',
        ],
      },
      {
        id: 'maintenance',
        heading: 'NETWORK MAINTENANCE',
        body: 'Ongoing network maintenance ensures long-term reliability and security. We provide network health monitoring, performance optimization, firmware management, and periodic security audits.',
      },
    ],
    faqs: [
      { question: 'WHAT INDUSTRIAL PROTOCOLS DO YOU SUPPORT?', answer: 'We support all major protocols: PROFINET, EtherNet/IP, Modbus TCP/RTU, PROFIBUS, OPC UA, MQTT, and more. We also implement protocol gateways for heterogeneous network environments.' },
      { question: 'HOW DO YOU SECURE INDUSTRIAL NETWORKS?', answer: 'We implement defense-in-depth strategies: network segmentation, industrial firewalls, intrusion detection systems, access control, encrypted communications, and regular security audits following IEC 62443.' },
      { question: 'CAN YOU INTEGRATE OT AND IT NETWORKS?', answer: 'Yes, OT/IT convergence is a key capability. We design secure architectures that enable data flow between operational and enterprise systems while maintaining security boundaries.' },
      { question: 'WHAT NETWORK TOPOLOGIES DO YOU RECOMMEND?', answer: 'Topology selection depends on requirements. We typically recommend ring topologies with redundancy protocols (MRP, PRP) for critical applications, and star topologies for less critical areas.' },
      { question: 'DO YOU OFFER NETWORK MONITORING SERVICES?', answer: 'Yes, we implement network monitoring solutions using industrial network management tools that provide real-time visibility into network health, device status, and communication performance.' },
    ],
  },
  {
    slug: '/iot-solutions',
    title: 'IoT SOLUTIONS',
    highlightedWord: 'SOLUTIONS',
    subtitle: 'Smart IoT solutions and Industry 4.0 integration that transform traditional manufacturing into connected, data-driven smart factories.',
    sidebarLinks: ['Smart Manufacturing', 'Predictive Maintenance', 'Digital Twins', 'Cloud Integration'],
    subsections: [
      {
        id: 'smart-manufacturing',
        heading: 'SMART MANUFACTURING',
        body: 'Industry 4.0 is transforming manufacturing through interconnected systems, real-time analytics, and intelligent automation. Our smart manufacturing solutions integrate sensors, edge computing, and cloud platforms to create connected production environments that adapt and optimize autonomously.',
        image: '/assets/smart-manufacturing.jpg',
      },
      {
        id: 'predictive-maintenance',
        heading: 'PREDICTIVE MAINTENANCE',
        body: 'Move from reactive to predictive maintenance with our IoT-enabled condition monitoring solutions. By analyzing vibration, temperature, and other operational data in real-time, we help you identify equipment degradation before it leads to failure.',
        features: [
          'Vibration analysis and monitoring',
          'Thermal imaging integration',
          'Oil analysis and lubrication monitoring',
          'Motor current signature analysis',
          'AI-powered failure prediction',
          'Maintenance scheduling optimization',
        ],
      },
      {
        id: 'digital-twins',
        heading: 'DIGITAL TWINS',
        body: 'Digital twins create virtual replicas of physical assets and processes, enabling simulation, optimization, and predictive analysis. We develop digital twin solutions that mirror your production lines, allowing you to test changes virtually before implementing them physically.',
      },
      {
        id: 'cloud-integration',
        heading: 'CLOUD INTEGRATION',
        body: 'We integrate industrial systems with cloud platforms including AWS IoT, Microsoft Azure IoT, and Siemens MindSphere. Our cloud solutions enable remote monitoring, centralized data analytics, and scalable computing for complex industrial applications.',
        image: '/assets/cloud-integration.jpg',
      },
    ],
    faqs: [
      { question: 'WHAT IS INDUSTRY 4.0 AND HOW CAN IT BENEFIT MY BUSINESS?', answer: 'Industry 4.0 refers to the fourth industrial revolution characterized by interconnected systems, real-time data, and intelligent automation. Benefits include increased productivity, reduced downtime, improved quality, and data-driven decision making.' },
      { question: 'WHAT SENSOR TECHNOLOGIES DO YOU WORK WITH?', answer: 'We work with a wide range: vibration sensors, temperature sensors, pressure transmitters, flow meters, level sensors, energy monitors, and environmental sensors. We select the optimal sensors for each application.' },
      { question: 'HOW DO YOU HANDLE DATA SECURITY FOR CLOUD-CONNECTED SYSTEMS?', answer: 'We implement end-to-end encryption, secure authentication, VPN tunnels, and edge computing to minimize cloud exposure. All solutions comply with IEC 62443 and organizational cybersecurity policies.' },
      { question: 'WHAT CLOUD PLATFORMS DO YOU INTEGRATE WITH?', answer: 'We have expertise with AWS IoT, Microsoft Azure IoT, Google Cloud IoT, Siemens MindSphere, and private cloud deployments. Platform selection depends on your existing infrastructure and requirements.' },
      { question: 'WHAT ROI CAN I EXPECT FROM IoT IMPLEMENTATION?', answer: 'Typical ROI includes 20-40% reduction in maintenance costs, 15-25% improvement in OEE, 10-20% energy savings, and significant reduction in unplanned downtime. We help establish KPIs to measure success.' },
    ],
  },
];
