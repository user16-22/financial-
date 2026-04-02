require('dotenv').config();
const mongoose = require('mongoose');
const BlogPost = require('./models/BlogPost');

const posts = [
    {
        title: '5 Ways to Automate Your Finances',
        content: 'Automation is the key to financial freedom. Here are 5 ways to get started...',
        imageUrl: 'https://via.placeholder.com/800x400?text=Finance+Automation',
        author: 'Admin',
        publishedDate: new Date('2024-01-15')
    },
    {
        title: 'The Future of SaaS in Fintech',
        content: 'SaaS solutions are revolutionizing how we handle money. Explore the trends...',
        imageUrl: 'https://via.placeholder.com/800x400?text=Fintech+Trends',
        author: 'Admin',
        publishedDate: new Date('2024-02-10')
    },
    {
        title: 'How Cashly Saves You Money',
        content: 'Cashly uses advanced algorithms to find savings you might have missed...',
        imageUrl: 'https://via.placeholder.com/800x400?text=Save+Money',
        author: 'Admin',
        publishedDate: new Date('2024-03-05')
    }
];

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(async () => {
        console.log('MongoDB Connected for Seeding');
        await BlogPost.deleteMany({});
        await BlogPost.insertMany(posts);
        console.log('Data Imported!');
        process.exit();
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
