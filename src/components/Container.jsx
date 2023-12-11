import BackgroundMobile from '../assets/images/background-pattern-mobile.svg';
import BackgroundDesktop from '../assets/images/background-pattern-desktop.svg';

const Container = ({ children }) => {
  return (
    <main className='antialiased w-full md:h-screen bg-lightPink'>
      <img className='block w-full md:hidden' src={BackgroundMobile} alt='background mobile' />
      <img className='hidden md:block md:w-full' src={BackgroundDesktop} alt='background mobile' />
      <article className='relative top-[-180px] bg-white max-w-[350px] md:max-w-[550px] m-auto rounded-2xl shadow-2xl px-10 pt-8'>
        { children }
      </article>
      <footer className='md:fixed md:top-[95%] md:left-[10px] flex flex-wrap justify-center text-sm'>
        Challenge by <a className='font-bold text-[#ad28eb] px-1' href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
        Coded by <a className='font-bold text-[#ad28eb] px-1' href="https://github.com/AbrahamEspina">Abraham Espinosa</a>.
      </footer>
    </main>
  )
}

export default Container;