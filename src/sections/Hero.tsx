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
  IconBrain,
  IconServer,
  IconCode,
} from "@tabler/icons-react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
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

const titles = ["AI Engineer", "Backend Developer", "ML Practitioner"];

export default function Hero() {
  const [particlesReady, setParticlesReady] = useState(false);
  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [typing, setTyping] = useState(true);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setParticlesReady(true));
  }, []);

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
      {particlesReady && (
        <Particles
          id="tsparticles"
          options={{
            fullScreen: false,
            background: { color: { value: "transform" } },
            fpsLimit: 60,
            particles: {
              number: { value: 80, density: { enable: true, width: 1400 } },
              color: { value: ["#0b63e5", "#5f97f1", "#3479ed"] },
              links: {
                enable: true,
                color: "#0b63e5",
                opacity: 0.08,
                distance: 130,
                width: 1,
              },
              move: {
                enable: true,
                speed: 0.5,
                outModes: { default: "bounce" },
              },
              opacity: { value: { min: 0.08, max: 0.35 } },
              shape: { type: "circle" },
              size: { value: { min: 1, max: 2.5 } },
            },
            detectRetina: true,
          }}
          style={{ position: "absolute", inset: 0, zIndex: 0 }}
        />
      )}

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
        {/* Left: Text content */}
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
      </Container>
    </section>
  );
}
