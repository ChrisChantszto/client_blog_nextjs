// pages/api/posts/[id].js

import axios from 'axios';

export default async function handler(req, res) {
  const { id } = req.query;
  
  try {
    const response = await axios.get(`https://public-api.wordpress.com/rest/v1.1/sites/sismapblog.wpcomstaging.com/posts/slug:${id}`);
    const post = response.data;
    
    // Extract attachments
    const attachments = Object.values(post.attachments).map(attachment => ({
      id: attachment.ID,
      url: attachment.URL,
      width: attachment.width,
      height: attachment.height
    }));

    // Add attachments to the post object
    const postWithAttachments = {
      ...post,
      attachments
    };
    
    res.status(200).json(postWithAttachments);
  } catch (error) {
    res.status(404).json({ message: 'Post not found' });
  }
}