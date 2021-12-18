import Image from 'next/image';
import * as React from 'react';

import Footer from '../components/layout/Footer';
import ArrowLink from '../components/links/ArrowLink';
import Seo from '../components/Seo';

import ThePig from '../public/images/pig.svg';


export default function Home() {
  return (
    <>
      {/* <Seo templateTitle='Home' /> */}
      <Seo />

      <main>
        <section className='bg-transparent'>
          <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>
            <Image src={ThePig} width={350} height={350} alt={'The Pig'} />
            <p className='mt-5 text-sm'>
              A starter for projects using Next.js, Tailwindcs and Sass written
              in Typescript{' '}
            </p>
            <p className='mt-2 mb-5 text-sm'>
              <ArrowLink
                href='https://github.com/designpigofficial/dp-project-starter'
                target='_blank'
              >
                See the repository
              </ArrowLink>
            </p>
            <Footer />
          </div>
        </section>
      </main>
      </>

  )
}
