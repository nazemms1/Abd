import { motion } from 'framer-motion'
import { Container, Title, Text, Grid, Stack, Group, Anchor, Button, ThemeIcon } from '@mantine/core'
import { IconMail, IconPhone, IconMapPin, IconBrandGithub, IconBrandLinkedin, IconBrandGitlab } from '@tabler/icons-react'
import { personalInfo } from '../data/portfolio'
import { fadeInUp, slideInLeft, slideInRight, staggerContainer, viewportOptions } from '../lib/motion'

export default function Contact() {
  const socials = [
    { href: personalInfo.github,   icon: <IconBrandGithub size={18} />,   label: 'GitHub — @abdulrahman-nuzha' },
    { href: personalInfo.linkedin, icon: <IconBrandLinkedin size={18} />, label: 'LinkedIn — @abdulrahman-nuzha' },
    { href: personalInfo.gitlab,   icon: <IconBrandGitlab size={18} />,   label: 'GitLab — @abdulrahman-nuzha' },
  ]

  return (
    <section id="contact">
      <Container size="lg">
        <motion.div variants={fadeInUp} initial="hidden" whileInView="visible" viewport={viewportOptions}>
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
            Get In Touch
          </Title>
        </motion.div>

        <Grid gutter={60}>
          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div variants={slideInLeft} initial="hidden" whileInView="visible" viewport={viewportOptions}>
              <Text c="dimmed" fz="md" lh={1.8} mb="xl">
                I'm open to new opportunities, collaborations, or just a good conversation about AI
                and software. Feel free to reach out — I'll get back to you promptly.
              </Text>
              <Stack gap="md">
                <Group gap="md">
                  <ThemeIcon variant="light" color="brand" size="lg" radius="md">
                    <IconMail size={18} />
                  </ThemeIcon>
                  <Anchor href={`mailto:${personalInfo.email}`} c="dimmed" fz="sm">{personalInfo.email}</Anchor>
                </Group>
                <Group gap="md">
                  <ThemeIcon variant="light" color="brand" size="lg" radius="md">
                    <IconPhone size={18} />
                  </ThemeIcon>
                  <Text c="dimmed" fz="sm">{personalInfo.phone}</Text>
                </Group>
                <Group gap="md">
                  <ThemeIcon variant="light" color="brand" size="lg" radius="md">
                    <IconMapPin size={18} />
                  </ThemeIcon>
                  <Text c="dimmed" fz="sm">{personalInfo.address}</Text>
                </Group>
              </Stack>
            </motion.div>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 6 }}>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={viewportOptions}
            >
              <motion.div variants={slideInRight}>
                <Text fz="xs" ff="monospace" c="dimmed" tt="uppercase" mb="md" style={{ letterSpacing: '0.1em' }}>
                  Find me on
                </Text>
              </motion.div>
              <Stack gap="sm">
                {socials.map((item) => (
                  <motion.div
                    key={item.href}
                    variants={fadeInUp}
                    whileHover={{ x: 6, transition: { duration: 0.2 } }}
                  >
                    <Button
                      component="a"
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      variant="default"
                      leftSection={item.icon}
                      radius="md"
                      justify="flex-start"
                      fullWidth
                    >
                      {item.label}
                    </Button>
                  </motion.div>
                ))}
              </Stack>
            </motion.div>
          </Grid.Col>
        </Grid>
      </Container>
    </section>
  )
}
