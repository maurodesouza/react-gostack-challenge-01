import React from 'react';

import Comment from './Comment';

const PostItem = ({ post }) => (
  <li className="post_item_container">
    <div>
      <div className="post_item_avatar">
        <img src={post.author.avatar} alt="Foto"/>
        <span>
          <h3> {post.author.name} </h3>
          <p> {post.date} </p>
        </span>
      </div>
      <p> {post.content} </p>
    </div>
    <ul>
      {post.comments.map(comment => <Comment key={comment.id} comment={comment} />)}
    </ul>
  </li>
)

export default PostItem;