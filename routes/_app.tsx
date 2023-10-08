import { AppProps } from "$fresh/server.ts";

export default function App({ Component }: AppProps) {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Tugas Basis Data (Kelompok 1)"/>
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="stylesheet" href="/toggle.css" />
      </head>
      <body>
        <Component />
      </body>
    </html>
  );
}
