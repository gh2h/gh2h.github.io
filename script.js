// Portfolio data
const portfolioItemsData = [
    { id: '1088401381', platform: 'vimeo', category: 'editing', title: 'Telia Christmas - Neighbours' },
    { id: '1088401288', platform: 'vimeo', category: 'editing', title: 'Telia - 5g' },
    { id: '1089622696', platform: 'vimeo', category: 'editing', title: 'Alita Brut Cuvee' },
    { id: '1088418560', platform: 'vimeo', category: 'editing', title: 'Telia - I love you' },
   
    { id: '1088405416', platform: 'vimeo', category: 'editing', title: 'Love' },
    { id: '1088403330', platform: 'vimeo', category: 'editing', title: 'Maxima Christmas' },
    { id: '1089622990', platform: 'vimeo', category: 'editing', title: 'Credit 24 If you...' },
    { id: '1089623472', platform: 'vimeo', category: 'editing', title: 'Tautiška Giesmė 2016' },
   
    //{ id: 'Ly1aNiiq0oU', platform: 'youtube', category: 'editing', title: 'TELE2 Lietuva Commercial' },
    { id: '1088428260', platform: 'vimeo', category: 'editing', title: 'Starka' },
    { id: '1088402051', platform: 'vimeo', category: ['editing', 'color'], title: 'Amfora' },
    { id: '1088405286', platform: 'vimeo', category: 'editing', title: 'Gubernija Naked brown ale' },
    { id: '1089623385', platform: 'vimeo', category: 'editing', title: 'Maxima Meilutytė' },

    { id: '1089622939', platform: 'vimeo', category: 'editing', title: 'Credit 24 Good Mood' },
    { id: '1088409265', platform: 'vimeo', category: 'editing', title: 'imperial_xii (1080p)' },
    { id: '1088401186', platform: 'vimeo', category: 'editing', title: 'Švyturys - Už mus, Lietuvius' },
    { id: '1088428189', platform: 'vimeo', category: 'editing', title: 'Lithuanian vodka Unique' },

    { id: '1089622859', platform: 'vimeo', category: 'editing', title: 'Credit24 Its best...' },
    { id: '1088409184', platform: 'vimeo', category: 'editing', title: 'Gritė Daugiau švaros' },
    { id: '336777947', platform: 'vimeo', category: ['editing', 'color'], title: 'Perskindol' },
    { id: '1089623033', platform: 'vimeo', category: 'editing', title: 'DLight (DC)' },
    
    { id: '1088413507', platform: 'vimeo', category: 'editing', title: 'Telia Elevator' },
    { id: '323261279', platform: 'vimeo', category: 'editing', title: 'Dlight' },
    { id: '148210012', platform: 'vimeo', category: 'editing', title: 'Rimi Image' },
    { id: '1dny7n_Z43E', platform: 'youtube', category: 'editing', title: 'Jazzu Music Video' },

    { id: '1089622789', platform: 'vimeo', category: 'editing', title: 'Bosca' },
    { id: '148209772', platform: 'vimeo', category: 'editing', title: 'Maxima_Šeimos mėnuo' },
    { id: '134650086', platform: 'vimeo', category: 'editing', title: 'Maxima Bumsiai' },
    { id: 'YNmLAYfnD9s', platform: 'youtube', category: 'editing', title: 'Telia Lietuva Commercial' },

    { id: '1089623252', platform: 'vimeo', category: 'editing', title: 'Maxima Kalėdos' },
    { id: '1088428098', platform: 'vimeo', category: ['editing', 'color'], title: 'Labas Mustang' },
    { id: '1088401595', platform: 'vimeo', category: 'editing', title: 'Obeliai Family' },
    { id: '1088426586', platform: 'vimeo', category: 'editing', title: 'Altel Robots KZ' },

    { id: '103418528', platform: 'vimeo', category: 'editing', title: 'IKI Ūkis' },
    { id: '148072833', platform: 'vimeo', category: 'editing', title: 'Tele2 All Calls' },
    { id: '103982274', platform: 'vimeo', category: 'editing', title: 'Omnitel 4G' },
    { id: '148210418', platform: 'vimeo', category: 'editing', title: 'Ežys Kiss' }
    //{ id: '148210664', platform: 'vimeo', category: 'editing', title: 'Scanorama' },
];

console.log('Portfolio data loaded:', portfolioItemsData.length, 'items');

// Portfolio Video Modal
class VideoPortfolio {
    constructor() {
        console.log('Initializing VideoPortfolio');
        this.modal = document.getElementById('videoModal');
        this.modalVideo = document.getElementById('modalVideo');
        this.modalClose = document.getElementById('modalClose');
        this.videoGrid = document.getElementById('videoGrid');
        
        console.log('Elements found:', {
            modal: this.modal,
            modalVideo: this.modalVideo,
            modalClose: this.modalClose,
            videoGrid: this.videoGrid
        });
        
        this.init();
    }

    init() {
        console.log('Starting initialization');
        this.populateVideoGrid();
        this.videoItems = this.videoGrid.querySelectorAll('.video-item');
        console.log('Found video items:', this.videoItems.length);
        this.bindEvents();
        this.loadImages();
        console.log('Initialization complete');
    }

    populateVideoGrid() {
        console.log('Starting to populate video grid');
        if (!this.videoGrid) {
            console.error('Video grid element not found');
            return;
        }

        portfolioItemsData.forEach((itemData, index) => {
            console.log(`Creating video item ${index + 1}/${portfolioItemsData.length}`);
            const videoItem = document.createElement('div');
            videoItem.classList.add('video-item');
            videoItem.dataset.videoId = itemData.id;
            videoItem.dataset.platform = itemData.platform;

            const thumbnailDiv = document.createElement('div');
            thumbnailDiv.classList.add('video-thumbnail');

            const img = document.createElement('img');
            if (itemData.platform === 'youtube') {
                img.src = `https://img.youtube.com/vi/${itemData.id}/maxresdefault.jpg`;
            } else if (itemData.platform === 'vimeo') {
                const timestamp = new Date().getTime();
                img.src = `https://vumbnail.com/${itemData.id}_640.jpg?cb=${timestamp}`;
            }
            img.alt = itemData.title || 'Video thumbnail';
            img.loading = 'lazy';

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

            this.videoGrid.appendChild(videoItem);
        });
        
        console.log('Finished populating video grid');
    }

    bindEvents() {
        if (!this.videoItems) return;
        this.videoItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                this.openModal(item);
            });

            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.openModal(item);
                }
            });

            item.setAttribute('tabindex', '0');
        });

        this.modalClose.addEventListener('click', () => {
            this.closeModal();
        });

        this.modal.addEventListener('click', (e) => {
            if (e.target === this.modal) {
                this.closeModal();
            }
        });

        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && this.modal.classList.contains('active')) {
                this.closeModal();
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
            if (img.complete) {
                img.classList.add('loaded');
            } else {
                img.addEventListener('load', () => {
                    img.classList.add('loaded');
                });
                
                img.addEventListener('error', () => {
                    img.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCwgc2Fucy1zZXJpZiIgZm9udC1zaXplPSIxNHB4IiBmaWxsPSIjOTk5IiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+VmlkZW8gVGh1bWJuYWlsPC90ZXh0Pjwvc3ZnPg==';
                    img.classList.add('loaded');
                });
            }
        });
    }
}

// Initialize the portfolio when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded, creating VideoPortfolio instance');
    new VideoPortfolio();
});

// Handle window resize for responsive behavior
window.addEventListener('resize', utils.debounce(() => {
    console.log('Window resized');
}, 250)); 
