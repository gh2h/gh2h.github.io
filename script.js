const portfolioItemsData = [
    { id: 'L_LUpnjgPso', platform: 'youtube', category: 'color', title: 'Color Grading Showcase' },
    { id: 'oJohn_H4j2o', platform: 'youtube', category: 'editing', title: 'Corporate Video Edit' },
    { id: '7gqH2XRt2cI', platform: 'youtube', category: 'color', title: 'Music Video Color' },
    { id: '1088428260', platform: 'vimeo', category: 'editing', title: 'Starka' },
    { id: '1088428189', platform: 'vimeo', category: 'editing', title: 'Lithuanian vodka Unique' },
    { id: '1088428098', platform: 'vimeo', category: 'editing', title: 'Labas Mustang' },
    { id: '1088426586', platform: 'vimeo', category: 'editing', title: 'Altel Robots KZ' },
    { id: '1088418560', platform: 'vimeo', category: 'editing', title: 'Telia - I love you' },
    { id: '1088413507', platform: 'vimeo', category: 'editing', title: 'Telia Elevator' },
    { id: '1088411526', platform: 'vimeo', category: 'editing', title: 'Maxima' },
    { id: '1088409265', platform: 'vimeo', category: 'editing', title: 'imperial_xii (1080p)' },
    { id: '1088409184', platform: 'vimeo', category: 'editing', title: 'Gritė Daugiau švaros' },
    { id: '1088405416', platform: 'vimeo', category: 'editing', title: 'Love' },
    { id: '1088405286', platform: 'vimeo', category: 'editing', title: 'Gubernija Naked brown ale' },
    { id: '1088403330', platform: 'vimeo', category: 'editing', title: 'Maxima Christmas' },
    { id: '1088402051', platform: 'vimeo', category: 'editing', title: 'Amfora' },
    { id: '1088401595', platform: 'vimeo', category: 'editing', title: 'Obeliai Family' },
    { id: '1088401381', platform: 'vimeo', category: 'editing', title: 'Telia Christmas - Neighbours' },
    { id: '1088401288', platform: 'vimeo', category: 'editing', title: 'Telia - 5g' },
    { id: '1088401186', platform: 'vimeo', category: 'editing', title: 'Švyturys - Už mus, Lietuvius' },
    { id: '932154899', platform: 'vimeo', category: 'editing', title: 'Amouage - Extrait de Amou' },
    { id: '913318030', platform: 'vimeo', category: 'editing', title: 'Super Manki 15s' },
    { id: '336777947', platform: 'vimeo', category: 'editing', title: 'Perskindol' },
    { id: '323261279', platform: 'vimeo', category: 'editing', title: 'Dlight' },
    { id: '148210664', platform: 'vimeo', category: 'editing', title: 'Scanorama' },
    { id: '148210418', platform: 'vimeo', category: 'editing', title: 'Ežys Kiss' },
    { id: '148210012', platform: 'vimeo', category: 'editing', title: 'Rimi Image' },
    { id: '148209772', platform: 'vimeo', category: 'editing', title: 'Maxima_Šeimos mėnuo' },
    { id: '148072833', platform: 'vimeo', category: 'editing', title: 'Tele2 All Calls' },
    { id: '134650086', platform: 'vimeo', category: 'editing', title: 'Maxima Bumsiai' },
    { id: '122527454', platform: 'vimeo', category: 'editing', title: 'Iki lojalumas' },
    { id: '103982274', platform: 'vimeo', category: 'editing', title: 'Omnitel 4G' },
    { id: '103418528', platform: 'vimeo', category: 'editing', title: 'IKI Ūkis' }
    // Add more video objects here as needed, e.g.:
    // { id: 'VIDEO_ID', platform: 'youtube', category: 'CATEGORY', title: 'Your Video Title' },
    // { id: 'VIDEO_ID', platform: 'vimeo', category: 'CATEGORY', title: 'Your Video Title' },
];

// const portfolioItemsData = [
//    { id: 'dQw4w9WgXcQ', platform: 'vimeo', category: 'editing', title: 'Editing Reel' },
//    { id: 'L_LUpnjgPso', platform: 'youtube', category: 'color', title: 'Color Grading Showcase' }, // Example: Different YouTube video
//    { id: '383849776', platform: 'vimeo', category: 'editing', title: 'Lidl Reklama' },     // Example: Vimeo video from before
//    { id: 'oJohn_H4j2o', platform: 'youtube', category: 'editing', title: 'Corporate Video Edit' }, // Example: Another YouTube video
//    { id: '7gqH2XRt2cI', platform: 'youtube', category: 'color', title: 'Music Video Color' },    // Example: YouTube music video
//    { id: '290357608', platform: 'vimeo', category: 'films', title: 'Documentary Clip' }        // Example: Different Vimeo video
//    // Add more video objects here as needed, e.g.:
    // { id: 'VIDEO_ID', platform: 'youtube', category: 'CATEGORY', title: 'Your Video Title' },
    // { id: 'VIDEO_ID', platform: 'vimeo', category: 'CATEGORY', title: 'Your Video Title' },
//];


// <script>
// const accessToken = "157a5615036edce5f9ba9a0db31e19a6";

// async function loadPortfolioData() {
//   const response = await fetch('https://api.vimeo.com/me/videos?per_page=50', {
//     headers: { Authorization: `bearer ${accessToken}` }
//   });

//   const data = await response.json();

//   // Convert Vimeo data into your format
//   const vimeoVideos = data.data.map(video => ({
//     id: video.uri.split('/').pop(), // this gets just the number like '383849776'
//     platform: 'vimeo',
//     category: 'editing', // You can change this later, or use video.tags
//     title: video.name
//   }));

//   // Static YouTube videos you want to keep
//   const youtubeVideos = [
//     { id: 'L_LUpnjgPso', platform: 'youtube', category: 'color', title: 'Color Grading Showcase' },
//     { id: 'oJohn_H4j2o', platform: 'youtube', category: 'editing', title: 'Corporate Video Edit' },
//     { id: '7gqH2XRt2cI', platform: 'youtube', category: 'color', title: 'Music Video Color' }
//   ];

//   // Combine Vimeo + YouTube
//   window.portfolioItemsData = [...youtubeVideos, ...vimeoVideos];
// }
// </script>







<script>
const accessToken = "157a5615036edce5f9ba9a0db31e19a6";

async function loadPortfolioData() {
  // Static entries (e.g. YouTube)
  const staticData = [
    { id: 'L_LUpnjgPso', platform: 'youtube', category: 'color', title: 'Color Grading Showcase' },
    { id: 'oJohn_H4j2o', platform: 'youtube', category: 'editing', title: 'Corporate Video Edit' },
    { id: '7gqH2XRt2cI', platform: 'youtube', category: 'color', title: 'Music Video Color' }
  ];

  // Fetch Vimeo videos
  const res = await fetch('https://api.vimeo.com/me/videos?per_page=50', {
    headers: { Authorization: `bearer ${accessToken}` }
  });
  const json = await res.json();

  const vimeoData = json.data.map(video => ({
    id: video.uri.split('/').pop(),
    platform: 'vimeo',
    category: 'editing', // ← you can customize this logic or pull from video.tags
    title: video.name
  }));

  // Combine them
  window.portfolioItemsData = [...staticData, ...vimeoData];
}
</script>



// Portfolio Video Modal
class VideoPortfolio {
    constructor() {
        this.modal = document.getElementById('videoModal');
        this.modalVideo = document.getElementById('modalVideo');
        this.modalClose = document.getElementById('modalClose');
        this.videoGrid = document.getElementById('videoGrid'); // Get the grid container
        // this.videoItems will be set after populating the grid
        this.filterButtons = document.querySelectorAll('.filter-btn');
        
        this.init();
    }

    init() {
        this.populateVideoGrid(); // Populate grid first
        this.videoItems = this.videoGrid.querySelectorAll('.video-item'); // Now select the dynamic items
        this.bindEvents();
        this.loadImages();
        this.initFilters();
    }

    populateVideoGrid() {
        if (!this.videoGrid) return;

        portfolioItemsData.forEach(itemData => {
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.dataset.videoId = itemData.id;
            videoItem.dataset.platform = itemData.platform;
            videoItem.dataset.category = itemData.category;

            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.classList.add('video-thumbnail');

            const img = document.createElement('img');
            if (itemData.platform === 'youtube') {
                img.src = `https://img.youtube.com/vi/${itemData.id}/maxresdefault.jpg`;
            } else if (itemData.platform === 'vimeo') {
                img.src = `https://vumbnail.com/${itemData.id}.jpg`;
            }
            img.alt = itemData.title || 'Video thumbnail'; // Use provided title or a generic alt
            img.loading = 'lazy'; // Add lazy loading to images

            const playButtonDiv = document.createElement('div');
            playButtonDiv.classList.add('play-button');
            playButtonDiv.innerHTML = `
                <svg width="68" height="48" viewBox="0 0 68 48">
                    <path d="M66.52,7.74c-0.78-2.93-2.49-5.41-5.42-6.19C55.79,.13,34,0,34,0S12.21,.13,6.9,1.55 C3.97,2.33,2.27,4.81,1.48,7.74C0.06,13.05,0,24,0,24s0.06,10.95,1.48,16.26c0.78,2.93,2.49,5.41,5.42,6.19 C12.21,47.87,34,48,34,48s21.79-0.13,27.1-1.55c2.93-0.78,4.64-3.26,5.42-6.19C67.94,34.95,68,24,68,24S67.94,13.05,66.52,7.74z" fill="rgba(0,0,0,0.6)"></path>
                    <path d="M 45,24 27,14 27,34" fill="#fff"></path>
                </svg>
            `;

            thumbnailDiv.appendChild(img);
            thumbnailDiv.appendChild(playButtonDiv);
            videoItem.appendChild(thumbnailDiv);
            // Titles and descriptions are not added here as per previous request

            this.videoGrid.appendChild(videoItem);
        });
    }

    bindEvents() {
        // Video item click events - ensure this.videoItems is up-to-date
        if (!this.videoItems) return;
        this.videoItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal(item);
            });

            // Keyboard accessibility
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openModal(item);
                }
            });

            // Make items focusable
            item.setAttribute('tabindex', '0');
        });

        // Modal close events
        this.modalClose.addEventListener('click', () => {
            this.closeModal();
        });

        // Close modal when clicking outside
        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
            }
        });
    }

    initFilters() {
        this.filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const filter = button.dataset.filter;

                // Update active button state
                this.filterButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');

                this.filterItems(filter);
            });
        });
    }

    filterItems(category) {
        this.videoItems.forEach(item => {
            const itemCategory = item.dataset.category;
            if (category === 'all' || itemCategory === category) {
                item.classList.remove('hide');
                // Optional: Animate the showing of items
                // item.style.display = 'block'; // Or your preferred display type
                // item.style.opacity = '0';
                // setTimeout(() => item.style.opacity = '1', 50);
            } else {
                item.classList.add('hide');
                 // Optional: Animate the hiding of items
                // item.style.opacity = '0';
                // setTimeout(() => item.style.display = 'none', 300); // Match CSS transition
            }
        });
    }

    openModal(item) {
        const videoId = item.dataset.videoId;
        const platform = item.dataset.platform;
        
        if (!videoId || !platform) {
            console.error('Video ID or platform not found');
            return;
        }

        const embedUrl = this.getEmbedUrl(videoId, platform);
        const iframe = this.createIframe(embedUrl);
        
        this.modalVideo.innerHTML = '';
        this.modalVideo.appendChild(iframe);
        
        this.modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus management for accessibility
        this.modalClose.focus();
    }

    closeModal() {
        this.modal.classList.remove('active');
        this.modalVideo.innerHTML = '';
        document.body.style.overflow = 'auto';
    }

    getEmbedUrl(videoId, platform) {
        const embedUrls = {
            youtube: `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`,
            vimeo: `https://player.vimeo.com/video/${videoId}?autoplay=1&title=0&byline=0&portrait=0`
        };

        return embedUrls[platform] || '';
    }

    createIframe(src) {
        const iframe = document.createElement('iframe');
        iframe.src = src;
        iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
        iframe.allowFullscreen = true;
        iframe.setAttribute('loading', 'lazy');
        
        return iframe;
    }

    loadImages() {
        const images = document.querySelectorAll('.video-thumbnail img');
        
        images.forEach(img => {
            // Add loading effect
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
                
                img.addEventListener('error', () => {
                    // Fallback for broken images
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VmlkZW8gVGh1bWJuYWlsPC90ZXh0Pjwvc3ZnPg==';
                    img.classList.add('loaded');
                });
            }
        });
    }
}

// Utility functions
const utils = {
    // Debounce function for performance
    debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Smooth scroll to element
    scrollTo(element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
};

// Initialize the portfolio when DOM is loaded
//document.addEventListener('DOMContentLoaded', () => {
//    new VideoPortfolio();
document.addEventListener('DOMContentLoaded', async () => {
    await loadPortfolioData();       // ← wait until Vimeo videos are loaded
    new VideoPortfolio();            // ← then build the grid
});


    
});

// Handle window resize for responsive behavior
window.addEventListener('resize', utils.debounce(() => {
    // Any resize-specific logic can go here
    console.log('Window resized');
}, 250)); 
