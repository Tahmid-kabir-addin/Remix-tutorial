import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteError
} from "@remix-run/react";

import styles from '~/styles/main.css';
import ErrorHandler from "./components/ErrorHandler";
import MainNavigation from "./components/MainNavigation";

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <MainNavigation />
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export function ErrorBoundary() {  
  const error = useRouteError();
  return <ErrorHandler error={error} />
}

export function links(){
  return [{rel: 'stylesheet', href: styles}];
}

export function meta() {
  return [
    {
      title: "My Notes App",
    }
  ]
}
