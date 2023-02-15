import Head from "next/head";
import { Survey } from "@/components/Survey";

import localFont from "@next/font/local";

export const vazir = localFont({
  src: [
    {
      path: "../font/Vazir/Vazir-Regular-FD.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../font/Vazir/Vazir-Bold-FD.woff2",
      weight: "700",
      style: "bold",
    },
    {
      path: "../font/Vazir/Vazir-Light-FD.woff2",
      weight: "200",
      style: "light",
    },
  ],
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Survey</title>
        <meta name='description' content='Survey App' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=yes'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={vazir.className}>
        <Survey />
      </main>
    </>
  );
}
