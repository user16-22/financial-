import { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Blog = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await axios.get('/api/blogposts');
                setPosts(res.data);
            } catch (err) {
                console.error(err);
            }
        };
        fetchPosts();
    }, []);

    return (
        <Container className="py-5">
            <h1 className="text-center fw-bold mb-5">Latest News</h1>
            <Row>
                {posts.map(post => (
                    <Col md={4} key={post._id} className="mb-4">
                        <Card className="h-100 border-0 shadow-sm">
                            <Card.Img variant="top" src={post.imageUrl} style={{ height: '200px', objectFit: 'cover' }} />
                            <Card.Body>
                                <small className="text-muted">{new Date(post.publishedDate).toLocaleDateString()}</small>
                                <Card.Title className="fw-bold mt-2">{post.title}</Card.Title>
                                <Card.Text>
                                    {post.content.substring(0, 100)}...
                                </Card.Text>
                                <Button variant="outline-primary" as={Link} to={`/blog/${post._id}`}>Read More</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
};

export default Blog;
