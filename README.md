# Portfolio Website

A clean, modern portfolio website designed for showcasing video content with a responsive grid layout and modal video player. Built for GitHub Pages with the cleanest possible stack - just HTML, CSS, and vanilla JavaScript.

## Features

- 📱 **Fully Responsive** - Works perfectly on all devices
- 🎥 **Video Modal Player** - Supports YouTube and Vimeo embeds
- 🎨 **Modern Design** - Clean, professional aesthetic
- ♿ **Accessible** - Keyboard navigation and screen reader friendly
- ⚡ **Fast Loading** - No external dependencies, optimized performance
- 🔧 **Easy to Customize** - Simple HTML structure, well-organized CSS

## Quick Start

1. **Update your information** in `index.html`:
   - Replace "Your Name" with your actual name
   - Update contact information in the navigation

2. **Add your videos** by editing the video items in `index.html`:
   ```html
   <div class="video-item" data-video-id="YOUR_VIDEO_ID" data-platform="youtube">
   ```

3. **Deploy to GitHub Pages**:
   - Push to your repository
   - Go to Settings → Pages
   - Select source branch (usually `main`)
   - Your site will be available at `https://yourusername.github.io/repository-name`

## Adding Videos

### YouTube Videos
1. Get the video ID from the URL (e.g., `dQw4w9WgXcQ` from `https://www.youtube.com/watch?v=dQw4w9WgXcQ`)
2. Update the video item:
   ```html
   <div class="video-item" data-video-id="dQw4w9WgXcQ" data-platform="youtube">
       <div class="video-thumbnail">
           <img src="https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg" alt="Your Video Title">
           <!-- ... rest of the structure -->
       </div>
       <h3>Your Video Title</h3>
       <p>Your video description</p>
   </div>
   ```

### Vimeo Videos
1. Get the video ID from the URL (e.g., `123456789` from `https://vimeo.com/123456789`)
2. Update the video item:
   ```html
   <div class="video-item" data-video-id="123456789" data-platform="vimeo">
       <div class="video-thumbnail">
           <img src="https://vumbnail.com/123456789.jpg" alt="Your Video Title">
           <!-- ... rest of the structure -->
       </div>
       <h3>Your Video Title</h3>
       <p>Your video description</p>
   </div>
   ```

## Customization

### Colors
Edit the CSS variables in `styles.css`:
- `#2c3e50` - Main text color
- `#3498db` - Accent/link color
- `#f8f9fa` - Background color
- `#fff` - Card background

### Grid Layout
Adjust the grid in `styles.css`:
```css
.video-grid {
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
}
```

### Contact Information
Update the navigation section in `index.html`:
```html
<div class="nav-contact">
    <a href="mailto:your.email@example.com">your.email@example.com</a>
    <span>|</span>
    <a href="tel:+1234567890">+1 (234) 567-890</a>
</div>
```

## File Structure

```
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # Documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- No external dependencies
- Optimized images with lazy loading
- Minimal JavaScript footprint
- Fast loading times

## Accessibility Features

- Keyboard navigation support
- Screen reader friendly
- Focus management
- Semantic HTML structure
- ARIA attributes where needed

## License

Feel free to use this template for your portfolio. No attribution required.

## Support

If you encounter any issues, check that:
1. Video IDs are correct
2. Platform is set to either "youtube" or "vimeo"
3. All files are in the same directory
4. GitHub Pages is properly configured 