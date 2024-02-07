import { Card, Group, Image, Text, NavLink, SimpleGrid } from "@mantine/core";
import "../Styles/About.css";
import { IconBrandGithubFilled, IconBrandLinkedin } from "@tabler/icons-react";

function AboutPage() {
  return (
    <div className="about">
      <h1 className="textabout">About Me</h1>
      <p className="textabout">
        I am an Ironhacker passionate about Web Development. <br />
        Check my profile below!
      </p>
      <div>
        <Card m="1rem" shadow="sm" padding="lg" radius="md" withBorder>
          <Card.Section>
            <Image
              src="https://media.licdn.com/dms/image/D4D03AQEceePNoAFgjg/profile-displayphoto-shrink_800_800/0/1705564821700?e=1710979200&v=beta&t=P7xxIq6CMrVGS7vjLW7QyzAgeApyqsNFAfEj2-QoC_w"
              height="400vw"
              width="33vw"
              alt="Item picture"
            />
          </Card.Section>

          <Group justify="space-between" mt="md" mb="xs">
            <Text fw={500}>Emiliano Foti</Text>
          </Group>

          <NavLink
            href="https://github.com/emi-fto"
            label="GitHub"
            leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
            target="_blank"
          />
          <NavLink
            href="https://linkedin.com/in/emiliano-foti-345a11a4"
            label="LinkedIn"
            leftSection={<IconBrandLinkedin size="1rem" stroke={1.5} />}
            target="_blank"
          />
        </Card>
      </div>
    </div>
  );
}

export default AboutPage;
