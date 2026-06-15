import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Environment, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

/* ------------------------------------------------------------------ */
/*  Procedural gear shape – supports spokes, hub, and inner cutouts   */
/* ------------------------------------------------------------------ */

function createGearShape(
  teeth: number,
  outerRadius: number,
  toothDepth: number,
  spokeCount: number,
  hubRadius: number,
) {
  const shape = new THREE.Shape();
  const innerRadius = outerRadius - toothDepth;
  const toothWidth = (Math.PI * 2) / teeth;
  const toothTop = toothWidth * 0.32;

  // Build tooth profile
  for (let i = 0; i < teeth; i++) {
    const angle = (i / teeth) * Math.PI * 2;
    const a0 = angle - toothWidth / 2;
    const a1 = a0 + (toothWidth - toothTop) / 2;
    const a2 = a1 + toothTop;
    const a3 = a0 + toothWidth;

    if (i === 0) {
      shape.moveTo(Math.cos(a0) * innerRadius, Math.sin(a0) * innerRadius);
    }

    // Rise to tooth tip
    shape.lineTo(Math.cos(a1) * outerRadius, Math.sin(a1) * outerRadius);
    // Tooth top flat
    shape.lineTo(Math.cos(a2) * outerRadius, Math.sin(a2) * outerRadius);
    // Fall back to inner
    shape.lineTo(Math.cos(a3) * innerRadius, Math.sin(a3) * innerRadius);
  }

  // Center hole
  const centerHole = new THREE.Path();
  centerHole.absarc(0, 0, hubRadius * 0.55, 0, Math.PI * 2, true);
  shape.holes.push(centerHole);

  // Spoke cutouts – create lightweight look
  if (spokeCount > 0 && innerRadius > hubRadius + 0.4) {
    const midRadius = (innerRadius + hubRadius) / 2;
    const cutoutRadius = (innerRadius - hubRadius) * 0.28;
    for (let i = 0; i < spokeCount; i++) {
      const angle = (i / spokeCount) * Math.PI * 2;
      const cx = Math.cos(angle) * midRadius;
      const cy = Math.sin(angle) * midRadius;
      const hole = new THREE.Path();
      hole.absarc(cx, cy, cutoutRadius, 0, Math.PI * 2, true);
      shape.holes.push(hole);
    }
  }

  return shape;
}

/* ------------------------------------------------------------------ */
/*  Single gear mesh                                                  */
/* ------------------------------------------------------------------ */

interface GearMeshProps {
  teeth?: number;
  outerRadius?: number;
  toothDepth?: number;
  thickness?: number;
  spokeCount?: number;
  hubRadius?: number;
  color?: string;
  emissive?: string;
  emissiveIntensity?: number;
  rotationSpeed?: number;
  rotationOffset?: number;
  scrollProgress?: React.MutableRefObject<number>;
  reverse?: boolean;
}

function GearMesh({
  teeth = 18,
  outerRadius = 2,
  toothDepth = 0.25,
  thickness = 0.45,
  spokeCount = 5,
  hubRadius = 0.6,
  color = '#D4A017',
  emissive = '#FFB800',
  emissiveIntensity = 0.15,
  rotationSpeed = 1,
  rotationOffset = 0,
  scrollProgress,
  reverse = false,
}: GearMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    const shape = createGearShape(teeth, outerRadius, toothDepth, spokeCount, hubRadius);

    const extrudeSettings: THREE.ExtrudeGeometryOptions = {
      depth: thickness,
      bevelEnabled: true,
      bevelSegments: 4,
      bevelSize: 0.04,
      bevelThickness: 0.04,
    };

    const geo = new THREE.ExtrudeGeometry(shape, extrudeSettings);
    geo.center();
    return geo;
  }, [teeth, outerRadius, toothDepth, thickness, spokeCount, hubRadius]);

  useFrame((_state, delta) => {
    if (!meshRef.current) return;
    const dir = reverse ? -1 : 1;

    if (scrollProgress) {
      // Scroll-driven rotation
      const target = scrollProgress.current * Math.PI * 4 * dir + rotationOffset;
      meshRef.current.rotation.z +=
        (target - meshRef.current.rotation.z) * 0.08;
    } else {
      // Continuous rotation
      meshRef.current.rotation.z += delta * rotationSpeed * dir;
    }
  });

  return (
    <mesh ref={meshRef} geometry={geometry} castShadow receiveShadow>
      <meshPhysicalMaterial
        color={color}
        emissive={emissive}
        emissiveIntensity={emissiveIntensity}
        metalness={0.92}
        roughness={0.18}
        clearcoat={0.8}
        clearcoatRoughness={0.1}
        envMapIntensity={2}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  Decorative ring around the main gear                              */
/* ------------------------------------------------------------------ */

function GlowRing({ radius, scrollProgress }: { radius: number; scrollProgress?: React.MutableRefObject<number> }) {
  const ringRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    return new THREE.TorusGeometry(radius + 0.15, 0.025, 16, 128);
  }, [radius]);

  useFrame(() => {
    if (!ringRef.current || !scrollProgress) return;
    ringRef.current.rotation.z = scrollProgress.current * Math.PI * 4;
  });

  return (
    <mesh ref={ringRef} geometry={geometry}>
      <meshPhysicalMaterial
        color="#FFD700"
        emissive="#FFD700"
        emissiveIntensity={0.6}
        metalness={1}
        roughness={0.1}
        transparent
        opacity={0.7}
      />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  Outer dashed ring (tech feel)                                     */
/* ------------------------------------------------------------------ */

function TechRing({ radius }: { radius: number }) {
  const ringRef = useRef<THREE.Mesh>(null);

  const geometry = useMemo(() => {
    return new THREE.RingGeometry(radius, radius + 0.03, 128);
  }, [radius]);

  useFrame((_state) => {
    if (!ringRef.current) return;
    ringRef.current.rotation.z += 0.001;
  });

  return (
    <mesh ref={ringRef} geometry={geometry}>
      <meshBasicMaterial
        color="#4080ff"
        transparent
        opacity={0.15}
        side={THREE.DoubleSide}
      />
    </mesh>
  );
}

/* ------------------------------------------------------------------ */
/*  Scene – composes all gears                                        */
/* ------------------------------------------------------------------ */

interface GearSceneProps {
  teeth?: number;
  rotationSpeed?: number;
  mouseReactive?: boolean;
  scrollProgress?: React.MutableRefObject<number>;
  multiGear?: boolean;
}

function GearScene({
  teeth = 18,
  rotationSpeed = 0.5,
  mouseReactive = false,
  scrollProgress,
  multiGear = true,
}: GearSceneProps) {
  const groupRef = useRef<THREE.Group>(null);
  const mouseRef = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    if (!groupRef.current || !mouseReactive) return;
    const tx = (state.pointer.x * Math.PI) / 10;
    const ty = (state.pointer.y * Math.PI) / 10;
    mouseRef.current.x += (tx - mouseRef.current.x) * 0.04;
    mouseRef.current.y += (ty - mouseRef.current.y) * 0.04;
    groupRef.current.rotation.y = mouseRef.current.x;
    groupRef.current.rotation.x = mouseRef.current.y;
  });

  return (
    <group ref={groupRef}>
      {/* Main gear */}
      <GearMesh
        teeth={teeth}
        outerRadius={2}
        toothDepth={0.28}
        thickness={0.5}
        spokeCount={5}
        hubRadius={0.65}
        rotationSpeed={rotationSpeed}
        scrollProgress={scrollProgress}
      />

      {/* Glow ring around main gear */}
      <GlowRing radius={2} scrollProgress={scrollProgress} />
      <TechRing radius={2.5} />

      {/* Secondary gear – top-right, smaller, counter-rotating */}
      {multiGear && (
        <>
          <group position={[2.85, 1.8, -0.2]}>
            <GearMesh
              teeth={10}
              outerRadius={1.1}
              toothDepth={0.2}
              thickness={0.35}
              spokeCount={3}
              hubRadius={0.35}
              color="#C0980A"
              emissive="#FFB800"
              emissiveIntensity={0.1}
              rotationSpeed={rotationSpeed * (teeth / 10)}
              rotationOffset={Math.PI / 10}
              scrollProgress={scrollProgress}
              reverse
            />
          </group>

          {/* Tertiary gear – bottom-left, smallest */}
          <group position={[-2.6, -1.6, -0.15]}>
            <GearMesh
              teeth={8}
              outerRadius={0.85}
              toothDepth={0.18}
              thickness={0.3}
              spokeCount={0}
              hubRadius={0.3}
              color="#B8860B"
              emissive="#FFA500"
              emissiveIntensity={0.08}
              rotationSpeed={rotationSpeed * (teeth / 8)}
              rotationOffset={Math.PI / 8}
              scrollProgress={scrollProgress}
              reverse
            />
          </group>
        </>
      )}
    </group>
  );
}

/* ------------------------------------------------------------------ */
/*  Public Canvas wrapper                                             */
/* ------------------------------------------------------------------ */

interface Gear3DProps {
  className?: string;
  size?: number;
  teeth?: number;
  rotationSpeed?: number;
  mouseReactive?: boolean;
  scrollProgress?: React.MutableRefObject<number>;
  multiGear?: boolean;
}

export default function Gear3D({
  className = '',
  size = 300,
  teeth = 18,
  rotationSpeed = 0.5,
  mouseReactive = false,
  scrollProgress,
  multiGear = true,
}: Gear3DProps) {
  return (
    <div className={className} style={{ width: size, height: size }}>
      <Canvas
        camera={{ position: [0, 0, 7], fov: 40 }}
        dpr={[1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ background: 'transparent' }}
      >
        <ambientLight intensity={0.12} color="#1a2040" />
        <pointLight position={[6, 6, 6]} intensity={100} color="#fff8e7" distance={30} />
        <pointLight position={[-4, -2, 4]} intensity={50} color="#4080ff" distance={20} />
        <pointLight position={[0, 0, 10]} intensity={30} color="#ffffff" distance={25} />
        <spotLight
          position={[3, 8, 5]}
          angle={0.4}
          penumbra={0.8}
          intensity={60}
          color="#FFD700"
          castShadow
        />

        <GearScene
          teeth={teeth}
          rotationSpeed={rotationSpeed}
          mouseReactive={mouseReactive}
          scrollProgress={scrollProgress}
          multiGear={multiGear}
        />

        <ContactShadows
          position={[0, -3.2, 0]}
          opacity={0.25}
          scale={10}
          blur={2.5}
          far={5}
        />

        <Environment preset="city" environmentIntensity={0.8} />
      </Canvas>
    </div>
  );
}
