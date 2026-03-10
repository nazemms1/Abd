import { motion } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Badge,
  List,
  ActionIcon,
  SimpleGrid,
} from "@mantine/core";
import { IconBrandGithub, IconExternalLink } from "@tabler/icons-react";
import { projects } from "../data/portfolio";
import { fadeInUp, staggerContainer, viewportOptions } from "../lib/motion";

export default function Projects() {
  return (
    <section id="projects">
      <Container size="lg">
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <Title
            order={2}
            mb={48}
            style={{ display: "inline-block" }}
            styles={{
              root: {
                "&::after": {
                  content: '""',
                  display: "block",
                  width: 48,
                  height: 3,
                  background: "linear-gradient(90deg, var(--mantine-color-brand-5), var(--mantine-color-brand-3))",
                  borderRadius: 2,
                  marginTop: 10,
                },
              },
            }}
          >
            Projects
          </Title>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <SimpleGrid cols={{ base: 1, md: 2 }} spacing="lg">
            {projects.map((project) => (
              <motion.div
                key={project.id}
                variants={fadeInUp}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  height: "100%",
                }}
              >
                <Card
                  padding="xl"
                  radius="md"
                  style={{
                    backgroundColor: "var(--mantine-color-dark-6)",
                    border: "1px solid var(--mantine-color-dark-4)",
                    transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
                    display: "flex",
                    flexDirection: "column",
                    height: "100%",
                    cursor: "default",
                  }}
                  styles={{
                    root: {
                      "&:hover": {
                        borderColor: "rgba(11,99,229,0.35)",
                        boxShadow: "0 8px 40px rgba(11,99,229,0.1)",
                        transform: "translateY(-3px)",
                      },
                    },
                  }}
                >
                  <Group
                    justify="space-between"
                    align="flex-start"
                    mb={6}
                    wrap="nowrap"
                  >
                    <Title order={3} fz="md" fw={700} lh={1.3} c={"white"}>
                      {project.title}
                    </Title>
                    <Group gap="xs" style={{ flexShrink: 0 }}>
                      {project.githubUrl && (
                        <ActionIcon
                          component="a"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          variant="subtle"
                          color="gray"
                          size="sm"
                          aria-label="GitHub"
                        >
                          <IconBrandGithub size={18} />
                        </ActionIcon>
                      )}
                      {project.liveUrl && (
                        <ActionIcon
                          component="a"
                          href={project.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          variant="subtle"
                          color="gray"
                          size="sm"
                          aria-label="Live demo"
                        >
                          <IconExternalLink size={18} />
                        </ActionIcon>
                      )}
                    </Group>
                  </Group>

                  <Text c="dimmed" fz="xs" ff="monospace" mb="md">
                    {project.context} · {project.period}
                  </Text>

                  <Text c="dimmed" fz="sm" lh={1.7} mb="md">
                    {project.description}
                  </Text>

                  <List
                    spacing={4}
                    size="sm"
                    c="dimmed"
                    mb="lg"
                    icon={
                      <Text c="brand.5" fz="xs" lh={1.8}>
                        ▸
                      </Text>
                    }
                  >
                    {project.bullets.map((b, i) => (
                      <List.Item key={i} lh={1.6}>
                        {b}
                      </List.Item>
                    ))}
                  </List>

                  <Stack style={{ marginTop: "auto" }}>
                    <Group gap="xs" wrap="wrap">
                      {project.tech.map((t) => (
                        <Badge
                          key={t}
                          variant="light"
                          color="brand"
                          size="sm"
                          radius="sm"
                        >
                          {t}
                        </Badge>
                      ))}
                    </Group>
                  </Stack>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </section>
  );
}
