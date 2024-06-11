import { useState } from "react";


const useDisclose = () => {
    const [open, setOpen] = useState(false);

  const isOpen = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  return {onClose,isOpen,open}
}

export default useDisclose
