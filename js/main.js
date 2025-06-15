// Simple vanilla JS without modules

document.addEventListener('DOMContentLoaded', () => {
    // Load posts if we're on the home page
    if (document.getElementById('featured-posts')) {
        loadFeaturedPosts();
    }
    
    // Load blog posts if we're on the blog page
    if (document.getElementById('blog-posts')) {
        loadBlogPosts();
    }
});

// Load featured posts
function loadFeaturedPosts() {
    fetch('articles/featured.json')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('featured-posts');
            posts.forEach(post => {
                container.appendChild(createPostCard(post));
            });
        })
        .catch(error => console.error('Error loading posts:', error));
}

// Create a post card element
function createPostCard(post) {
    const card = document.createElement('article');
    card.className = 'post-card';
    
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="post-content">
            <h3 class="post-title">${post.title}</h3>
            <p>${post.excerpt}</p>
            <a href="post.html?id=${post.id}" class="read-more">Read More</a>
        </div>
    `;
    
    return card;
}