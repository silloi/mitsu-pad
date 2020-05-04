import Head from 'next/head'
import React, { useEffect } from 'react';
import BufferLoader from '../components/BufferLoader'

export default function Home() {
  let context;
  let bufferLoader;

  function pushMD() {
  // Fix up prefixing
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
      context,
      [
        '/mitsudesu.mp3',
        '/social-distance.mp3',
        '/mittsuno-mitsu.mp3',
        '/tokyotochiji-koikeyuriko.wav'
      ],
      finishedLoading
      );

    bufferLoader.load();

    function finishedLoading(bufferList) {
      let source1 = context.createBufferSource();
      source1.buffer = bufferList[0];
    
      source1.connect(context.destination);
      source1.start(0);
    }
  }

  function pushMD() {
    // Fix up prefixing
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      context = new AudioContext();
  
      bufferLoader = new BufferLoader(
        context,
        [
          '/mitsudesu.mp3',
          '/social-distance.mp3',
          '/mittsuno-mitsu.mp3',
          '/tokyotochiji-koikeyuriko.wav'
        ],
        finishedLoading
        );
  
      bufferLoader.load();
  
      function finishedLoading(bufferList) {
        let source1 = context.createBufferSource();
        source1.buffer = bufferList[0];
      
        source1.connect(context.destination);
        source1.start(0);
      }
    }

  function pushMD() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
      context,
      [
        '/mitsudesu.mp3'
      ],
      finishedLoading
      );

    bufferLoader.load();

    function finishedLoading(bufferList) {
      let source1 = context.createBufferSource();
      source1.buffer = bufferList[0];
    
      source1.connect(context.destination);
      source1.start(0);
    }
  }

  function pushSD() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
      context,
      [
        '/social-distance.mp3'
      ],
      finishedLoading
      );

    bufferLoader.load();

    function finishedLoading(bufferList) {
      let source1 = context.createBufferSource();
      source1.buffer = bufferList[0];
    
      source1.connect(context.destination);
      source1.start(0);
    }
  }

  function pushMM() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
      context,
      [
        '/mittsuno-mitsu.mp3'
      ],
      finishedLoading
      );

    bufferLoader.load();

    function finishedLoading(bufferList) {
      let source1 = context.createBufferSource();
      source1.buffer = bufferList[0];
    
      source1.connect(context.destination);
      source1.start(0);
    }
  }

  function pushTK() {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;
    context = new AudioContext();

    bufferLoader = new BufferLoader(
      context,
      [
        '/tokyotochiji-koikeyuriko.mp3'
      ],
      finishedLoading
      );

    bufferLoader.load();

    function finishedLoading(bufferList) {
      let source1 = context.createBufferSource();
      source1.buffer = bufferList[0];
    
      source1.connect(context.destination);
      source1.start(0);
    }
  }

  return (
    <div className="container">
      <Head>
        <title>Koike SD-3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>

        <div className="grid">
          <button className="card" onClick={() => pushMD()}>
            密
          </button>
          <button className="card" onClick={() => pushSD()}>
            ソ
          </button>
          <button className="card" onClick={() => pushMM()}>
            三
          </button>
          <button className="card" onClick={() => pushTK()}>
            東
          </button>
        </div>
      </main>

      <footer>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className="logo" />
        </a>
      </footer>

      <style jsx>{`
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }

        footer img {
          margin-left: 0.5rem;
        }

        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        a {
          color: inherit;
          text-decoration: none;
        }

        .title a {
          color: #0070f3;
          text-decoration: none;
        }

        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }

        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }

        .title,
        .description {
          text-align: center;
        }

        .description {
          line-height: 1.5;
          font-size: 1.5rem;
        }

        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family: Menlo, Monaco, Lucida Console, Liberation Mono,
            DejaVu Sans Mono, Bitstream Vera Sans Mono, Courier New, monospace;
        }

        .grid {
          /* display: flex; */
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;

          max-width: 800px;
          margin-top: 3rem;
        }

        .card {
          height: 64px;
          width: 64px;
          margin: 1rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }

        .card h3 {
          margin: 0 0 1rem 0;
          font-size: 1.5rem;
        }

        .card p {
          margin: 0;
          font-size: 1.25rem;
          line-height: 1.5;
        }

        .logo {
          height: 1em;
        }

        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  )
}
