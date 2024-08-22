import Image from 'next/image';
import { useEffect, useState } from 'react';

const DynamicContent = ({ content, attachments }) => {
  const [processedContent, setProcessedContent] = useState(content);

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    
    // Process all images with data-src
    const lazyImages = doc.querySelectorAll('img[data-src]');
    lazyImages.forEach((img) => {
      const dataSrc = img.getAttribute('data-src');
      if (dataSrc) {
        img.src = dataSrc;
        img.removeAttribute('data-src');
        img.removeAttribute('data-expand');
        img.classList.remove('lazyload');
      }
    });

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return (
    <div dangerouslySetInnerHTML={{ __html: processedContent }} />
  );
};

export default DynamicContent;