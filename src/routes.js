import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostsIndex from './components/posts_index';
import PostNew from './components/post_new';

const Greeting = () => {
    return <div> Hey There</div>
};

// IndexRoute will be show after App wil show his own thing. If we will try to go to some "greet" url - It will not display the the IndexRoute.
//Its mean that the IndexRoute on this case will show only if the we are on the basic (root) url.
export default (
<Route path="/" component={App}> 
    <IndexRoute component= {PostsIndex}/> 
    <Route path="posts/new" component = {PostNew} />
    {/* <Route path="greet" component  ={Greeting} />
    <Route path="greet2" component  ={Greeting} />
    <Route path="greet3" component  ={Greeting} /> */} 
</Route>
);