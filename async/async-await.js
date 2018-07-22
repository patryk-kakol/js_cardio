const posts = [
  { title: 'Post one', body: 'This is post one' },
  { title: 'Post two', body: 'This is post two' },
];

function getPosts() {
  setTimeout(() => {
    let output = '';
    posts.forEach(post => output += `<li>${post.title}</li>`);
    document.body.innerHTML = output;
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      const error = false;
      // const error = true;

      if (!error) {
        resolve();
      } else {
        reject('Error: Something went wrong! Panic!');
      }
    }, 2000);
  });
}

getPosts();

async function init() {
  await createPost({ title: 'Post three', body: 'This is post three' });

  getPosts();
}

init();

// Async/Await + Fetch
async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  console.log(data);
}

fetchUsers();
