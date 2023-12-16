import IconStar from '../../assets/images/icon-star.svg';
import { Title } from '../Atoms/Title';

const CardTitle = () => {
  return (
    <header className='flex gap-[20px] mb-4'>
      <img src={IconStar} alt='icon star logo' width={30} />
      <Title>FAQs</Title>
    </header>
  )
}

export default CardTitle;