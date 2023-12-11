import { useState } from 'react';

export const HandleClick = () => {
  const [ isOpen, setIsOpen ] = useState(null);

  return { isOpen, setIsOpen };
}