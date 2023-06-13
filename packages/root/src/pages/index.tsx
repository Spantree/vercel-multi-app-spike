import Link from 'next/link';

export default function Home() {
  const NEXT_PUBLIC_SUBAPP_URL = process.env.NEXT_PUBLIC_SUBAPP_URL;
  // const NEXT_PUBLIC_LAUNCH_PREFIX = 'foo';
  console.log(`Home ${NEXT_PUBLIC_SUBAPP_URL}`, process.env);
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
        <br />
        <Link href="/subapp">subapp [{NEXT_PUBLIC_SUBAPP_URL}]</Link>
        <div
          style={{ border: '1px solid cyan', padding: '1rem', fontSize: '12px', minWidth: '200px' }}
        >
          <pre>GIT SHA: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}</pre>
          <pre>GIT AUTHOR: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN}</pre>
        </div>
      </div>
    </main>
  );
}
