import {
  Container,
  Title,
  Text,
  Card,
  Stack,
  Group,
  Badge,
  List,
} from "@mantine/core";
import { motion } from "framer-motion";
import { experience } from "../data/portfolio";
import { fadeInUp, staggerContainer, viewportOptions } from "../lib/motion";

export default function Experience() {
  return (
    <section id="experience">
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
            Experience
          </Title>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <Stack gap="lg">
            {experience.map((exp, i) => (
              <motion.div key={i} variants={fadeInUp}>
                <Card
                  padding="xl"
                  radius="md"
                  style={{
                    backgroundColor: "var(--mantine-color-dark-6)",
                    border: "1px solid var(--mantine-color-dark-4)",
                    transition: "border-color 0.25s, transform 0.25s, box-shadow 0.25s",
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
                    wrap="wrap"
                    gap="xs"
                  >
                    <Title order={3} fz="lg" fw={700} c={"white"}>
                      {exp.title}
                    </Title>
                    <Text c="dimmed" fz="xs" ff="monospace">
                      {exp.period}
                    </Text>
                  </Group>

                  <Group gap="xs" mb="lg" wrap="wrap">
                    <Text c="brand.4" fz="sm" fw={600}>
                      {exp.company}
                    </Text>
                    <Text c="dimmed">·</Text>
                    <Badge variant="light" color="brand" size="sm" radius="sm">
                      {exp.type}
                    </Badge>
                    <Text c="dimmed">·</Text>
                    <Text c="dimmed" fz="sm">
                      {exp.location}
                    </Text>
                  </Group>

                  {exp.bullets.length > 0 && (
                    <List
                      spacing="xs"
                      size="sm"
                      c="dimmed"
                      icon={
                        <Text c="brand.5" fz="xs" lh={1.8}>
                          ▸
                        </Text>
                      }
                    >
                      {exp.bullets.map((b, j) => (
                        <List.Item key={j} lh={1.65}>
                          {b}
                        </List.Item>
                      ))}
                    </List>
                  )}
                </Card>
              </motion.div>
            ))}
          </Stack>
        </motion.div>
      </Container>
    </section>
  );
}
