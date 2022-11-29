import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `${title}-Mobile-Planet-BD`;
  }, [title]);
};

export default useTitle;
