import app from 'flarum/forum/app';

app.initializers.add('walsgit/external-links', () => {
    
    const openExternalLinksInNewTab = () => {
        if (!app.forum || !app.forum.attribute) return;

        const fullbaseUrl = new URL(app.forum.attribute('baseUrl'));
        const baseUrl = fullbaseUrl.hostname + fullbaseUrl.pathname; // base URL without https:// or https://

        const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');

        links.forEach((element) => {
            if (element.closest('.ProseMirror, .Composer')) return;

            const href = element.getAttribute('href');

            if (href) {
                try {
                    const url = new URL(href);
                    const checkedUrl = url.hostname + url.pathname; 
                    
                    if (!checkedUrl.startsWith(baseUrl)) {
                        if(!element.hasAttribute('target') || element.getAttribute('target') !== '_blank') {
                            element.setAttribute('target', '_blank');
                        }
                        
                        let rel = element.getAttribute('rel') || '';
                        const parts = rel.split(' ').filter(p => p.length > 0);
                        
                        if (!parts.includes('noopener')) parts.push('noopener');
                        if (!parts.includes('noreferrer')) parts.push('noreferrer');
                        
                        const newRel = parts.join(' ');
                        if (rel !== newRel) {
                            element.setAttribute('rel', newRel);
                        }
                    }
                } catch (e) {
                    // Ignore
                }
            }
        });
    }

    const observer = new MutationObserver(() => {
        openExternalLinksInNewTab();
    });
    
    // Attach observer to monitor dynamic changes in the document
    observer.observe(document.body, { childList: true, subtree: true });

    // Initial processing for existing links
    setTimeout(() => {
        openExternalLinksInNewTab();
    }, 0);

    // Clean up observer when the page is unloaded
    window.addEventListener('beforeunload', () => observer.disconnect());
});