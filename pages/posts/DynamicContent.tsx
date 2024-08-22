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
        img.width = 400; // Set the image width to 400px
        img.height = 300; // Set the image height to 300px
      }
    });

    // Make the text bigger
    const paragraphs = doc.querySelectorAll('p');
    paragraphs.forEach((p) => {
      p.style.fontSize = '17px'; // Set the font size to 18px
      p.style.lineHeight = '1.5'; // Set the line height to 1.5
    });

    setProcessedContent(doc.body.innerHTML);
  }, [content]);

  return (
    <div dangerouslySetInnerHTML={{ __html: processedContent }} />
  );
};

export default DynamicContent;