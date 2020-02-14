import React, { Component } from 'react';

class PostList extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Gabriel de Oliveira",
          avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
        },
        date: "04 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non.",
        comments: [
          {
            id: 1,
            author: {
              name: "Rafael Fernandes",
              avatar: "https://randomuser.me/api/portraits/thumb/men/25.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non."
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Gisele de Oliveira",
          avatar: "https://randomuser.me/api/portraits/thumb/women/17.jpg"
        },
        date: "05 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non.",
        comments: [
          {
            id: 2,
            author: {
              name: "Tiago Rafael",
              avatar: "https://randomuser.me/api/portraits/thumb/men/25.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non."
          },
          {
            id: 3,
            author: {
              name: "Gisele de Oliveira",
              avatar: "https://randomuser.me/api/portraits/thumb/women/17.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non."
          }
        ]
      },
      {
        id: 3,
        author: {
          name: "Tiago Rafael",
          avatar: "https://randomuser.me/api/portraits/thumb/men/25.jpg"
        },
        date: "05 Jun 2019",
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non.",
        comments: [
          {
            id: 4,
            author: {
              name: "Gabriel de Oliveira",
              avatar: "https://randomuser.me/api/portraits/thumb/men/75.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non."
          },
          {
            id: 5,
            author: {
              name: "Gisele de Oliveira",
              avatar: "https://randomuser.me/api/portraits/thumb/women/17.jpg"
            },
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse laoreet risus eu sem vehicula, non."
          }
        ]
      },
    ]
  };

  render() {
    return <p> Essa é a lista de posts </p>
  }
}

export default PostList;
