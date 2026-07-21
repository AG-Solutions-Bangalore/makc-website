// import { useState, useEffect, useRef } from "react";
// import { motion, useSpring, AnimatePresence } from "framer-motion";
// import { useResponsive } from "./hooks";
// import type { HotspotType } from "./types";
// import Hotspot from "./Hotspot";
// import Connector from "./Connector";
// import Label from "./Label";
// import {
//   Lightbulb,
//   Video,
//   ShieldCheck,
//   ToggleLeft,
//   Sliders,
//   ShieldAlert,
//   Blinds,
// } from "lucide-react";

// interface SmartHomeProps {
//   imageSrc: string;
//   imageAlt?: string;
//   hotspots?: HotspotType[];
//   className?: string;
// }

// const defaultHotspots: HotspotType[] = [
//   {
//     id: "curtains",
//     label: "Curtains Automation",
//     anchor: { x: 73, y: 26 },
//     labelPos: { x: 86, y: 15 },
//     icon: Blinds,
//   },
//   {
//     id: "lighting",
//     label: "Lightings",
//     anchor: { x: 71, y: 34 },
//     labelPos: { x: 84, y: 40 },
//     icon: Lightbulb,
//   },
//   {
//     id: "switches",
//     label: "Smart Switches",
//     anchor: { x: 83, y: 55 },
//     labelPos: { x: 92, y: 46 },
//     icon: ToggleLeft,
//   },
//   {
//     id: "door",
//     label: "Door Automation",
//     anchor: { x: 72, y: 64 },
//     labelPos: { x: 78, y: 58 },
//     icon: Sliders,
//   },
//   {
//     id: "cctv",
//     label: "CCTV",
//     anchor: { x: 87, y: 65 },
//     labelPos: { x: 95, y: 62 },
//     icon: Video,
//   },
//   {
//     id: "security",
//     label: "Security",
//     anchor: { x: 71, y: 73 },
//     labelPos: { x: 78, y: 75 },
//     icon: ShieldCheck,
//   },
//   {
//     id: "gate",
//     label: "Gate Automation",
//     anchor: { x: 83, y: 78 },
//     labelPos: { x: 93, y: 75 },
//     icon: ShieldAlert,
//   },
// ];

// export default function SmartHome({
//   imageSrc,
//   imageAlt = "Interactive Smart Home Visualizer",
//   hotspots = defaultHotspots,
//   className = "",
// }: SmartHomeProps) {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const { isMobile, isTablet } = useResponsive();

//   // Interaction states
//   const [hoveredId, setHoveredId] = useState<string | null>(null);
//   const [activeId, setActiveId] = useState<string | null>(null);
//   const [isInView, setIsInView] = useState(false);

//   // Parallax positions
//   const [mousePos, setMousePos] = useState({ x: 0, y: 0, nx: 0, ny: 0 });
//   const [isHovering, setIsHovering] = useState(false);

//   // Framer Motion Springs for smooth Parallax
//   const springConfig = { stiffness: 80, damping: 22 };
//   const parallaxX = useSpring(0, springConfig);
//   const parallaxY = useSpring(0, springConfig);

//   const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
//     if (isMobile) return;
//     const rect = e.currentTarget.getBoundingClientRect();
//     const x = e.clientX - rect.left;
//     const y = e.clientY - rect.top;

//     // Normalized values: -0.5 to 0.5
//     const nx = x / rect.width - 0.5;
//     const ny = y / rect.height - 0.5;

//     setMousePos({ x, y, nx, ny });
//   };

//   useEffect(() => {
//     if (!isMobile && isHovering) {
//       // Parallax effect: image translates in opposite direction of cursor
//       parallaxX.set(mousePos.nx * -18);
//       parallaxY.set(mousePos.ny * -18);
//     } else {
//       parallaxX.set(0);
//       parallaxY.set(0);
//     }
//   }, [mousePos, isHovering, isMobile, parallaxX, parallaxY]);

//   // Handle active states on click
//   const handleHotspotClick = (id: string) => {
//     setActiveId(activeId === id ? null : id);
//   };

//   return (
//     <motion.div
//       ref={containerRef}
//       onViewportEnter={() => setIsInView(true)}
//       viewport={{ once: true, amount: 0.15 }}
//       onMouseMove={handleMouseMove}
//       onMouseEnter={() => !isMobile && setIsHovering(true)}
//       onMouseLeave={() => {
//         setIsHovering(false);
//         setHoveredId(null);
//       }}
//       className={`relative w-full aspect-video rounded-3xl overflow-hidden group border border-white/10 shadow-2xl select-none ${className}`}
//     >
//       {/* Background Image Container with Parallax translation */}
//       <motion.div
//         style={{
//           x: parallaxX,
//           y: parallaxY,
//           scale: 1.05, // slightly oversized to cover parallax movements
//         }}
//         className="absolute inset-0 w-full h-full"
//       >
//         <img
//           src={imageSrc}
//           alt={imageAlt}
//           loading="lazy"
//           className="w-full h-full object-cover object-center pointer-events-none"
//         />
//       </motion.div>

//       {/* Spotlight effect overlay centered on cursor */}
//       {!isMobile && isHovering && (
//         <div className="absolute inset-0 pointer-events-none mix-blend-screen opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
//       )}

//       {/* Shared SVG Connector Layer */}
//       {isInView && !isMobile && (
//         <svg
//           className="absolute inset-0 w-full h-full pointer-events-none z-20"
//           viewBox="0 0 100 100"
//           preserveAspectRatio="none"
//         >
//           {hotspots.map((hotspot, idx) => (
//             <Connector
//               key={`line-${hotspot.id}`}
//               anchor={hotspot.anchor}
//               labelPos={hotspot.labelPos}
//               isHovered={hoveredId === hotspot.id}
//               isActive={activeId === hotspot.id}
//               color={hotspot.connectorColor}
//               delay={idx * 0.18} // sequential staggered reveal animation
//             />
//           ))}
//         </svg>
//       )}

//       {/* Interactive Hotspots and Labels Layer */}
//       {isInView && (
//         <div className="absolute inset-0 w-full h-full z-30">
//           {hotspots.map((hotspot, idx) => {
//             const isHovered = hoveredId === hotspot.id;
//             const isActive = activeId === hotspot.id;
//             const delay = idx * 0.18; // same staggered delay

//             return (
//               <div key={hotspot.id}>
//                 {/* Anchor Dot */}
//                 <Hotspot
//                   id={hotspot.id}
//                   anchor={hotspot.anchor}
//                   isHovered={isHovered}
//                   isActive={isActive}
//                   onHoverStart={() => !isMobile && setHoveredId(hotspot.id)}
//                   onHoverEnd={() => !isMobile && setHoveredId(null)}
//                   onClick={() => handleHotspotClick(hotspot.id)}
//                   index={idx}
//                   delay={delay}
//                   isMobile={isMobile}
//                 />

//                 {/* Floating Labels (Hidden on Mobile) */}
//                 {!isMobile && (
//                   <Label
//                     label={hotspot.label}
//                     labelPos={hotspot.labelPos}
//                     icon={hotspot.icon}
//                     isHovered={isHovered}
//                     isActive={isActive}
//                     onHoverStart={() => setHoveredId(hotspot.id)}
//                     onHoverEnd={() => setHoveredId(null)}
//                     onClick={() => handleHotspotClick(hotspot.id)}
//                     delay={delay}
//                     isTablet={isTablet}
//                   />
//                 )}

//                 {/* Mobile Tooltip (Popup on Tap) */}
//                 {isMobile && (
//                   <AnimatePresence>
//                     {isActive && (
//                       <motion.div
//                         initial={{ opacity: 0, y: 10, scale: 0.9 }}
//                         animate={{ opacity: 1, y: -10, scale: 1 }}
//                         exit={{ opacity: 0, y: 10, scale: 0.9 }}
//                         style={{
//                           position: "absolute",
//                           left: `${hotspot.anchor.x}%`,
//                           top: `${hotspot.anchor.y}%`,
//                           transform: "translate(-50%, -100%)",
//                           zIndex: 100,
//                         }}
//                         className="bg-black/90 border border-[#d4af37] backdrop-blur-md px-3.5 py-1.5 rounded-xl flex items-center gap-2 text-white text-xs shadow-lg whitespace-nowrap"
//                       >
//                         <hotspot.icon className="h-3.5 w-3.5 text-[#d4af37]" />
//                         <span className="font-semibold uppercase tracking-wider">
//                           {hotspot.label}
//                         </span>
//                       </motion.div>
//                     )}
//                   </AnimatePresence>
//                 )}
//               </div>
//             );
//           })}
//         </div>
//       )}
//     </motion.div>
//   );
// }
