import { Text, Flex, Button } from "@mantine/core";

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
        <Button
          component="a"
          radius="xl"
          color="dark"
          size="xs"
          compact
          href="https://github.com/weaverwhale/tw-components-playground"
          target="_blank"
          rel="noopener noreferrer"
        >
          Github
        </Button>
        <Button
          component="a"
          radius="xl"
          color="red"
          size="xs"
          compact
          href="https://www.npmjs.com/package/@weaverwhale/tw-components"
          target="_blank"
          rel="noopener noreferrer"
        >
          NPM Package
        </Button>
        <Button
          component="a"
          radius="xl"
          color="blue"
          size="xs"
          compact
          href="/reports/lighthouse.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Lighthouse Report
        </Button>
      </Flex>
      <Text align={"center"}>
        &copy; {today.getFullYear()} Triple Whale. All rights reserved.
      </Text>
    </footer>
  );
}
