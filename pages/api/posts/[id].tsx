import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';

function removeImageCode(content: string): string {
  // This regex matches <figure> elements containing <img> tags
  const figureRegex = /<figure\b[^>]*>[\s\S]*?<img[\s\S]*?>[\s\S]*?<\/figure>/gi;
  
  // Replace all matches with an empty string
  return content.replace(figureRegex, '');
}

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { id } = req.query;
  
  try {
    const response = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/sismapblog.wpcomstaging.com/posts/slug:${id}`);
    const post = response.data;
    
    // Clean the content by removing image code
    const cleanedContent = removeImageCode(post.content);
    
    // Extract attachments
    const attachments = Object.values(post.attachments || {}).map((attachment: any) => ({
      id: attachment.ID,
      url: attachment.URL,
      width: attachment.width,
      height: attachment.height
    }));

    // Create the modified post object
    const modifiedPost = {
      ...post,
      content: cleanedContent,
      originalContent: post.content, // Keep the original content if needed
      attachments
    };
    
    res.status(200).json(modifiedPost);
  } catch (error) {
    console.error('Error fetching post:', error);
    res.status(404).json({ message: 'Post not found' });
  }
}