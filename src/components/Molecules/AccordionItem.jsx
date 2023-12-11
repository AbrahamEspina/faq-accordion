import { useRef } from 'react';
import { Text } from '../Atoms/Text';
import Minus from '../../assets/images/icon-minus.svg';
import Plus from '../../assets/images/icon-plus.svg';

const AccordionItem = ({ question, answer, isOpen, onClick }) => {
  const heightValue = useRef();

  return (
    <article className='overflow-hidden'>
      <div className='flex items-center justify-between my-5'>
        <Text questionText onClick={onClick}>
          { question }
        </Text>
        <img src={isOpen ? Minus : Plus} alt="icon Minus Plus" width={30} className={`transition-all ${isOpen ? 'rotate-180' : null } `}/>
      </div>
      <div
        ref={heightValue}
        className='transition-[height] ease-in-out duration-300'
        style={
          isOpen
            ? { height: heightValue.current.scrollHeight }
            : { height: "0px" }
        }
      >
        <Text>{ answer }</Text>
      </div>
      <hr/>
    </article>
  );
};

export default AccordionItem;