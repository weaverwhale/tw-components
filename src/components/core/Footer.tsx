export function Footer() {
  const today = new Date();
  return (
    <footer>
      <p>
        <span>
          &copy; {today.getFullYear()} Triple Whale. All rights reserved.
        </span>
        <br />
        <small>
          <a href="/reports/lighthouse.html" target="_blank">
            View Lighthouse Report
          </a>
        </small>
      </p>
    </footer>
  );
}
