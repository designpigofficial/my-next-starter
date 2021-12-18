import CustomLink from '../links/CustomLink';

export default function Footer() {
  return (
    <>
      <footer className='absolute bottom-0 text-gray-700'>
        © {new Date().getFullYear()} By{' '}
        <CustomLink href='https://designpig.net'>Dedrick Grey</CustomLink>
      </footer>
    </>
  );
}
