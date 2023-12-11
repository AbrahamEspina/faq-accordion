export const Text = ({ children, onClick, questionText }) => {
  const styleQuestionText = 'text-lg mr-5 text-darkPurple font-bold leading-6 cursor-pointer transition-[color] duration-200 hover:text-[#ad28eb]';
  const styleAnswerText = 'text-base font-normal text-grayishPurple';

  return (
    <p 
      className={questionText ? styleQuestionText : styleAnswerText} 
      onClick={onClick}
    >
      { children }
    </p>
  )
}
