import Head from "next/head";
import { CtaBox, Header, Hero } from "@/components";

export default function Home() {
  return (
    <>
      <Head>
        <title>Boost Your Heart Health & Energy | SNAP</title>
      </Head>
      <main>
        <Header />
        <Hero />
        <CtaBox />
      </main>
    </>
  );
}
