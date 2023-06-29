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
        backgroundColor: '#282c34',
        color: 'white',
      }}
    >
      <div
        style={{
          display: 'flex',
          fontSize: '1.5rem',
        }}
      >
        <Image src="/root.png" width="350" height="350" alt="root" />
      </div>
      <div>
        <p style={{ color: '#eee' }}>This is the root app.</p>
      </div>
      <div>
        <br />
        <Link style={{ color: '#fff' }} href="/subapp">
          subapp [{NEXT_PUBLIC_SUBAPP_URL}]
        </Link>
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
        <div style={{ marginTop: '20px', fontSize: '10px' }}>
          <a href="https://www.freepik.com/free-vector/hand-drawing-illustration-development-concept_3110577.htm#query=roots%20drawing&position=1&from_view=keyword&track=ais">
            Image by rawpixel.com
          </a>{' '}
          on Freepik
        </div>
      </div>
    </div>
  );
}
