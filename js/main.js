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
            const featuredPosts = posts.filter(post => post.featured);
            featuredPosts.forEach(post => {
                container.appendChild(createPostCard(post));
            });
        })
        .catch(error => console.error('Error loading posts:', error));
}

// Load latest posts
function loadLatestPosts() {
    fetch('articles/featured.json')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('latest-posts');
            // Sort by date, newest first
            const sortedPosts = posts.sort((a, b) => 
                new Date(b.date) - new Date(a.date)
            );
            // Take the 3 most recent posts
            const latestPosts = sortedPosts.slice(0, 3);
            latestPosts.forEach(post => {
                container.appendChild(createPostCard(post));
            });
        })
        .catch(error => console.error('Error loading posts:', error));
}

// Initialize both featured and latest posts on home page
document.addEventListener('DOMContentLoaded', () => {
    if (document.getElementById('featured-posts')) {
        loadFeaturedPosts();
    }
    
    if (document.getElementById('latest-posts')) {
        loadLatestPosts();
    }
    
    if (document.getElementById('blog-posts')) {
        loadBlogPosts();
    }
});

// Create a post card element
function createPostCard(post) {
    const card = document.createElement('article');
    card.className = 'post-card';
    
    card.innerHTML = `
        <img src="${post.image}" alt="${post.title}">
        <div class="post-content">
            <h3 class="post-title">${post.title}</h3>
            <time datetime="${post.date}">${formatDate(post.date)}</time>
            <p>${post.excerpt}</p>
            <a href="post.html?id=${post.id}" class="read-more">Read More</a>
        </div>
    `;
    
    return card;
}

// Helper function to format dates
function formatDate(dateStr) {
    return new Date(dateStr).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}