import dynamic from "next/dynamic";
import Head from "next/head";

const ThreeCanvas = dynamic(() => import("./_components/ThreeCanvas"), {
  ssr: false,
});
export default function OrbitControls() {
  return (
    <>
      <Head>
        <title>Learn Three | Orbit Controls</title>
        <meta name="description" content="Learn Three Orbit Control" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="min-h-screen bg-stone-800">
        <ThreeCanvas />
      </main>
    </>
  );
}
