import React, { Component } from 'react';

class PostsList extends Component {

    constructor() {
        super();

        this.state = {
            postsList: []
        }
    }


    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(response => response.json())
            .then(json => {
                this.setState({postsList: json})
            });
    }


    render() {
        
        const posts = this.state.postsList.map(post=>{
            return <h3 key={post.id}>{post.id}. {post.title}</h3>;
        });
        console.log(posts);

        return (
            <div className="posts-list">
                <h2>Lista użytkowników</h2>
                {posts}
            </div>
        );
    }
}

export default PostsList;