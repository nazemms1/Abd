import { useState, useEffect } from "react";
import {
  Container,
  Group,
  Anchor,
  Button,
  Burger,
  Drawer,
  Stack,
} from "@mantine/core";
import { personalInfo } from "../data/portfolio";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = navLinks.map((link) => (
    <Anchor
      key={link.href}
      href={link.href}
      onClick={() => setOpened(false)}
      c="dimmed"
      fw={500}
      fz="sm"
      style={{ transition: "color 0.2s" }}
      styles={{ root: { "&:hover": { color: "var(--mantine-color-text)" } } }}
    >
      {link.label}
    </Anchor>
  ));

  return (
    <>
      <header
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: scrolled ? "14px 0" : "20px 0",
          background: scrolled ? "rgba(10, 13, 21, 0.9)" : "transparent",
          backdropFilter: scrolled ? "blur(16px)" : "none",
          WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
          boxShadow: scrolled ? "0 1px 0 rgba(255,255,255,0.06)" : "none",
          transition: "background 0.25s ease, box-shadow 0.25s ease, padding 0.25s ease",
        }}
      >
        <Container size="lg">
          <Group justify="space-between" align="center">
            <Anchor
              href="#hero"
              underline="never"
              style={{
                fontSize: "1.3rem",
                fontWeight: 700,
                letterSpacing: "-0.03em",
                textDecoration: "none",
              }}
            >
              {personalInfo.name.split(" ")[0]}
            </Anchor>

            <Group gap="xl" visibleFrom="sm">
              {links}
              <Button
                component="a"
                href={`mailto:${personalInfo.email}`}
                variant="outline"
                color="brand"
                radius="xl"
                size="sm"
              >
                Hire Me
              </Button>
            </Group>

            <Burger
              opened={opened}
              onClick={() => setOpened((o) => !o)}
              hiddenFrom="sm"
              color="gray"
            />
          </Group>
        </Container>
      </header>

      <Drawer
        opened={opened}
        onClose={() => setOpened(false)}
        position="right"
        size="xs"
        hiddenFrom="sm"
        styles={{
          content: { backgroundColor: "var(--mantine-color-dark-7)" },
          header: { backgroundColor: "var(--mantine-color-dark-7)" },
        }}
      >
        <Stack gap="lg" pt="md">
          {links}
          <Button
            component="a"
            href={`mailto:${personalInfo.email}`}
            variant="outline"
            color="brand"
            radius="xl"
            onClick={() => setOpened(false)}
          >
            Hire Me
          </Button>
        </Stack>
      </Drawer>
    </>
  );
}
