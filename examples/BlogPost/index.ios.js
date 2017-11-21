import React from 'react';
import { AppRegistry } from 'react-native';
import App from './pages/App';

const BlogPost = () => <App/>;
export default BlogPost;

AppRegistry.registerComponent('BlogPost', () => BlogPost);
