import '../styles/globals.css';
import 'tailwindcss/tailwind.css';
import clsx from 'clsx';
import * as React from 'react';
import Button from '../components/buttons/Button';
import Layout from '../components/layout/Layout';

type Color = typeof colorList[number];


function MyApp({ Component, pageProps }) {
  const [mode, setMode] = React.useState<'dark' | 'light'>('light');
  const [color] = React.useState<Color>('sky');
    function toggleMode() {
      return mode === 'dark' ? setMode('light') : setMode('dark');
    }

  return (
  <>
        <main>
            <section className={clsx(mode === 'dark' ? 'bg-dark' : 'bg-gray-50', color)}>
                <div className={clsx('layout py-20 min-h-screen', mode === 'dark' ? 'text-stone-200' : 'text-stone-700')}>
                    <Layout>
                        <Button onClick={toggleMode} variant={mode === 'dark' ? 'light' : 'dark'} className="fixed top-20 -left-5">
                            {mode === 'dark' ? 'light' : 'dark'}
                        </Button>
                        <Component {...pageProps} />;
                    </Layout>
                </div>
            </section>
        </main>
    </>
  );
}

export default MyApp;

const colorList = [
  'rose',
  'pink',
  'fuchsia',
  'purple',
  'violet',
  'indigo',
  'blue',
  'sky',
  'cyan',
  'teal',
  'emerald',
  'green',
  'lime',
  'yellow',
  'amber',
  'orange',
  'red',
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
] as const;
