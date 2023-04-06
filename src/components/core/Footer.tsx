import { Text, Flex } from "@mantine/core";
import { Button } from "../Button";

const buttons = [
  {
    href: "https://github.com/weaverwhale/tw-components-playground",
    text: "Github",
    analyticsLabel: "Footer Link - Github",
  },
  {
    href: "https://www.npmjs.com/package/@weaverwhale/tw-components",
    text: "NPM Package",
    analyticsLabel: "Footer Link NPM Package",
  },
  {
    href: "/reports/lighthouse.html",
    text: "Lighthouse Report",
    analyticsLabel: "Footer Link - Lighthouse Report",
  },
];

export function Footer() {
  const today = new Date();
  return (
    <footer>
      <Flex
        gap="sm"
        justify={{ base: "center" }}
        align="flex-start"
        direction="row"
        wrap="wrap"
        mb={20}
      >
        {buttons.map((button) => (
          <Button
            component="a"
            radius="xl"
            color="dark"
            size="xs"
            compact
            href={button.href}
            target="_blank"
            rel="noopener noreferrer"
            analyticsLabel={button.analyticsLabel}
            analyticsPayload={{ href: button.href, text: button.text }}
            key={button.href}
          >
            {button.text}
          </Button>
        ))}
      </Flex>
      <Text align={"center"}>
        &copy; {today.getFullYear()} Triple Whale. All rights reserved.
      </Text>
    </footer>
  );
}
