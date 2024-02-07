import { NavLink, Center } from "@mantine/core";
import { IconBrandGithubFilled } from "@tabler/icons-react";

function Footer() {
  return (
    <Center>
      <NavLink
        maw="10rem"
        href="https://github.com/emi-fto/ThePhoneCave_tech_challenge"
        label="GitHub Repository"
        leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
        target="_blank"
      />
    </Center>
  );
}

export default Footer;
