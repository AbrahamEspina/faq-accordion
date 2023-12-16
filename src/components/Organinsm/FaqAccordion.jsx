import CardTitle from '../Molecules/CardTitle';
import AccordionItem from '../Molecules/AccordionItem';
import { data } from '../../data';
import { HandleClick } from '../../hook/handleClick';

const FaqAccordion = () => {
  const { isOpen, setIsOpen } = HandleClick();

  const handleItemClick = (index) => {
    setIsOpen((prevIndex) => (prevIndex === index ? null : index));
  }
  
  return (
    <article className='relative top-[-180px] w-[350px] m-auto md:w-[550px] bg-white rounded-2xl shadow-2xl px-8 pt-8'>
      <CardTitle/>
      {data.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={isOpen === index}
          onClick={() => handleItemClick(index)}
        />
      ))}
    </article>
  )
}

export default FaqAccordion;