// Simple vanilla JS without modules

document.addEventListener('DOMContentLoaded', () => {
    // Load posts if we're on the home page
    if (document.getElementById('featured-posts')) {
        loadFeaturedPosts();
    }
    
    // Load latest posts if we're on the home page
    if (document.getElementById('latest-posts')) {
        loadLatestPosts();
    }
    
    // Load blog posts if we're on the blog page
    if (document.getElementById('blog-posts')) {
        loadBlogPosts();
    }

    // Load post detail if we're on a post page
    if (document.getElementById('post-content')) {
        loadPostDetail();
    }
});

// Load featured posts
function loadFeaturedPosts() {
    fetch('../articles.json')
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
    fetch('../articles.json')
        .then(response => response.json())
        .then(posts => {
            const container = document.getElementById('latest-posts');
            // Filter out featured posts and sort by date
            const nonFeaturedPosts = posts.filter(post => !post.featured)
                .sort((a, b) => new Date(b.date) - new Date(a.date));
            
            // Take the 3 most recent non-featured posts
            const latestPosts = nonFeaturedPosts.slice(0, 3);
            latestPosts.forEach(post => {
                container.appendChild(createPostCard(post));
            });
        })
        .catch(error => console.error('Error loading posts:', error));
}

// Load all blog posts
function loadBlogPosts() {
    fetch('../articles.json')
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

// Update post detail rendering
function loadPostDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) {
        document.getElementById('post-content').innerHTML = '<p>Post not found</p>';
        return;
    }

    fetch('../articles.json')
        .then(response => response.json())
        .then(posts => {
            const post = posts.find(p => p.id === postId);
            
            if (!post) {
                document.getElementById('post-content').innerHTML = '<p>Post not found</p>';
                return;
            }

            // Update breadcrumb and make it more descriptive
            const currentPage = document.getElementById('current-page');
            currentPage.textContent = post.title;
            currentPage.setAttribute('title', post.title); // Add tooltip for long titles

            document.getElementById('post-content').innerHTML = `
                <img class="post__image" src="${post.image}" alt="${post.title}">
                <h1 class="post__title">${post.title}</h1>
                <div class="post__meta">
                    <time class="post__date" datetime="${post.date}">${formatDate(post.date)}</time>
                    <div class="post__tags">
                        ${post.tags.map(tag => `<span class="post__tag">${tag}</span>`).join(' ')}
                    </div>
                </div>
                <div class="post__content">
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
    card.className = 'card';
    
    card.innerHTML = `
        <img class="card__image" src="${post.image}" alt="${post.title}">
        <div class="card__content">
            <h3 class="card__title">${post.title}</h3>
            <div class="card__meta">
                <time class="card__date" datetime="${post.date}">
                    ${formatDate(post.date)}
                </time>
            </div>
            <div class="card__tags">
                ${post.tags.map(tag => `<span class="card__tag">${tag}</span>`).join('')}
            </div>
            <p class="card__excerpt">${post.excerpt}</p>
            <a href="post.html?id=${post.id}" class="card__link">Read Article</a>
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