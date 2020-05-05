import Head from 'next/head'
import React, { useEffect } from 'react';
import BufferLoader from '../components/BufferLoader'
import YouTube from '../components/YouTube';
import { isResSent } from 'next/dist/next-server/lib/utils';

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


  // url
  const [url, setUrl] = React.useState('')
  // video data
  const [resVideo, setResVideo] = React.useState('')

  const handleChange = (event) => {
    setUrl(event.target.value)
    console.log(url)
  }

  return (
    <div className="container">
      <Head>
        <title>Koike SD-3</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className="title">
          <img src="/logo.png" width="320px"/>
        </h1>

        <p className="description">
          都知事ボイスサンプラー「密パッド」
        </p>

        <input type="text" name="url" className="url" value={url} placeholder="https://www.youtube.com/watch?v=t-mBoKOk7cM" onChange={handleChange} />
        {url &&
          <YouTube url={url} />
        }

        <div className="grid">
          <button className="card" onClick={() => pushMD()}>
            密
          </button>
          <button className="card" onClick={() => pushMM()}>
            三
          </button>
          <button className="card" onClick={() => pushSD()}>
            ソ
          </button>
        </div>
      </main>

      <footer>
        <a
          href="https://github.com/silloi/mitsu-pad"
          target="_blank"
          rel="noopener noreferrer"
        >
          silloi/mitsu-pad
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
          background-color: #000;
          color: #fff;
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
          display: flex;
          justify-content: center;
          align-items: center;
          color: #ccc;
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
          font-size: 1.2rem;
        }

        .url {
          width: 320px
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
          max-width: 600px;
          margin-top: 1rem;
        }

        .card {
          height: 80px;
          width: 80px;
          margin: 0.6rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          background-color: #222;
          color: #0070f3;
          font-size: 1rem;
          text-decoration: none;
          border: 2px solid #0070f3;
          border-radius: 4px;
          transition: color 0.15s ease, border-color 0.15s ease;
        }

        .card:hover,
        .card:focus,
        .card:active {
          color: #f20059;
          border-color: #f20059;
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
