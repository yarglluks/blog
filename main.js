// Article data and functionality in one file

// Articles data
const articles = [
    {
        "id": "arpanet-birth",
        "title": "The Birth of ARPANET",
        "date": "2025-06-01",
        "image": "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800",
        "excerpt": "How the first internet network was created and shaped modern communications",
        "tags": ["history", "networks"],
        "content": "In 1969, the first node of ARPANET was installed at UCLA. This groundbreaking project, funded by the Advanced Research Projects Agency (ARPA), marked the beginning of what would become the modern internet. The initial connection was established between UCLA and Stanford Research Institute, with the first message attempt being 'LOGIN' - though only 'LO' was transmitted before the system crashed. By the end of 1969, four nodes were established, creating the first computer network. This network introduced the concept of packet switching, which revolutionized data transmission and laid the foundation for today's internet infrastructure.",
        "featured": true
    },
    {
        "id": "first-browser",
        "title": "WorldWideWeb: The First Browser",
        "date": "2025-06-05",
        "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800",
        "excerpt": "The browser that started it all and revolutionized information sharing",
        "tags": ["browsers", "web"],
        "content": "Tim Berners-Lee created the first web browser, called WorldWideWeb (later renamed Nexus), in 1990 while working at CERN. This breakthrough application introduced the concept of a graphical interface for accessing the World Wide Web, combining text and links in a way that made information sharing intuitive and accessible. The browser was developed on a NeXT computer and included both browsing and editing capabilities, allowing users to view and create web content. This dual functionality reflected Berners-Lee's vision of the web as a collaborative medium where users could be both consumers and creators of content.",
        "featured": true
    },
    {
        "id": "tcp-ip-protocol",
        "title": "TCP/IP: The Internet Protocol Suite",
        "date": "2025-06-10",
        "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800",
        "excerpt": "The backbone of internet communications and networking",
        "tags": ["networks", "protocols"],
        "content": "TCP/IP became the standard protocol for ARPANET in 1983, laying the groundwork for the modern internet. Developed by Vint Cerf and Bob Kahn, this protocol suite solved the critical challenge of connecting different computer networks reliably. The TCP/IP protocol suite introduced the concept of layered networking, with TCP handling reliable data delivery and IP managing addressing and routing. This modular approach proved crucial for the internet's scalability and remains the foundation of network communications today.",
        "featured": false
    },
    {
        "id": "dot-com-bubble",
        "title": "The Dot-Com Bubble and Crash",
        "date": "2025-06-15",
        "image": "https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=800",
        "excerpt": "The rise and fall of the first web boom and its lasting impact",
        "tags": ["history", "business"],
        "content": "During the late 1990s, the internet sector experienced unprecedented growth, with dot-com companies achieving astronomical valuations. Companies like Pets.com and WebVan raised millions despite lacking sustainable business models. The NASDAQ peaked at 5,048.62 on March 10, 2000, before crashing spectacularly. By October 2002, the index had lost over 75% of its value, wiping out $5 trillion in market value. While many companies failed, survivors like Amazon and eBay emerged stronger, proving the validity of the internet business model when combined with sound business practices.",
        "featured": true
    },
    {
        "id": "email-evolution",
        "title": "The Evolution of Email",
        "date": "2025-06-20",
        "image": "https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&w=800",
        "excerpt": "From simple messages to modern communication backbone",
        "tags": ["communication", "history"],
        "content": "Email predates the internet itself, with the first email system implemented in 1965 at MIT's Compatible Time-Sharing System. Ray Tomlinson introduced the '@' symbol in 1971, revolutionizing electronic mail by enabling messages between different hosts. The first major email program, MSG, appeared in 1975, introducing features we take for granted today like forwarding and filing messages. Today, despite numerous predictions of its demise, email remains a crucial communication tool, processing billions of messages daily.",
        "featured": false
    },
    {
        "id": "social-media-rise",
        "title": "The Rise of Social Networks",
        "date": "2025-06-25",
        "image": "https://images.unsplash.com/photo-1562577309-4932fdd64cd1?auto=format&fit=crop&w=800",
        "excerpt": "How social media transformed online interaction",
        "tags": ["social", "web"],
        "content": "Social networking's roots trace back to 1997's SixDegrees.com, but it was Friendster (2002) and MySpace (2003) that first achieved mainstream success. Facebook, launched in 2004 as a Harvard-only network, revolutionized the space by emphasizing real identities and continuous engagement. The platform's news feed, introduced in 2006, changed how people consumed social content, while the 2007 launch of the iPhone and subsequent mobile revolution made social networking an always-on phenomenon.",
        "featured": false
    },
    {
        "id": "www-invention",
        "title": "The World Wide Web's Invention",
        "date": "2025-07-01",
        "image": "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800",
        "excerpt": "How Tim Berners-Lee's invention changed everything",
        "tags": ["history", "web"],
        "content": "In March 1989, Tim Berners-Lee submitted his proposal for an information management system at CERN, marking the conceptual birth of the World Wide Web. His vision combined hypertext with the internet, creating a system for sharing and accessing information globally. By 1990, he had developed the foundational elements: HTTP, HTML, the first web browser, and server software. The web was made freely available in 1993, spurring its rapid adoption and evolution into the platform we know today.",
        "featured": true
    },
    {
        "id": "wifi-story",
        "title": "The Story of Wi-Fi",
        "date": "2025-07-05",
        "image": "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=800",
        "excerpt": "From radio astronomy to ubiquitous connectivity",
        "tags": ["networks", "technology"],
        "content": "Wi-Fi's origins trace back to a 1977 paper by John O'Sullivan, initially aimed at detecting exploding mini black holes. The technology emerged from radio-astronomy research at CSIRO in Australia. The first 802.11 protocol was released in 1997, offering up to 2 Mbps speeds. The Wi-Fi Alliance formed in 1999, standardizing wireless networking technology and driving its widespread adoption. Today, Wi-Fi handles more than half of all internet traffic, with Wi-Fi 6 supporting speeds up to 9.6 Gbps.",
        "featured": false
    },
    {
        "id": "crypto-history",
        "title": "The History of Cryptocurrency",
        "date": "2025-07-10",
        "image": "https://images.unsplash.com/photo-1516245834210-c4c142787335?auto=format&fit=crop&w=800",
        "excerpt": "From digital cash concepts to blockchain revolution",
        "tags": ["technology", "finance"],
        "content": "The concept of cryptocurrency dates back to 1983 when David Chaum proposed eCash. Bitcoin, created by the pseudonymous Satoshi Nakamoto in 2008, introduced blockchain technology and decentralized digital currency. The first Bitcoin transaction occurred in 2010 when two pizzas were purchased for 10,000 BTC. This sparked a new era of digital finance, leading to thousands of cryptocurrencies and blockchain applications, fundamentally challenging traditional financial systems.",
        "featured": false
    },
    {
        "id": "search-engines",
        "title": "The Evolution of Search Engines",
        "date": "2025-07-15",
        "image": "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?auto=format&fit=crop&w=800",
        "excerpt": "From simple directories to AI-powered search",
        "tags": ["web", "technology"],
        "content": "The first search engine, Archie, was created in 1990 by Alan Emtage at McGill University. Yahoo! began in 1994 as a directory of websites, manually curated by humans. Google, founded in 1998, revolutionized search with PageRank, analyzing link relationships between pages. The company's focus on speed and relevance, combined with innovative advertising models, helped it dominate the search market. Modern search engines now incorporate AI and machine learning to understand context and user intent.",
        "featured": false
    },
    {
        "id": "mobile-web",
        "title": "The Mobile Web Revolution",
        "date": "2025-07-20",
        "image": "https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800",
        "excerpt": "How smartphones changed the internet",
        "tags": ["mobile", "technology"],
        "content": "The iPhone's 2007 launch marked a turning point for the mobile web. Unlike previous mobile browsers that offered watered-down experiences, Safari on iPhone aimed to deliver the 'real' internet. This led to responsive design, mobile-first development, and progressive web apps. Mobile internet usage surpassed desktop in 2016, fundamentally changing how websites are designed and built. Technologies like 5G continue to blur the lines between mobile and desktop experiences.",
        "featured": false
    },
    {
        "id": "cloud-computing",
        "title": "The Rise of Cloud Computing",
        "date": "2025-07-25",
        "image": "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800",
        "excerpt": "From physical servers to virtual infrastructure",
        "tags": ["technology", "infrastructure"],
        "content": "Cloud computing's origins trace back to the 1960s with IBM's mainframe time-sharing. Amazon Web Services, launched in 2006, revolutionized the field by offering virtual computing resources on demand. This Infrastructure as a Service (IaaS) model transformed how businesses approach IT infrastructure. Cloud computing enabled the startup boom of the 2010s by dramatically reducing infrastructure costs. Today, edge computing and serverless architectures represent the next evolution in cloud services.",
        "featured": false
    }
];

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
    const container = document.getElementById('featured-posts');
    const featuredPosts = articles.filter(post => post.featured);
    featuredPosts.forEach(post => {
        container.appendChild(createPostCard(post));
    });
}

// Load latest posts
function loadLatestPosts() {
    const container = document.getElementById('latest-posts');
    const nonFeaturedPosts = articles
        .filter(post => !post.featured)
        .sort((a, b) => new Date(b.date) - new Date(a.date));
    
    const latestPosts = nonFeaturedPosts.slice(0, 3);
    latestPosts.forEach(post => {
        container.appendChild(createPostCard(post));
    });
}

// Load all blog posts
function loadBlogPosts() {
    const container = document.getElementById('blog-posts');
    const filterTag = document.getElementById('filter-tag');
    
    // Populate tags dropdown
    const tags = [...new Set(articles.flatMap(post => post.tags))];
    tags.forEach(tag => {
        const option = document.createElement('option');
        option.value = tag;
        option.textContent = tag;
        filterTag.appendChild(option);
    });
    
    // Load all posts initially
    articles.forEach(post => {
        container.appendChild(createPostCard(post));
    });
    
    // Add search functionality
    const search = document.getElementById('search');
    if (search) {
        search.addEventListener('input', () => {
            const query = search.value.toLowerCase();
            container.innerHTML = '';
            
            const filtered = articles.filter(post => 
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
                articles.filter(post => post.tags.includes(selectedTag)) :
                articles;
            
            filtered.forEach(post => {
                container.appendChild(createPostCard(post));
            });
        });
    }
}

// Update post detail rendering
function loadPostDetail() {
    const urlParams = new URLSearchParams(window.location.search);
    const postId = urlParams.get('id');
    
    if (!postId) {
        document.getElementById('post-content').innerHTML = '<p>Post not found</p>';
        return;
    }

    const post = articles.find(p => p.id === postId);
    
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