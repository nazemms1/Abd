import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Button,
  Group,
  Stack,
  ActionIcon,
} from "@mantine/core";
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandGitlab,
} from "@tabler/icons-react";
import { personalInfo } from "../data/portfolio";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      delay: i * 0.13,
      ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
    },
  }),
};

const titles = ["AI Engineer", "Backend Developer"];

export default function Hero() {
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout: ReturnType<typeof setTimeout>;
    if (typing) {
      if (displayed.length < current.length) {
        timeout = setTimeout(
          () => setDisplayed(current.slice(0, displayed.length + 1)),
          60,
        );
      } else {
        timeout = setTimeout(() => setTyping(false), 1800);
      }
    } else {
      if (displayed.length > 0) {
        timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 35);
      } else {
        setTitleIndex((i) => (i + 1) % titles.length);
        setTyping(true);
      }
    }
    return () => clearTimeout(timeout);
  }, [displayed, typing, titleIndex]);

  return (
    <section
      id="hero"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "relative",
        overflow: "hidden",
        padding: 0,
      }}
    >
      <motion.div
        style={{
          position: "absolute",
          top: -200,
          left: "50%",
          transform: "translateX(-50%)",
          width: 800,
          height: 800,
          background:
            "radial-gradient(circle, rgba(11,99,229,0.1) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
        animate={{ scale: [1, 1.25, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{
          position: "absolute",
          bottom: "-150px",
          right: "-100px",
          width: "500px",
          height: "500px",
          background:
            "radial-gradient(circle, rgba(11,99,229,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 0,
        }}
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{
          duration: 11,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      <Container
        size="lg"
        style={{ position: "relative", zIndex: 1, width: "100%" }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            alignItems: "center",
            gap: "2rem",
          }}
        >
          <Stack gap={0}>
            <motion.div
              custom={0}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Group gap="xs" mb="lg">
                <motion.div
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    background: "#0b63e5",
                    boxShadow: "0 0 8px rgba(11,99,229,0.8)",
                  }}
                />
                <Text
                  fz="sm"
                  ff="monospace"
                  c="brand.4"
                  style={{ letterSpacing: "0.08em" }}
                >
                  Available for opportunities
                </Text>
              </Group>
            </motion.div>

            <motion.div
              custom={1}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Title
                order={1}
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
                  fontWeight: 800,
                  lineHeight: 1.08,
                  letterSpacing: "-0.03em",
                  marginBottom: "0.3rem",
                }}
              >
                {personalInfo.name.split(" ")[0]}{" "}
                <span
                  style={{
                    background:
                      "linear-gradient(135deg, #0b63e5 0%, #5f97f1 60%, #93baf6 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  {personalInfo.name.split(" ").slice(1).join(" ")}
                </span>
              </Title>
            </motion.div>

            <motion.div
              custom={2}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Text
                mb="lg"
                fw={500}
                style={{
                  fontSize: "clamp(1rem, 2.2vw, 1.35rem)",
                  letterSpacing: "-0.01em",
                  color: "var(--mantine-color-dark-1)",
                  minHeight: "2rem",
                }}
              >
                {displayed}
                <motion.span
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 0.8, repeat: Infinity }}
                  style={{ color: "#0b63e5", marginLeft: 2 }}
                >
                  |
                </motion.span>
              </Text>
            </motion.div>

            <motion.div
              custom={3}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Text c="dimmed" fz="md" maw={480} mb={40} lh={1.8}>
                {personalInfo.bio}
              </Text>
            </motion.div>

            <motion.div
              custom={4}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Group gap="md" mb={40} wrap="wrap">
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    component="a"
                    href="#projects"
                    size="md"
                    radius="md"
                    color="brand"
                    style={{ boxShadow: "0 4px 20px rgba(11,99,229,0.35)" }}
                  >
                    View My Work
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Button
                    component="a"
                    href={`mailto:${personalInfo.email}`}
                    size="md"
                    variant="outline"
                    color="brand"
                    radius="md"
                  >
                    Get In Touch
                  </Button>
                </motion.div>
              </Group>
            </motion.div>

            <motion.div
              custom={5}
              initial="hidden"
              animate="visible"
              variants={fadeUp}
            >
              <Group gap="sm">
                {[
                  {
                    href: personalInfo.github,
                    icon: <IconBrandGithub size={20} />,
                    label: "GitHub",
                  },
                  {
                    href: personalInfo.linkedin,
                    icon: <IconBrandLinkedin size={20} />,
                    label: "LinkedIn",
                  },
                  {
                    href: personalInfo.gitlab,
                    icon: <IconBrandGitlab size={20} />,
                    label: "GitLab",
                  },
                ].map((s) => (
                  <motion.div
                    key={s.label}
                    whileHover={{ y: -3, scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ActionIcon
                      component="a"
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      variant="subtle"
                      color="gray"
                      size="lg"
                      aria-label={s.label}
                    >
                      {s.icon}
                    </ActionIcon>
                  </motion.div>
                ))}
              </Group>
            </motion.div>
          </Stack>

          <div
            style={{
              position: "relative",
              width: "100%",
              height: 460,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <BrainCanvas3D />
          </div>
        </div>
      </Container>
    </section>
  );
}

type Vec3 = { x: number; y: number; z: number };

type BrainNode = {
  ox: number;
  oy: number;
  oz: number;
  screenX: number;
  screenY: number;
  depth: number;
  pulse: number;
  size: number;
  alpha: number;
};

type Signal = { from: number; to: number; t: number; speed: number };

function distortBrain(sx: number, sy: number, sz: number): Vec3 {
  let x = sx,
    y = sy,
    z = sz;

  x *= 1.3;
  y *= 0.92;
  z *= 0.78;

  if (x > 0.2) {
    const f = Math.exp(-Math.pow((x - 0.55) * 1.6, 2));
    x += 0.16 * f;
    z += 0.07 * f * (sz > 0 ? 1 : 0.3);
  }

  if (x < -0.35) {
    const f = Math.exp(-Math.pow((x + 0.72) * 2.2, 2));
    x -= 0.13 * f;
    z += 0.04 * f;
  }

  if (Math.abs(y) > 0.3 && z < 0 && x > -0.4 && x < 0.5) {
    const f = Math.exp(-Math.pow((z + 0.45) * 2.5, 2));
    z -= 0.1 * Math.abs(sy) * f;
    y *= 1.0 + 0.08 * f;
  }

  if (z < -0.5) z *= 0.82;

  if (x > -0.1 && x < 0.4 && z > 0.3) {
    z += 0.06 * Math.exp(-Math.pow(x * 2, 2));
  }

  const freq1 = 8.8,
    freq2 = 11.5,
    freq3 = 7.2;
  const wx = 0.048 * Math.sin(x * freq1 + z * freq2) * Math.cos(y * freq3);
  const wz = 0.036 * Math.cos(z * freq2 - x * freq1) * Math.sin(y * freq1);
  const wy = 0.022 * Math.sin(y * freq3 + x * 6.5) * Math.cos(z * 9.0);
  x += wx;
  z += wz;
  y += wy;

  return { x, y, z };
}

function buildCloud(): { v: Vec3; size: number; alpha: number }[] {
  const pts: { v: Vec3; size: number; alpha: number }[] = [];

  const N = 380;
  for (let i = 0; i < N; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / N);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const v = distortBrain(
      Math.sin(phi) * Math.cos(theta),
      Math.sin(phi) * Math.sin(theta),
      Math.cos(phi),
    );
    pts.push({
      v,
      size: 1.2 + Math.random() * 1.8,
      alpha: 0.5 + Math.random() * 0.45,
    });
  }

  for (let i = 0; i < 90; i++) {
    const phi = Math.acos(1 - (2 * (i + 0.5)) / 90);
    const theta = Math.PI * (1 + Math.sqrt(5)) * i;
    const r = 0.38;
    const cx = -0.82,
      cz = -0.48;
    let bx = cx + r * Math.sin(phi) * Math.cos(theta) * 1.1;
    const by = r * Math.sin(phi) * Math.sin(theta) * 0.88;
    let bz = cz + r * Math.cos(phi) * 0.65;
    bx += 0.02 * Math.sin(bx * 24 + bz * 20);
    bz += 0.016 * Math.cos(bz * 22 - bx * 18);
    pts.push({
      v: { x: bx, y: by, z: bz },
      size: 0.9 + Math.random() * 1.3,
      alpha: 0.4 + Math.random() * 0.45,
    });
  }

  for (let ring = 0; ring < 6; ring++) {
    const t = ring / 5;
    for (let j = 0; j < 10; j++) {
      const angle = j * ((Math.PI * 2) / 10);
      const r = 0.1 - t * 0.02;
      pts.push({
        v: {
          x: 0.08 - t * 0.12,
          y: r * Math.cos(angle),
          z: -0.8 - t * 0.48,
        },
        size: 0.75 + Math.random() * 0.9,
        alpha: 0.3 + Math.random() * 0.35,
      });
    }
  }

  for (let i = 0; i < 80; i++) {
    const phi = Math.acos(2 * Math.random() - 1);
    const theta = Math.random() * Math.PI * 2;
    const r = 0.28 + Math.random() * 0.52;
    const v = distortBrain(
      r * Math.sin(phi) * Math.cos(theta),
      r * Math.sin(phi) * Math.sin(theta),
      r * Math.cos(phi),
    );
    pts.push({
      v,
      size: 0.65 + Math.random() * 1.0,
      alpha: 0.2 + Math.random() * 0.28,
    });
  }

  return pts;
}

function project(
  v: Vec3,
  rotY: number,
  rotX: number,
  cx: number,
  cy: number,
  scale: number,
): { px: number; py: number; depth: number } {
  const cosY = Math.cos(rotY),
    sinY = Math.sin(rotY);
  const rx = v.x * cosY - v.z * sinY;
  const rz = v.x * sinY + v.z * cosY;

  const cosX = Math.cos(rotX),
    sinX = Math.sin(rotX);
  const ry = v.y * cosX - rz * sinX;
  const rz2 = v.y * sinX + rz * cosX;

  const fov = 3.6;
  const zz = rz2 + fov;
  return {
    px: cx + (rx / zz) * scale,
    py: cy + (ry / zz) * scale,
    depth: rz2,
  };
}

function BrainCanvas3D() {
  useEffect(() => {
    const canvas = document.getElementById(
      "brain3d-canvas",
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const cloud = buildCloud();
    const nodeCount = cloud.length;

    const nodes: BrainNode[] = cloud.map((c) => ({
      ox: c.v.x,
      oy: c.v.y,
      oz: c.v.z,
      screenX: 0,
      screenY: 0,
      depth: 0,
      pulse: Math.random() * Math.PI * 2,
      size: c.size,
      alpha: c.alpha,
    }));

    const edges: [number, number, number][] = [];
    for (let i = 0; i < nodeCount; i++) {
      for (let j = i + 1; j < nodeCount; j++) {
        if (edges.length >= 1100) break;
        const d = Math.sqrt(
          (nodes[i].ox - nodes[j].ox) ** 2 +
            (nodes[i].oy - nodes[j].oy) ** 2 +
            (nodes[i].oz - nodes[j].oz) ** 2,
        );
        if (d < 0.29) edges.push([i, j, d]);
      }
    }

    const signals: Signal[] = [];

    let rotY = Math.PI / 2 - 0.18;
    let rotX = 0.1;

    let velY = 0;
    let velX = 0;

    let dragging = false;
    let lastX = 0;
    let lastY = 0;

    const onMouseDown = (e: MouseEvent) => {
      dragging = true;
      lastX = e.clientX;
      lastY = e.clientY;
      velY = 0;
      velX = 0;
      canvas.style.cursor = "grabbing";
    };
    const onMouseMove = (e: MouseEvent) => {
      if (!dragging) return;
      const dx = e.clientX - lastX;
      const dy = e.clientY - lastY;
      velY = dx * 0.007;
      velX = dy * 0.007;
      rotY += velY;
      rotX += velX;
      rotX = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, rotX));
      lastX = e.clientX;
      lastY = e.clientY;
    };
    const onMouseUp = () => {
      dragging = false;
      canvas.style.cursor = "grab";
    };

    const onTouchStart = (e: TouchEvent) => {
      dragging = true;
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
      velY = 0;
      velX = 0;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!dragging) return;
      e.preventDefault();
      const dx = e.touches[0].clientX - lastX;
      const dy = e.touches[0].clientY - lastY;
      velY = dx * 0.007;
      velX = dy * 0.007;
      rotY += velY;
      rotX += velX;
      rotX = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, rotX));
      lastX = e.touches[0].clientX;
      lastY = e.touches[0].clientY;
    };
    const onTouchEnd = () => {
      dragging = false;
    };

    canvas.style.cursor = "grab";
    canvas.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup", onMouseUp);
    canvas.addEventListener("touchstart", onTouchStart, { passive: false });
    canvas.addEventListener("touchmove", onTouchMove, { passive: false });
    canvas.addEventListener("touchend", onTouchEnd);

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    let frame = 0;
    const DAMPING = 0.88;

    const draw = () => {
      frame++;
      const W = canvas.offsetWidth;
      const H = canvas.offsetHeight;
      ctx.clearRect(0, 0, W, H);

      if (!dragging) {
        velY *= DAMPING;
        velX *= DAMPING;
        rotY += velY;
        rotX += velX;
        rotX = Math.max(-Math.PI / 2.2, Math.min(Math.PI / 2.2, rotX));
      }

      const cx = W * 0.5;
      const cy = H * 0.5;
      const scale = Math.min(W, H) * 1.55;

      for (const n of nodes) {
        const p = project(
          { x: n.ox, y: n.oy, z: n.oz },
          rotY,
          rotX,
          cx,
          cy,
          scale,
        );
        n.screenX = p.px;
        n.screenY = p.py;
        n.depth = p.depth;
      }

      const bgGlow = ctx.createRadialGradient(
        cx,
        cy,
        0,
        cx,
        cy,
        Math.min(W, H) * 0.68,
      );
      bgGlow.addColorStop(0, "rgba(11,99,229,0.10)");
      bgGlow.addColorStop(0.5, "rgba(11,99,229,0.04)");
      bgGlow.addColorStop(1, "rgba(11,99,229,0)");
      ctx.fillStyle = bgGlow;
      ctx.fillRect(0, 0, W, H);

      for (const [i, j, d3] of edges) {
        const ni = nodes[i],
          nj = nodes[j];
        const avgDepth = (ni.depth + nj.depth) / 2;
        const df = Math.max(0, Math.min(1, (avgDepth + 1.5) / 3.0));
        const alpha = (1 - d3 / 0.29) * 0.28 * df;
        ctx.beginPath();
        ctx.moveTo(ni.screenX, ni.screenY);
        ctx.lineTo(nj.screenX, nj.screenY);
        ctx.strokeStyle = `rgba(60,140,255,${alpha})`;
        ctx.lineWidth = 0.55;
        ctx.stroke();
      }

      if (frame % 8 === 0 && edges.length > 0) {
        const e = edges[Math.floor(Math.random() * edges.length)];
        signals.push({
          from: e[0],
          to: e[1],
          t: 0,
          speed: 0.014 + Math.random() * 0.024,
        });
        if (Math.random() < 0.4) {
          const e2 = edges[Math.floor(Math.random() * edges.length)];
          signals.push({
            from: e2[0],
            to: e2[1],
            t: 0,
            speed: 0.014 + Math.random() * 0.024,
          });
        }
      }

      for (let s = signals.length - 1; s >= 0; s--) {
        const sig = signals[s];
        sig.t += sig.speed;
        if (sig.t >= 1) {
          signals.splice(s, 1);
          continue;
        }
        const ni = nodes[sig.from],
          nj = nodes[sig.to];
        const sx = ni.screenX + (nj.screenX - ni.screenX) * sig.t;
        const sy = ni.screenY + (nj.screenY - ni.screenY) * sig.t;
        const depthV = ni.depth + (nj.depth - ni.depth) * sig.t;
        const df = Math.max(0, Math.min(1, (depthV + 1.5) / 3.0));
        const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, 10);
        sg.addColorStop(0, `rgba(220,238,255,${0.95 * df})`);
        sg.addColorStop(0.3, `rgba(11,99,229,${0.65 * df})`);
        sg.addColorStop(1, "rgba(11,99,229,0)");
        ctx.beginPath();
        ctx.arc(sx, sy, 10, 0, Math.PI * 2);
        ctx.fillStyle = sg;
        ctx.fill();
      }

      const sorted = nodes
        .map((n, i) => ({ n, i }))
        .sort((a, b) => a.n.depth - b.n.depth);

      for (const { n } of sorted) {
        n.pulse += 0.02;
        const pv = 0.5 + 0.5 * Math.sin(n.pulse);
        const df = Math.max(0.08, Math.min(1, (n.depth + 1.5) / 3.0));
        const r = n.size * (0.52 + df * 0.48);
        const a = n.alpha * df * (0.62 + pv * 0.38);

        const grHalo = ctx.createRadialGradient(
          n.screenX,
          n.screenY,
          0,
          n.screenX,
          n.screenY,
          r * 3.2,
        );
        grHalo.addColorStop(0, `rgba(100,170,255,${a * 0.38})`);
        grHalo.addColorStop(1, "rgba(11,99,229,0)");
        ctx.beginPath();
        ctx.arc(n.screenX, n.screenY, r * 2.8, 0, Math.PI * 2);
        ctx.fillStyle = grHalo;
        ctx.fill();

        const grCore = ctx.createRadialGradient(
          n.screenX,
          n.screenY,
          0,
          n.screenX,
          n.screenY,
          r * 1.6,
        );
        grCore.addColorStop(0, `rgba(235,246,255,${a})`);
        grCore.addColorStop(0.4, `rgba(95,151,241,${a * 0.88})`);
        grCore.addColorStop(1, "rgba(11,99,229,0)");
        ctx.beginPath();
        ctx.arc(n.screenX, n.screenY, r, 0, Math.PI * 2);
        ctx.fillStyle = grCore;
        ctx.fill();

        if (df > 0.45) {
          ctx.beginPath();
          ctx.arc(n.screenX, n.screenY, r * 0.36, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(255,255,255,${a * 0.9})`;
          ctx.fill();
        }
      }

      animId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup", onMouseUp);
      canvas.removeEventListener("mousedown", onMouseDown);
      canvas.removeEventListener("touchstart", onTouchStart);
      canvas.removeEventListener("touchmove", onTouchMove);
      canvas.removeEventListener("touchend", onTouchEnd);
    };
  }, []);

  return (
    <canvas
      id="brain3d-canvas"
      style={{ width: "100%", height: "100%", display: "block" }}
    />
  );
}
