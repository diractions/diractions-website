document.addEventListener('DOMContentLoaded', function() {
    initializeCollapsibleTags();
});

function initializeCollapsibleTags() {
    const tagContainers = document.querySelectorAll('.entry-tags[data-total-tags]');
    
    tagContainers.forEach(container => {
        const totalTags = parseInt(container.getAttribute('data-total-tags'));
        const maxVisible = parseInt(container.getAttribute('data-max-visible')) || 3;
        const mobileVisible = parseInt(container.getAttribute('data-mobile-visible')) || 2;
        
        // Determine how many tags to show based on screen size
        const isMobile = window.innerWidth <= 768;
        const visibleCount = isMobile ? mobileVisible : maxVisible;
        
        if (totalTags > visibleCount) {
            const tags = container.querySelectorAll('.tag-link');
            const moreButton = container.querySelector('.more-tags');
            
            // Initially hide excess tags
            for (let i = visibleCount; i < tags.length; i++) {
                tags[i].classList.add('hidden');
            }
            
            // Update button text
            if (moreButton) {
                moreButton.textContent = `+${totalTags - visibleCount}`;
            }
        }
    });
}

function toggleTags(button) {
    const container = button.parentElement;
    const totalTags = parseInt(container.getAttribute('data-total-tags'));
    const maxVisible = parseInt(container.getAttribute('data-max-visible')) || 3;
    const mobileVisible = parseInt(container.getAttribute('data-mobile-visible')) || 2;
    const tags = container.querySelectorAll('.tag-link');
    
    // Determine how many tags to show based on screen size
    const isMobile = window.innerWidth <= 768;
    const visibleCount = isMobile ? mobileVisible : maxVisible;
    
    const isExpanded = !tags[visibleCount].classList.contains('hidden');
    
    if (isExpanded) {
        // Collapse - hide excess tags
        for (let i = visibleCount; i < tags.length; i++) {
            tags[i].classList.add('hidden');
        }
        button.textContent = `+${totalTags - visibleCount}`;
    } else {
        // Expand - show all tags
        for (let i = visibleCount; i < tags.length; i++) {
            tags[i].classList.remove('hidden');
        }
        button.textContent = 'Show less';
    }
}

// Handle responsive behavior on window resize
window.addEventListener('resize', function() {
    initializeCollapsibleTags();
});