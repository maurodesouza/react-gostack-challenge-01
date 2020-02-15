import React from 'react';

const Comment = ({ comment }) => (
  <li className="comment_list_container">
    <img src={comment.author.avatar} alt="Foto"/>
    <p><strong>{comment.author.name}</strong> {comment.content} </p>
  </li>
)

export default Comment;
