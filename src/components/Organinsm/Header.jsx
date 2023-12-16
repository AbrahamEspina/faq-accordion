import BackgroundMobile from '../../assets/images/background-pattern-mobile.svg';
import BackgroundDesktop from '../..//assets/images/background-pattern-desktop.svg';

const Header = () => {
  return(
    <>
      <img className='block md:hidden' src={BackgroundMobile} alt='background pattern mobile' />
      <img className='hidden md:block' src={BackgroundDesktop} alt='background pattern desktop' />
    </>
  )
}

export default Header;