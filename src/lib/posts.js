import GhostContentAPI from "@tryghost/content-api";

const api = new GhostContentAPI({
  url: 'https://demo.ghost.io',
  key: '22444f78447824223cefc48062',
  version: "v3"
});



// Get all post data
// getPosts function we call with the limit and page
export async function getPosts(limit, page) {
  return await api.posts
      .browse({limit: 5, include: 'tags,authors'})
      .then((posts) => {
          posts.forEach((post) => {
              console.log(post.title);
          });
      })
      .catch((err) => {
          console.error(err);
      });
}
