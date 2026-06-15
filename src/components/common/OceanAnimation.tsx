import { useRef, useEffect } from "react";

export default function OceanAnimation({ className = "" }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let width: number, height: number;
    let time = 0;

    function resize() {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }

    window.addEventListener("resize", resize);
    resize();

    function hash(x: number, y: number) {
      return Math.abs(Math.sin(x * 12.9898 + y * 78.233) * 43758.5453123 % 1);
    }

    function noise(x: number, y: number) {
      const ix = Math.floor(x), iy = Math.floor(y);
      const fx = x - ix, fy = y - iy;
      const a = hash(ix, iy), b = hash(ix + 1, iy);
      const c = hash(ix, iy + 1), d = hash(ix + 1, iy + 1);
      const ux = fx * fx * (3 - 2 * fx), uy = fy * fy * (3 - 2 * fy);
      return (1 - ux) * (1 - uy) * a + ux * (1 - uy) * b + (1 - ux) * uy * c + ux * uy * d;
    }

    function fbm(x: number, y: number, octaves = 3) {
      let value = 0, amp = 0.5, freq = 1.0;
      for (let i = 0; i < octaves; i++) {
        value += amp * noise(x * freq, y * freq);
        freq *= 2.1;
        amp *= 0.5;
      }
      return value;
    }

    function animate() {
      ctx!.fillStyle = "rgba(0, 5, 20, 0.2)";
      ctx!.fillRect(0, 0, width, height);

      const resolution = 15;
      const cols = Math.ceil(width / resolution);
      const rows = Math.ceil(height / resolution);

      time += 0.005;

      for (let i = 0; i <= cols; i++) {
        for (let j = 0; j <= rows; j++) {
          const x = i * resolution;
          const y = j * resolution;

          const wave = fbm(i * 0.1 + time, j * 0.1 + time);
          const intensity = wave * 255;

          const g = Math.floor(intensity * 0.6);
          const b = Math.floor(intensity * 1.5 + 50);

          ctx!.fillStyle = `rgb(0, ${g}, ${b})`;
          ctx!.fillRect(x, y, resolution - 1, resolution - 1);
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas ref={canvasRef} className={`w-full h-full ${className}`} />
  );
}
