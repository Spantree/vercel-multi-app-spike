import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  const NEXT_PUBLIC_SUBAPP_URL = process.env.NEXT_PUBLIC_SUBAPP_URL;
  console.log(`Home ${NEXT_PUBLIC_SUBAPP_URL}`, process.env);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          gap: '2rem',
          fontSize: '1.5rem',
        }}
      >
        <p>This is the root app.</p>
        <br />
      </div>
      <div>
        <Image src="/cat-cat-dance.gif" width="250" height="250" alt="cat dance" />
      </div>
      <div>
        <br />
        <Link href="/subapp">subapp [{NEXT_PUBLIC_SUBAPP_URL}]</Link>
        <br />
        <div
          style={{
            marginTop: '20px',
            border: '1px solid cyan',
            padding: '1rem',
            fontSize: '12px',
            minWidth: '200px',
          }}
        >
          <pre>GIT SHA: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_SHA}</pre>
          <pre>GIT AUTHOR: {process.env.NEXT_PUBLIC_VERCEL_GIT_COMMIT_AUTHOR_LOGIN}</pre>
        </div>
      </div>
    </div>
  );
}
