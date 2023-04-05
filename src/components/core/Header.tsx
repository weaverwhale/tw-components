import { Text } from "@mantine/core";
import { Link } from "react-router-dom";

export function Header({ darkMode, setDarkMode }) {
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
          <Link to="/">Home</Link>
          <Link to="/404">404</Link>
          <div id="dark-light-toggle" className={`${darkMode && "dark"}`}>
            {darkMode ? (
              <i
                id="dark"
                aria-label="Dark Mode"
                onClick={() => setDarkMode(false)}
              >
                <Text c="white">🌚 Dark Mode</Text>
              </i>
            ) : (
              <i
                id="light"
                aria-label="Light Mode"
                onClick={() => setDarkMode(true)}
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
