// pages/posts/[id].js

import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image';

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      axios.get(`/api/posts/${id}`)
        .then(response => setPost(response.data))
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
      
      {post.attachments && post.attachments.length > 0 && (
        <div>
          <h2>Attachments</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
            {post.attachments.map(attachment => (
              <div key={attachment.id} style={{ maxWidth: '300px' }}>
                <Image
                  src={attachment.url}
                  width={attachment.width}
                  height={attachment.height}
                  alt="Attachment"
                  layout="responsive"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}