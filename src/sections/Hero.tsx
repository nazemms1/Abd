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

          <div style={{ position: "relative", width: "100%", height: 420 }}>
            <NeuralCanvas />
          </div>
        </div>
      </Container>
    </section>
  );
}

function NeuralCanvas() {
  useEffect(() => {
    const canvas = document.getElementById(
      "neural-canvas",
    ) as HTMLCanvasElement;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    let animId: number;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const NODE_COUNT = 38;
    const nodes = Array.from({ length: NODE_COUNT }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      r: Math.random() * 2.5 + 1.5,
      pulse: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (const n of nodes) {
        n.x += n.vx;
        n.y += n.vy;
        n.pulse += 0.04;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            const alpha = (1 - dist / 140) * 0.55;
            const grad = ctx.createLinearGradient(
              nodes[i].x,
              nodes[i].y,
              nodes[j].x,
              nodes[j].y,
            );
            grad.addColorStop(0, `rgba(11,99,229,${alpha})`);
            grad.addColorStop(1, `rgba(95,151,241,${alpha * 0.5})`);
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = grad;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        const glow = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
        const pulse = 0.5 + 0.5 * Math.sin(n.pulse);
        glow.addColorStop(0, `rgba(11,99,229,${0.6 + pulse * 0.4})`);
        glow.addColorStop(0.4, `rgba(95,151,241,${0.25 + pulse * 0.2})`);
        glow.addColorStop(1, "rgba(11,99,229,0)");
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
        ctx.fillStyle = glow;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(147,186,246,${0.7 + pulse * 0.3})`;
        ctx.shadowColor = "#0b63e5";
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.shadowBlur = 0;
      }

      animId = requestAnimationFrame(draw);
    };

    draw();
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      id="neural-canvas"
      style={{
        width: "100%",
        height: "100%",
        display: "block",
        borderRadius: 16,
      }}
    />
  );
}
