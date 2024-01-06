import { Link } from '@remix-run/react';
import homeStyle from '~/styles/home.css';

export default function Index() {
  return (
    <main id="content">
      <h1>A better way of keeping track of your notes</h1>
      <p>Try our early beta and never loose track of your notes!</p>
      <p id="cta">
        <Link to = "/notes">Try Out!</Link>
      </p>
    </main>
  );
}

export const links = () => {
  return [{rel: 'stylesheet', href: homeStyle}];
}