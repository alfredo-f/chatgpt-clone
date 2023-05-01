// useDocumentTitle.js
import { useRef, useEffect } from 'react';

function useDocumentTitle(title) {
  useRef(document.title);

  useEffect(() => {
    document.title = title;
  }, [title]);

}

export default useDocumentTitle;
