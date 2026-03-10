import { motion } from "framer-motion";
import {
  Container,
  Title,
  Text,
  Card,
  Group,
  Badge,
  SimpleGrid,
  Stack,
} from "@mantine/core";
import { skills, languages } from "../data/portfolio";
import { fadeInUp, staggerContainer, viewportOptions } from "../lib/motion";

const groups = [
  { key: "ai" as const, label: "Artificial Intelligence" },
  { key: "backend" as const, label: "Back-end Development" },
  { key: "soft" as const, label: "Soft Skills" },
];

export default function Skills() {
  return (
    <section id="skills">
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
            Skills
          </Title>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="lg" mb="xl">
            {groups.map((group) => (
              <motion.div
                key={group.key}
                variants={fadeInUp}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Card
                  padding="lg"
                  radius="md"
                  h="100%"
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
                  <Text
                    fz="xs"
                    ff="monospace"
                    c="brand.4"
                    tt="uppercase"
                    mb="md"
                    pb="sm"
                    style={{
                      letterSpacing: "0.12em",
                      borderBottom: "1px solid var(--mantine-color-dark-4)",
                    }}
                  >
                    {group.label}
                  </Text>
                  <Group gap="xs" wrap="wrap">
                    {skills
                      .filter((s) => s.category === group.key)
                      .map((s) => (
                        <Badge
                          key={s.name}
                          variant="light"
                          color="brand"
                          size="sm"
                          radius="sm"
                        >
                          {s.name}
                        </Badge>
                      ))}
                  </Group>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>

        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <Stack gap="xs">
            <Text
              fz="xs"
              ff="monospace"
              c="dimmed"
              tt="uppercase"
              style={{ letterSpacing: "0.1em" }}
            >
              Languages
            </Text>
            <Group gap="md">
              {languages.map((lang) => (
                <Card
                  key={lang.name}
                  padding="sm"
                  radius="sm"
                  style={{
                    backgroundColor: "var(--mantine-color-dark-6)",
                    border: "1px solid var(--mantine-color-dark-4)",
                  }}
                >
                  <Text fw={600} fz="sm" c={"white"}>
                    {lang.name}
                  </Text>
                  <Text c="dimmed" fz="xs" ff="monospace">
                    {lang.level}
                  </Text>
                </Card>
              ))}
            </Group>
          </Stack>
        </motion.div>
      </Container>
    </section>
  );
}
