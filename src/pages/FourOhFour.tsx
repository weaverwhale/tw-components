import React from "react";
import {
  createStyles,
  Image,
  Container,
  Title,
  Text,
  Button,
  SimpleGrid,
  rem,
} from "@mantine/core";
import { useNavigate } from "react-router-dom";
import { Header } from "../components/core/Header";
import { Footer } from "../components/core/Footer";

const image = "https://ui.mantine.dev/_next/static/media/image.11cd6c19.svg";

const useStyles = createStyles((theme) => ({
  root: {
    paddingTop: rem(80),
    paddingBottom: rem(80),
  },

  title: {
    fontWeight: 900,
    fontSize: rem(34),
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,

    [theme.fn.smallerThan("sm")]: {
      fontSize: rem(32),
    },
  },

  control: {
    [theme.fn.smallerThan("sm")]: {
      width: "100%",
    },
  },

  mobileImage: {
    [theme.fn.largerThan("sm")]: {
      display: "none",
    },
  },

  desktopImage: {
    [theme.fn.smallerThan("sm")]: {
      display: "none",
    },
  },
}));

export function FourOhFour({
  catastrophic = false,
  darkMode = false,
  setDarkMode = (darkMode: boolean) => null,
}: {
  catastrophic?: boolean;
  darkMode?: boolean;
  setDarkMode?: (darkMode: boolean) => void;
}) {
  const { classes } = useStyles();
  const navigate = useNavigate();

  return (
    <>
      {catastrophic && <Header darkMode={darkMode} setDarkMode={setDarkMode} />}
      <Container className={classes.root}>
        <SimpleGrid
          spacing={80}
          cols={2}
          breakpoints={[{ maxWidth: "sm", cols: 1, spacing: 40 }]}
        >
          <Image src={image} className={classes.mobileImage} />
          <div>
            <Title className={classes.title}>
              {catastrophic
                ? "Yikes! You blew me up!"
                : "Something is not right..."}
            </Title>
            <Text color="dimmed" size="lg">
              {catastrophic
                ? "A catastrophic error occurred. You must be a developer."
                : `Page you are trying to open does not exist. You may have mistyped
              the address, or the page has been moved to another URL. If you think
              this is an error contact support.`}
            </Text>
            <Button
              variant="outline"
              size="md"
              mt="xl"
              className={classes.control}
              onClick={() =>
                catastrophic ? (window.location.pathname = "/") : navigate("/")
              }
            >
              Get back to home page
            </Button>
          </div>
          <Image src={image} className={classes.desktopImage} />
        </SimpleGrid>
      </Container>
      {catastrophic && <Footer />}
    </>
  );
}
