import ButtonLink from '../components/links/ButtonLink';
import MyForm from '../components/forms/Form';

export default function Contact() {
  return (
    <>
    <section className='bg-transparent w-100'>
      <div className='layout flex flex-col justify-center items-center min-h-screen text-center'>

      <h1>Contact Me</h1>
      <div>
      <MyForm />
      <ButtonLink href={'/'}>Back Home</ButtonLink>
      </div>
      </div>
      </section>
    </>
  );
}
