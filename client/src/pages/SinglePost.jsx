import { useState, useEffect } from 'react';
import { Container, Image } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const SinglePost = () => {
    const { id } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const res = await axios.get(`/api/blogposts/${id}`);
                setPost(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPost();
    }, [id]);

    if (!post) return <Container className="py-5 text-center">Loading...</Container>;

    return (
        <Container className="py-5">
            <Image src={post.imageUrl} fluid className="w-100 mb-4 rounded shadow" style={{ maxHeight: '400px', objectFit: 'cover' }} />
            <h1 className="fw-bold mb-3">{post.title}</h1>
            <div className="text-muted mb-4">
                <span>By {post.author}</span> | <span>{new Date(post.publishedDate).toLocaleDateString()}</span>
            </div>
            <div className="lead" style={{ whiteSpace: 'pre-wrap' }}>
                {post.content}
            </div>
        </Container>
    );
};

export default SinglePost;
