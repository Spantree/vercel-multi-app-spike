import Link from 'next/link';

export default function Home() {
  const NEXT_PUBLIC_URL = process.env.NEXT_PUBLIC_URL;
  // const NEXT_PUBLIC_LAUNCH_PREFIX = 'foo';
  console.log(`Home ${NEXT_PUBLIC_URL}`, process.env);
  return (
    <main
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          fontSize: '1.5rem',
        }}
      >
        <h1>Root app</h1>
        <Link href="/subapp">subapp [{NEXT_PUBLIC_URL}]</Link>
      </div>
    </main>
  );
}
