import { Link } from "@remix-run/react";


export default function Index() {
  return (
    <>
    <h1>Hello World</h1>
    <a href="/demo">Go to Demo Page</a>
    <div>

    <Link to="/demo">Go to Downloaded Demo page</Link>
    </div>
    </>
  );
}
