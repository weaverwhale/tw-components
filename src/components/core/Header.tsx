import { Text } from "@mantine/core";
import { Link } from "../Link";
import { GenericEventLogger } from "../../helpers/GenericEventLogger";
import { useLocation } from "react-router-dom";

const links = [
  { href: "/", text: "Home", analyticsLabel: "Header Link - Home" },
  { href: "/404", text: "404", analyticsLabel: "Header Link - 404 Page" },
];

export function Header({ darkMode, setDarkMode }) {
  const location = useLocation();

  return (
    <header>
      <div className="header-inner">
        <div>
          <a href="/">
            <img
              src="/tw-logo.svg"
              alt="Triple Whale"
              width="150"
              height="21"
            />
          </a>
        </div>
        <nav>
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              analyticsLabel={link.analyticsLabel}
              analyticsPayload={{ href: link.href, text: link.text }}
            >
              {link.text}
            </Link>
          ))}
          <div id="dark-light-toggle" className={`${darkMode && "dark"}`}>
            {darkMode ? (
              <i
                id="dark"
                aria-label="Dark Mode"
                onClick={() => {
                  setDarkMode(false);
                  GenericEventLogger("Dark Mode - Off", {
                    mode: "dark",
                    href: location.pathname,
                    ...location,
                  });
                }}
              >
                <Text c="white">🌚 Dark Mode</Text>
              </i>
            ) : (
              <i
                id="light"
                aria-label="Light Mode"
                onClick={() => {
                  setDarkMode(true);
                  GenericEventLogger("Dark Mode - On", {
                    mode: "light",
                    href: location.pathname,
                    ...location,
                  });
                }}
              >
                <Text c="white">🌝 Light Mode</Text>
              </i>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}
