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
        img.style.maxWidth = '100%';
        img.style.height = 'auto';
        img.style.display = 'block';
        img.style.margin = '0 auto';
      }
    });

    // Make the text bigger and improve readability
    const paragraphs = doc.querySelectorAll('p');
    paragraphs.forEach((p) => {
      p.style.fontSize = '19px';
      p.style.lineHeight = '1.6';
      p.style.marginBottom = '1.5rem';
    });

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return (
    <div 
      dangerouslySetInnerHTML={{ __html: processedContent }} 
      style={{ maxWidth: '100%', overflow: 'hidden' }}
    />
  );
};

export default DynamicContent;