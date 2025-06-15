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

// Initialize pages based on current URL
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

    // Add this new condition for post detail page
    if (document.getElementById('post-content')) {
        loadPostDetail();
    }
});

// Load all blog posts
function loadBlogPosts() {
    fetch('articles/featured.json')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('blog-posts');
            const filterTag = document.getElementById('filter-tag');
            
            // Populate tags dropdown
            const tags = [...new Set(posts.flatMap(post => post.tags))];
            tags.forEach(tag => {
                const option = document.createElement('option');
                option.value = tag;
                option.textContent = tag;
                filterTag.appendChild(option);
            });
            
            // Load all posts initially
            posts.forEach(post => {
                container.appendChild(createPostCard(post));
            });
            
            // Add search functionality
            const search = document.getElementById('search');
            if (search) {
                search.addEventListener('input', () => {
                    const query = search.value.toLowerCase();
                    container.innerHTML = '';
                    
                    const filtered = posts.filter(post => 
                        post.title.toLowerCase().includes(query) ||
                        post.excerpt.toLowerCase().includes(query)
                    );
                    
                    filtered.forEach(post => {
                        container.appendChild(createPostCard(post));
                    });
                });
            }
            
            // Add tag filtering
            if (filterTag) {
                filterTag.addEventListener('change', () => {
                    const selectedTag = filterTag.value;
                    container.innerHTML = '';
                    
                    const filtered = selectedTag ? 
                        posts.filter(post => post.tags.includes(selectedTag)) :
                        posts;
                    
                    filtered.forEach(post => {
                        container.appendChild(createPostCard(post));
                    });
                });
            }
        })
        .catch(error => console.error('Error loading posts:', error));
}

// Add this new function to load individual post
function loadPostDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) {
        document.getElementById('post-content').innerHTML = '<p>Post not found</p>';
        return;
    }

    fetch('articles/featured.json')
        .then(response => response.json())
        .then(posts => {
            const post = posts.find(p => p.id === postId);
            
            if (!post) {
                document.getElementById('post-content').innerHTML = '<p>Post not found</p>';
                return;
            }

            document.getElementById('post-content').innerHTML = `
                <img src="${post.image}" alt="${post.title}">
                <h1>${post.title}</h1>
                <div class="meta">
                    <time datetime="${post.date}">${formatDate(post.date)}</time>
                    <div class="tags">
                        ${post.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
                    </div>
                </div>
                <div class="content">
                    ${post.content}
                </div>
            `;

            // Update page title
            document.title = `${post.title} - IPCOW`;
        })
        .catch(error => {
            console.error('Error loading post:', error);
            document.getElementById('post-content').innerHTML = '<p>Error loading post</p>';
        });
}

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