import { data } from '../data';
import { HandleClick } from '../hook/handleClick';
import AccordionItem from './Molecules/AccordionItem';

const FaqAccordion = () => {
  const { isOpen, setIsOpen } = HandleClick();

  const handleItemClick = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  }
  
  return (
    <>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={isOpen === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </>
  )
}

export default FaqAccordion;