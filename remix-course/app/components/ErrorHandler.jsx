import { Links, LiveReload, Meta, Scripts, isRouteErrorResponse } from "@remix-run/react";
import MainNavigation from "./MainNavigation";
import { Link, ScrollRestoration } from "react-router-dom";


export default function ErrorHandler({ error }) {
    let title, heading, message;
    if(isRouteErrorResponse(error)) {
        heading = title = error.statusText;
        message = error.data.message;
    } else {
        heading = title = "An error occurred!";
        message = error.message;
    }
    return (
        <html lang="en">
        <head>
            <meta charSet="utf-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <Meta />
            <Links />
            <title>{title}</title>
        </head>
        <body>
            <header>
            <MainNavigation />
            </header>
            <main className="error">
                <h1>{heading}</h1>
                <p>{message}</p>
                <p>Back to <Link to = "/">Safety</Link></p>
            </main>
            <ScrollRestoration />
            <Scripts />
            <LiveReload />
        </body>
        </html>
    );
}