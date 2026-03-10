import { motion } from 'framer-motion'
import { Container, SimpleGrid, Text, Card } from '@mantine/core'
import { staggerContainer, scaleIn, viewportOptions } from '../lib/motion'

const stats = [
  { value: '4+',  label: 'Projects Delivered' },
  { value: '2+',  label: 'Years of Experience' },
  { value: '10+', label: 'Models Fine-tuned' },
  { value: '3',   label: 'Companies Worked With' },
]

export default function Stats() {
  return (
    <section
      id="stats"
      style={{
        padding: '64px 0',
        borderTop: '1px solid var(--mantine-color-dark-5)',
        borderBottom: '1px solid var(--mantine-color-dark-5)',
        background: 'linear-gradient(180deg, transparent, rgba(11,99,229,0.04), transparent)',
      }}
    >
      <Container size="lg">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOptions}
        >
          <SimpleGrid cols={{ base: 2, sm: 4 }} spacing="xl">
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={scaleIn}>
                <Card
                  radius="md"
                  style={{
                    textAlign: 'center',
                    padding: '28px 16px',
                    border: '1px solid var(--mantine-color-dark-4)',
                    background: 'var(--mantine-color-dark-6)',
                    transition: 'border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease',
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
                    style={{
                      fontSize: '2.8rem',
                      fontWeight: 800,
                      background: 'linear-gradient(135deg, #0b63e5, #5f97f1)',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                      letterSpacing: '-0.03em',
                      lineHeight: 1.1,
                    }}
                  >
                    {stat.value}
                  </Text>
                  <Text c="dimmed" fz="sm" mt={8} fw={500}>
                    {stat.label}
                  </Text>
                </Card>
              </motion.div>
            ))}
          </SimpleGrid>
        </motion.div>
      </Container>
    </section>
  )
}
