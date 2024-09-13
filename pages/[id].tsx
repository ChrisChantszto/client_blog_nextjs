import { useRouter } from 'next/router';
import { useState, useRef, useEffect } from 'react';
import axios from 'axios';
import DynamicContent from './DynamicContent';
import { AppShell, Container, Text } from '@mantine/core';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';
import HeaderMegaMenu from '@/components/Header/Header';

interface Post {
  title: string;
  content: string;
  attachments?: Array<{
    id: string;
    url: string;
    width: number;
    height: number;
  }>;
  originalContent: string;
  featuredImage: string;
}

export default function Post() {
  const router = useRouter();
  const { id } = router.query;
  const [post, setPost] = useState<Post | null>(null);
  const sentinelRef = useRef(null);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    if (id) {
      axios.get(`/api/posts/${id}`)
        .then(response => setPost(response.data as Post))
        .catch(error => console.error('Error fetching post:', error));
    }
  }, [id]);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setFooterVisible(entry.isIntersecting);
    });
    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => {
      if (sentinelRef.current) {
        observer.unobserve(sentinelRef.current);
      }
    };
  }, []);

  if (!post) return <div>Loading...</div>;

  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
      style={{ backgroundColor: '#F5F5F5' }}
    >
      <AppShell.Header>
        <HeaderMegaMenu />
      </AppShell.Header>
      <AppShell.Main>
        <Container size="md" sx={{ display: 'flex', justifyContent: 'center' }}>
          <div style={{ width: '100%', maxWidth: '800px' }}>
            {post && (
              <div>
                {post.featuredImage && (
                  <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
                    <Image 
                      src={post.featuredImage}
                      alt={post.title}
                      width={800}
                      height={600}
                      style={{ width: '100%', height: 'auto', borderRadius: '8px' }}
                    />
                  </div>
                )}
                <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginBottom: '2rem' }}>{post.title}</h1>
                <DynamicContent content={post.originalContent} attachments={post.attachments || []} />
              </div>
            )}
            <div ref={sentinelRef} style={{ height: '1px' }}></div>
          </div>
        </Container>
      </AppShell.Main>
      {footerVisible && <AppShell.Footer><Footer /></AppShell.Footer>}
    </AppShell>
  );
}