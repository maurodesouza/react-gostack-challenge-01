import React from 'react'

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
  </li>
)

export default PostItem;