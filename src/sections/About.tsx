import {
  Container,
  Title,
  Text,
  Grid,
  Stack,
  Card,
  Anchor,
  Group,
} from "@mantine/core";
import { IconMail, IconPhone, IconMapPin } from "@tabler/icons-react";
import { motion } from "framer-motion";
import { personalInfo, education } from "../data/portfolio";
import {
  fadeInUp,
  slideInLeft,
  slideInRight,
  staggerContainer,
  viewportOptions,
} from "../lib/motion";

export default function About() {
  return (
    <section id="about">
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
            About Me
          </Title>
        </motion.div>

        <Grid gutter={60}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              variants={slideInLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <Stack gap="md">
                <Text c="dimmed" lh={1.8}>
                  I'm an AI Engineer and Back-end Developer based in Damascus,
                  Syria, passionate about building intelligent systems and
                  robust APIs. I specialize in fine-tuning and deploying
                  transformer models and LLMs, and designing scalable back-end
                  architectures.
                </Text>
                <Text c="dimmed" lh={1.8}>
                  Currently pursuing a Master's in Technology Management, I
                  bring a strong research mindset combined with hands-on
                  production experience across NLP, inference serving, and
                  full-stack development.
                </Text>

                <Stack gap="sm" mt="md">
                  <Group gap="sm">
                    <IconMail size={18} color="var(--mantine-color-brand-5)" />
                    <Anchor
                      href={`mailto:${personalInfo.email}`}
                      c="dimmed"
                      fz="sm"
                    >
                      {personalInfo.email}
                    </Anchor>
                  </Group>
                  <Group gap="sm">
                    <IconPhone size={18} color="var(--mantine-color-brand-5)" />
                    <Text c="dimmed" fz="sm">
                      {personalInfo.phone}
                    </Text>
                  </Group>
                  <Group gap="sm">
                    <IconMapPin
                      size={18}
                      color="var(--mantine-color-brand-5)"
                    />
                    <Text c="dimmed" fz="sm">
                      {personalInfo.address}
                    </Text>
                  </Group>
                </Stack>
              </Stack>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              variants={slideInRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <Title order={3} fz="lg" mb="md" fw={600}>
                Education
              </Title>
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={viewportOptions}
              >
                <Stack gap="md">
                  {education.map((edu, i) => (
                    <motion.div key={i} variants={fadeInUp}>
                      <Card
                        padding="lg"
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
                        <Text fw={600} fz="sm" lh={1.4} mb={6} c={"white"}>
                          {edu.degree}
                        </Text>
                        <Text c="brand.4" fz="sm" fw={500} mb={8}>
                          {edu.institution}
                        </Text>
                        <Text c="dimmed" fz="xs" ff="monospace">
                          {edu.period} · {edu.location}
                        </Text>
                        {edu.note && (
                          <Text c="dimmed" fz="xs" fs="italic" mt={8}>
                            {edu.note}
                          </Text>
                        )}
                      </Card>
                    </motion.div>
                  ))}
                </Stack>
              </motion.div>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  );
}
